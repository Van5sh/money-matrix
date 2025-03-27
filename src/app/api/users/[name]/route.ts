// import { connectToDatabase } from "@/lib";
// import { NextResponse } from "next/server";
//
// export async function GET(req: Request, { params }: { params: { name: string } }) {
//     try {
//         const db = await connectToDatabase();
//         const collection = db.collection("user");
//
//         const user = await collection.findOne({ name: params.name });
//
//         if (!user) {
//             return NextResponse.json({ success: false, error: "User not found" }, { status: 404 });
//         }
//
//         return NextResponse.json({ success: true, data: user }, { status: 200 });
//     } catch (e) {
//         console.error("Error fetching user:", e);
//         return NextResponse.json({ success: false, error: "Server error" }, { status: 500 });
//     }
// }
//
// export async function PUT(req: Request, { params }: { params: { name: string } }) {
//     try {
//         const db = await connectToDatabase();
//         const body = await req.json();
//         const name = params.name;
//
//         const result = await db.collection("user").updateOne(
//             { name: name },
//             { $set: body }
//         );
//
//         if (result.matchedCount === 0) {
//             return NextResponse.json({ success: false, error: "User not found" }, { status: 404 });
//         }
//
//         return NextResponse.json({ success: true, data: result }, { status: 200 });
//     } catch (e) {
//         console.error("Error updating user:", e);
//         return NextResponse.json({ success: false, error: "Server error" }, { status: 500 });
//     }
// }
