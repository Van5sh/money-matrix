import { connectToDatabase } from "@/lib/index";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const db = await connectToDatabase();
        const collection = db.collection("profile");
        const profiles = await collection.find({}).toArray();
        return NextResponse.json({ success: true, data: profiles }, { status: 200 });
    } catch (e) {
        return NextResponse.json({ success: false, error: e }, { status: 400 });
    }
}

export async function POST(req: Request) {
    try {
        const db = await connectToDatabase();
        const collection = db.collection("profile");
        const body = await req.json();
        console.log(body);
        const result = await collection.insertOne(body);
        return NextResponse.json({ success: true, data: result }, { status: 201 });
    } catch (e) {
        return NextResponse.json({ success: false, error: e }, { status: 400 });
    }
}