// import { NextResponse } from "next/server";
// import { MongoClient } from "mongodb";
// import User from "@/lib/mongo/models/user";
//
// const client = new MongoClient(process.env.MONGODB_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// });
//
// async function connectToDatabase() {
//     if (!client.topology || !client.topology.isConnected()) {
//         await client.connect();
//     }
//     return client.db("money");
// }
//
// // Handle GET Request
// export async function GET() {
//     try {
//         const db = await connectToDatabase();
//         const collection = db.collection("user");
//         const users = await collection.find().toArray();
//         return NextResponse.json({ success: true, data: users }, { status: 200 });
//     } catch (error) {
//         console.error("Error fetching users:", error);
//         return NextResponse.json({ success: false, error: error.message }, { status: 400 });
//     }
// }
//
// // Handle POST Request
// export async function POST(req: Request) {
//     try {
//         const db = await connectToDatabase();
//         const body = await req.json();
//
//         let user = await db.collection("user").findOne({ email: body.email });
//         if (!user) {
//             const result = await db.collection("user").insertOne(body);
//             user = await db.collection("user").findOne({ _id: result.insertedId });
//         }
//
//         return NextResponse.json({ success: true, data: user }, { status: 201 });
//     } catch (error) {
//         console.error("Error creating user:", error);
//         return NextResponse.json({ success: false, error: error.message }, { status: 400 });
//     }
// }
//
// // Handle DELETE Request
// export async function DELETE(req: Request) {
//     try {
//         const db = await connectToDatabase();
//         const body = await req.json();
//
//         const result = await db.collection("user").deleteOne({ id: body.id });
//
//         if (result.deletedCount === 0) {
//             return NextResponse.json({ success: false, error: "User not found" }, { status: 404 });
//         }
//
//         return NextResponse.json({ success: true, message: "User deleted" }, { status: 200 });
//     } catch (error) {
//         console.error("Error deleting user:", error);
//         return NextResponse.json({ success: false, error: error.message }, { status: 400 });
//     }
// }
