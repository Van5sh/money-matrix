import { NextResponse } from "next/server";
import connectDB from "@/lib/mongo";
import User from "@/lib/mongo/models/user";

export async function GET() {
    try {
        await connectDB();
        const users = await User.find({});
        return NextResponse.json(users);
    } catch (err) {
        console.error("Error fetching users:", err);
        return NextResponse.json({ message: "Error fetching users" }, { status: 500 });
    }
}

export async function POST(req: Request) {
    try {
        await connectDB();
        const { name, email } = await req.json();
        if (!name || !email) {
            return NextResponse.json({ message: "All fields are required" }, { status: 400 });
        }
        const newUser = new User({ name, email });
        await newUser.save();
        return NextResponse.json(newUser, { status: 201 });
    } catch (err) {
        console.error("Error creating user:", err);
        return NextResponse.json({ message: "Error creating user" }, { status: 500 });
    }
}
