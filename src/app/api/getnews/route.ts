import { NextResponse } from "next/server";
import axios from "axios";

export async function GET() {
    try {
        const url = `https://api.marketaux.com/v1/news/all?countries=in&filter_entities=true&limit=10&published_after=2025-02-22T06:40&api_token=${process.env.NEXT_PUBLIC_MARKETAUX_API_KEY}`;
        const response = await axios.get(url);
        return NextResponse.json(response.data.data);
    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch news" }, { status: 500 });
    }
}
