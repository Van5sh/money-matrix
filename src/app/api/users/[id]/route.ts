import { connectToDatabase } from "@/lib";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

// export async function GET({params}:{params:{id:string}}) {
//     try{
//         const db=await connectToDatabase();
//         const collection=db.collection("user");
//         const user=await collection.findOne({_id:new ObjectId(params.id)});
//         return NextResponse.json({success:true,data:user},{status:200});
//     }catch (e){
//         return NextResponse.json({success:false,error:e},{status:400});
//     }
// }


export async function PUT(req: Request, { params }: { params: { id: string } }) {
    try {
        const db = await connectToDatabase();
        const body = await req.json();
        const id = params.id;

        const result = await db.collection("user").updateOne(
            { _id: new ObjectId(id) },
            { $set: body }
        );

        return NextResponse.json({ success: true, data: result }, { status: 200 });
    } catch (e) {
        console.error("Error updating user:", e);
        return NextResponse.json({ success: false, error: e }, { status: 400 });
    }
}
