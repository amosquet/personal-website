import PocketBase from "pocketbase";

const baseUrl = process.env.POCKETBASE_URL || "";
const url = baseUrl.includes("://") ? baseUrl : `https://${baseUrl}`;
const pb = new PocketBase(url);
const apiKey = process.env.GOOGLE_BOOKS_API_KEY;

async function syncBooks() {
    await pb.collection("users").authWithPassword(
        process.env.POCKETBASE_USER as string,
        process.env.POCKETBASE_PASSWORD as string
    );

    const booksToSync = await pb.collection("books").getFullList({
        filter: 'title = "" || cover = ""',
    });

    if (booksToSync.length === 0) {
        console.log("All books have titles and covers. Nothing to sync.");
        return;
    }

    for (const book of booksToSync) {
        try {
            console.log(`Fetching data and cover for ISBN: ${book.isbn}...`);

            const response = await fetch(
                `https://www.googleapis.com/books/v1/volumes?q=isbn:${book.isbn}&key=${apiKey}`
            );
            const data = await response.json();
            const volume = data.items?.[0];
            if (!volume) {
                console.log(`No volume found for ISBN ${book.isbn}.`);
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

            const formData = new FormData();
            
            // Only update fields if they are missing
            if (!book.title && volumeInfo.title) formData.append("title", volumeInfo.title);
            if (!book.author && volumeInfo.authors) formData.append("author", volumeInfo.authors.join(", "));
            if (!book.publishDate && volumeInfo.publishedDate) formData.append("publishDate", volumeInfo.publishedDate);
            if (!book.description && volumeInfo.description) formData.append("description", volumeInfo.description);

            // Download the image into memory and append it to the form
            if (coverUrl && !book.cover) {
                try {
                    const imageResponse = await fetch(coverUrl);
                    if (imageResponse.ok) {
                        const imageBlob = await imageResponse.blob();
                        formData.append("cover", imageBlob, `${book.isbn}.jpg`);
                    }
                } catch (imgError) {
                    console.error(`Failed to download cover for ISBN ${book.isbn}:`, imgError);
                }
            }

            // Update the record using the FormData payload
            const keys = Array.from(formData.keys());
            if (keys.length > 0) {
                await pb.collection("books").update(book.id, formData);
                console.log(`Successfully updated ISBN ${book.isbn}.`);
            } else {
                console.log(`No new data found to update for ISBN ${book.isbn}.`);
            }

            await new Promise((resolve) => setTimeout(resolve, 500));

        } catch (error) {
            console.error(`Error processing ISBN ${book.isbn}:`, error);
        }
    }
}

syncBooks().then(() => {
    console.log("Synchronisation complete.");
    process.exit(0);
});
