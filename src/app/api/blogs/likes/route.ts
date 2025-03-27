import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/index";

export async function PUT(req: Request) {
    try {
        const { id } = await req.json();
        if (!id) {
            return NextResponse.json({ success: false, message: "ID is required" }, { status: 400 });
        }

        const db = await connectToDatabase();
        const collection = db.collection("blog");

        const result = await collection.updateOne(
            { _id: id },
            { $inc: { likes: 1 } }
        );

        if (result.matchedCount === 0) {
            return NextResponse.json({ success: false, message: "Blog post not found" }, { status: 404 });
        }

        return NextResponse.json({ success: true, message: "Like updated successfully" }, { status: 200 });

    } catch (error) {
        console.error("Error updating likes:", error);
        return NextResponse.json({ success: false, message: "Internal Server Error" }, { status: 500 });
    }
}
