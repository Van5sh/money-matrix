import { connectToDatabase } from "@/lib";
import { ObjectId } from "bson";
import { NextResponse } from "next/server";
export async function PUT(req: Request, context: { params: { id: string } }) {
    try {
        const { id } = await context.params;

        if(!id || !ObjectId.isValid(id)) {
            return NextResponse.json({ success: false, message: "Invalid blog ID" }, { status: 400 });
        }

        const db = await connectToDatabase();
        const collection = db.collection("blog");
        const body = await req.json();

        const result = await collection.updateOne(
            { _id: new ObjectId(id) },
            { $set: body }
        );
        if (result.matchedCount === 0) {
            return NextResponse.json({ success: false, message: "Blog not found" }, { status: 404 });
        }
        return NextResponse.json({ success: true, data: result }, { status: 200 });
    } catch (error) {
        console.error("Error updating blog:", error);
        return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 });
    }
}
