import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/index";
import Blogs from "@/lib/mongo/models/blogs";

export async function GET(){
    try {
        const db=await connectToDatabase();
        const collection=db.collection("blog");
        const blogs=await collection.find({});
        return NextResponse.json({success:true,data:blogs},{status:200});
    }catch (e){
        return NextResponse.json({success:false,error:e},{status:400});
    }
}

export async function POST(req:Request){
    try {
        const db=await connectToDatabase();
        const collection=db.collection("blog");
        const body=await req.json();
        console.log(body);
        const result=await collection.insertOne(body);
        // const result=await Blogs.create(body);
        return NextResponse.json({success:true,data:result},{status:201});
    }catch (e){
        return NextResponse.json({success:false,error:e},{status:400});
    }
}