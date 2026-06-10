import { NextRequest, NextResponse } from "next/server";
import { GUIDE_REDIRECTS } from "./lib/redirects";

// Issues true 301s for consolidated guide slugs (next.config redirects
// would emit 308). Runs only on /guides/* paths via the matcher below.
export function middleware(request: NextRequest) {
  const match = request.nextUrl.pathname.match(/^\/guides\/([^/]+)\/?$/);
  if (match) {
    const destination = GUIDE_REDIRECTS[match[1]];
    if (destination) {
      return NextResponse.redirect(new URL(destination, request.nextUrl), 301);
    }
  }
  return NextResponse.next();
}

export const config = {
  matcher: "/guides/:path*",
};
