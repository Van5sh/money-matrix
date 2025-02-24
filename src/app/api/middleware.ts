import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    console.log("Middleware hit:", request.nextUrl.pathname);

    if (request.method === "OPTIONS") {
        return NextResponse.next();
    }
    const authHeader = request.headers.get("authorization");
    if (!authHeader) {
        return NextResponse.redirect(new URL("/home", request.url));
    }

    return NextResponse.next();
}

export async function parseJsonRequest(req: Request) {
    try {
        const contentType = req.headers.get("content-type") || "";
        if (!contentType.includes("application/json")) {
            throw new Error("Invalid content type, expected JSON");
        }
        return await req.json();
    } catch (error) {
        console.error("JSON Parsing Error:", error);
        throw new Error("Invalid JSON payload");
    }
}

export const config = {
    matcher: ["/api/:path*"],
};
