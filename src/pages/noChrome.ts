import type { APIContext } from 'astro';
import { useUserAgent } from 'astro-useragent';

export async function GET({ request }: APIContext) {
  const uaString = request.headers.get('user-agent');
  const { isFirefox } = useUserAgent(uaString);

  if (!isFirefox) {
      return Response.redirect('https://www.mozilla.org/download', 307);
  }
}