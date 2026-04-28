import PocketBase from "pocketbase";
import readingData from "../src/data/reading.json";

const baseUrl = process.env.POCKETBASE_URL || "";
const url = baseUrl.includes("://") ? baseUrl : `https://${baseUrl}`;
const pb = new PocketBase(url);
const apiKey = process.env.GOOGLE_BOOKS_API_KEY;

async function syncBooks() {
  // await pb.collection("_superusers").authWithPassword(
    await pb.collection("users").authWithPassword(
        process.env.POCKETBASE_USER as string,
        process.env.POCKETBASE_PASSWORD as string
    );

    for (const book of readingData) {
        try {
            const existingRecord = await pb.collection("books").getList(1, 1, {
                filter: `isbn="${book.isbn}"`,
            });

            if (existingRecord.items.length > 0) {
                console.log(`Skipping ${book.title}: Already exists.`);
                continue;
            }

            console.log(`Fetching data and cover for ${book.title}...`);

            const response = await fetch(
                `https://www.googleapis.com/books/v1/volumes?q=isbn:${book.isbn}&key=${apiKey}`
            );
            const data = await response.json();
            const volume = data.items?.[0];
            if (!volume) {
                console.log(`No volume found for ${book.title} (${book.isbn}).`);
                continue;
            }

            // Fetch specific volume details to get better image links
            const detailResponse = await fetch(
                `https://www.googleapis.com/books/v1/volumes/${volume.id}?key=${apiKey}`
            );
            const detailData = await detailResponse.json();
            const volumeInfo = detailData.volumeInfo || {};
            const imageLinks = volumeInfo.imageLinks || {};

            // Priority: extraLarge > large > medium > small > thumbnail
            let coverUrl =
                imageLinks.extraLarge ||
                imageLinks.large ||
                imageLinks.medium ||
                imageLinks.small ||
                imageLinks.thumbnail || "";

            if (coverUrl) {
                coverUrl = coverUrl
                    .replace("http:", "https:")
                    .replace("&edge=curl", "");
            }

            // Initialise a FormData object instead of a JSON dictionary
            const formData = new FormData();
            formData.append("isbn", book.isbn);
            formData.append("title", volumeInfo.title || book.title);
            formData.append("author", volumeInfo.authors?.join(", ") || book.author);
            formData.append("status", book.status);
            formData.append("startDate", book.startDate || "");
            formData.append("endDate", book.endDate || "");
            formData.append("completed", book.completed || "");
            formData.append("publishDate", volumeInfo.publishedDate || book.publishDate || "");
            formData.append("description", volumeInfo.description || "No description available.");

            // Download the image into memory and append it to the form
            if (coverUrl) {
                try {
                    const imageResponse = await fetch(coverUrl);
                    if (imageResponse.ok) {
                        const imageBlob = await imageResponse.blob();
                        // PocketBase requires a filename for the Blob
                        formData.append("cover", imageBlob, `${book.isbn}.jpg`);
                    }
                } catch (imgError) {
                    console.error(`Failed to download cover for ${book.title}:`, imgError);
                }
            }

            // Create the record using the FormData payload
            await pb.collection("books").create(formData);
            console.log(`Successfully added ${book.title}.`);

            await new Promise((resolve) => setTimeout(resolve, 500));

        } catch (error) {
            console.error(`Error processing ${book.title}:`, error);
        }
    }
}

syncBooks().then(() => {
    console.log("Synchronisation complete.");
    process.exit(0);
});
