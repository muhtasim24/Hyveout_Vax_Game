import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";


export function middleware(request: NextRequest) {
    if (request.nextUrl.pathname.startsWith("/tracks")) {
        return NextResponse.rewrite(new URL("/not-found", request.url));
    }
}

export const config = {
    matcher: ["/tracks/:path*"],
};