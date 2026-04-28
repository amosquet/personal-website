import PocketBase from "pocketbase";

const baseUrl = import.meta.env.POCKETBASE_URL || "";
const url = baseUrl.includes("://") ? baseUrl : `https://${baseUrl}`;

const pb = new PocketBase(url);

/**
 * Authenticates the PocketBase client using admin credentials.
 * This should only be called during the build process or server-side.
 */
export async function authenticate() {
    if (!pb.authStore.isValid) {
        await pb.collection("_superusers").authWithPassword(
            import.meta.env.POCKETBASE_USER,
            import.meta.env.POCKETBASE_PASSWORD
        );
    }
    return pb;
}

export default pb;
