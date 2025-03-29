"use server"
import { NextResponse } from "next/server";

export async function GET(){
    try{
        const apikey=process.env.NEXT_PUBLIC_ALPHA_VANTAGE_API_KEY;
        const st="RELIANCE.BSE";
        const stock= await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=RELIANCE.BSE&outputsize=full&apikey=${apikey}`);
        const res=await stock.json();
        return NextResponse.json(res);
    }
    catch(e){
        return NextResponse.json({error:true,errortype:e},{status:400});
    }


}