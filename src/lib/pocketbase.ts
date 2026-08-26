import PocketBase from "pocketbase";

const baseUrl =
  import.meta.env.POCKETBASE_URL || process.env.POCKETBASE_URL || "";
const url = baseUrl.includes("://") ? baseUrl : `https://${baseUrl}`;

const pb = new PocketBase(url);

/**
 * Authenticates the PocketBase client using personal user credentials.
 * This should only be called during the build process or server-side.
 */
export async function authenticate() {
  if (!pb.authStore.isValid) {
    const user = import.meta.env.POCKETBASE_USER || process.env.POCKETBASE_USER;
    const pass =
      import.meta.env.POCKETBASE_PASSWORD || process.env.POCKETBASE_PASSWORD;
    if (!user || !pass) {
      throw new Error("POCKETBASE_USER or POCKETBASE_PASSWORD not configured.");
    }
    await pb.collection("shisho_users").authWithPassword(user, pass);
  }
  return pb;
}

export default pb;
