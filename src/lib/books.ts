import pb, { authenticate } from "./pocketbase";
import type { RecordModel } from "pocketbase";
import fs from "node:fs";
import path from "node:path";

interface ShishoBookRecord extends RecordModel {
  isbn: string;
  title: string;
  author: string;
  description?: string;
  cover?: string;
  imageUrl?: string;
  publishDate?: string;
  status?: string;
  startDate?: string;
  endDate?: string;
  completed?: string;
  owner?: string;
}

export interface EnrichedBook {
  isbn: string;
  title: string;
  author: string;
  status: string;
  startDate?: string;
  endDate?: string;
  completed?: string;
  publishDate: string;
  created: string;
  cover: string | null;
  description: string;
}

const PUBLIC_COVERS_DIR = path.resolve(process.cwd(), "public/covers");
const DIST_DIR = path.resolve(process.cwd(), "dist");
const DIST_COVERS_DIR = path.resolve(process.cwd(), "dist/covers");

let booksPromise: Promise<EnrichedBook[]> | null = null;

async function fetchBooks(): Promise<EnrichedBook[]> {
  try {
    await authenticate();
    const records = await pb
      .collection("shisho_books")
      .getFullList<ShishoBookRecord>();

    // Ensure public/covers exists for cover caching
    if (typeof fs !== "undefined" && fs.mkdirSync) {
      fs.mkdirSync(PUBLIC_COVERS_DIR, { recursive: true });
      if (fs.existsSync(DIST_DIR)) {
        fs.mkdirSync(DIST_COVERS_DIR, { recursive: true });
      }
    }

    const enrichedBooks: EnrichedBook[] = [];

    for (const pbBook of records) {
      const cleanIsbn =
        (pbBook.isbn || "").replace(/[^a-zA-Z0-9]/g, "").trim() || pbBook.id;
      let coverPath: string | null = null;

      let imageUrl: string | null = null;
      if (pbBook.cover) {
        imageUrl = pb.files.getURL(pbBook, pbBook.cover);
      } else if (pbBook.imageUrl) {
        imageUrl = pbBook.imageUrl;
      }

      if (imageUrl && cleanIsbn) {
        const localFileName = `${cleanIsbn}.jpg`;
        const localFilePath = path.join(PUBLIC_COVERS_DIR, localFileName);
        const distFilePath = path.join(DIST_COVERS_DIR, localFileName);
        const publicCoverUrl = `/covers/${localFileName}`;

        try {
          if (
            fs.existsSync(localFilePath) &&
            fs.statSync(localFilePath).size > 0
          ) {
            coverPath = publicCoverUrl;
            if (fs.existsSync(DIST_DIR) && !fs.existsSync(distFilePath)) {
              fs.copyFileSync(localFilePath, distFilePath);
            }
          } else {
            const res = await fetch(imageUrl);
            if (res.ok) {
              const arrayBuffer = await res.arrayBuffer();
              const buffer = Buffer.from(arrayBuffer);
              fs.writeFileSync(localFilePath, buffer);
              if (fs.existsSync(DIST_DIR)) {
                fs.writeFileSync(distFilePath, buffer);
              }
              coverPath = publicCoverUrl;
            } else {
              coverPath = imageUrl;
            }
          }
        } catch {
          coverPath = imageUrl;
        }
      }

      enrichedBooks.push({
        isbn: pbBook.isbn || cleanIsbn,
        title: pbBook.title || "Untitled",
        author: pbBook.author || "Unknown Author",
        status: pbBook.status || "planned",
        startDate: pbBook.startDate,
        endDate: pbBook.endDate,
        completed: pbBook.completed,
        publishDate: pbBook.publishDate || "",
        created: pbBook.created,
        cover: coverPath,
        description: pbBook.description || "No description available.",
      });
    }

    enrichedBooks.sort((a, b) => {
      const aIsPlanned = a.status?.toLowerCase() === "planned";
      const bIsPlanned = b.status?.toLowerCase() === "planned";

      if (aIsPlanned && !bIsPlanned) return 1;
      if (!aIsPlanned && bIsPlanned) return -1;

      const getSortKey = (item: EnrichedBook) => {
        if (item.endDate) return item.endDate;
        if (item.completed && item.completed !== "true") return item.completed;
        if (item.startDate) return item.startDate;
        return item.created;
      };

      const keyA = getSortKey(a);
      const keyB = getSortKey(b);

      if (keyA < keyB) return 1;
      if (keyA > keyB) return -1;

      const pubA = a.publishDate || "";
      const pubB = b.publishDate || "";
      if (pubA < pubB) return 1;
      if (pubA > pubB) return -1;

      return a.title.localeCompare(b.title);
    });

    return enrichedBooks;
  } catch (error) {
    console.warn("Notice: Could not fetch books from PocketBase:", error);
    return [];
  }
}

export function getBooks(): Promise<EnrichedBook[]> {
  if (!booksPromise) {
    booksPromise = fetchBooks();
  }
  return booksPromise;
}
