import { connectToDatabase } from "@/lib";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
    try {
        const db = await connectToDatabase();
        const collection = db.collection("user");
        const { searchParams } = new URL(req.url);
        const name = searchParams.get("name");
        if (!name) {
            return NextResponse.json({ success: false, message: "Name parameter is required" }, { status: 400 });
        }
        const result = await collection.findOne({ name });
        if (!result) {
            return NextResponse.json({ success: false, message: "User not found" }, { status: 404 });
        }
        return NextResponse.json({ success: true, data: result });
    } catch (e) {
        return NextResponse.json({ success: false, message: (e as Error).message }, { status: 500 });
    }
}
export async function PUT(req: Request) {
    try {
        const db = await connectToDatabase();
        const collection = db.collection("user");
        const { searchParams } = new URL(req.url);
        const name = searchParams.get("name");

        if (!name) {
            return NextResponse.json({ success: false, message: "Name parameter is required" }, { status: 400 });
        }

        const updateData = await req.json();
        const result = await collection.updateOne(
            { name },
            { $set: updateData }
        );

        if (result.matchedCount === 0) {
            return NextResponse.json({ success: false, message: "User not found" }, { status: 404 });
        }

        return NextResponse.json({ success: true, message: "Profile updated successfully" });
    } catch (e) {
        return NextResponse.json({ success: false, message: (e as Error).message }, { status: 500 });
    }
}
