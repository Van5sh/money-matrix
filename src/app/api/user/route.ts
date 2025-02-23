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

export async function GET(req: Request, { params }: { params: { id: string } }) {
    try {
        await connectDB();
        const { id } = params;
        if (!id) {
            return NextResponse.json({ message: "User ID is required" }, { status: 400 });
        }
        const user = await User.findById(id);
        if (!user) {
            return NextResponse.json({ message: "User not found" }, { status: 404 });
        }
        return NextResponse.json(user);
    } catch (err) {
        console.error("Error fetching user:", err);
        return NextResponse.json({ message: "Error fetching user" }, { status: 500 });
    }
}

export async function PUT(req: Request) {
    try {
        await connectDB();
        const { id, name, email, phoneNumber, age } = await req.json();
        if (!id) {
            return NextResponse.json({ message: "User ID is required" }, { status: 400 });
        }
        const user = await User.findOneAndUpdate(
            { _id: id },
            { name, email, phoneNumber, age },
            { new: true }
        );
        if (!user) {
            return NextResponse.json({ message: "User not found" }, { status: 404 });
        }
        return NextResponse.json(user);
    } catch (err) {
        console.error("Error updating user:", err);
        return NextResponse.json({ message: "Error updating user" }, { status: 500 });
    }
}

export async function POST(req: Request) {
    try {
        await connectDB();
        const { id, name, email } = await req.json();
        if (!name || !email) {
            return NextResponse.json({ message: "All fields are required" }, { status: 400 });
        }
        const newUser = new User({ _id: id, name, email });
        await newUser.save();
        return NextResponse.json(newUser, { status: 201 });
    } catch (err) {
        console.error("Error creating user:", err);
        return NextResponse.json({ message: "Error creating user" }, { status: 500 });
    }
}
