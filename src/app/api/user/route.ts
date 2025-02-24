import { NextResponse } from "next/server";
import connectDB from "@/lib/mongo";
import User from "@/lib/mongo/models/user";
import {ObjectId} from "bson";
import { URL } from "url";
import { parseJsonRequest } from "../middleware"; // Import middleware

export async function GET(req: Request) {
    try {
        await connectDB();
        const url = new URL(req.url);
        const id = url.searchParams.get("id");
        const user = await User.findOne({_id:new ObjectId(id!)});
        if (!user) {
            return NextResponse.json({ message: "User not found" }, { status: 404 });
        }
        return NextResponse.json(user);
    } catch (err) {
        console.error("Error fetching user:", err);
        return NextResponse.json({ message: "Error fetching user" }, { status: 500 });
    }
}

export async function POST(req: Request) {
    try {
        await connectDB();
        const { name, email } = await parseJsonRequest(req);
        const newUser = new User({ name, email });
        await newUser.save();
        return NextResponse.json(newUser, { status: 201 });
    } catch (err) {
        console.error("Error creating user:", err);
        return NextResponse.json({ message: "Error creating user" }, { status: 500 });
    }
}