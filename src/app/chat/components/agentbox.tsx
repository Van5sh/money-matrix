"use client"
import React from "react";
import { Phone } from 'lucide-react';
import { useRouter } from 'next/navigation'
import user from "../../../../public/imageforchat.png"

import Image from "next/image";

interface AgentboxProps{
    id?:number,
    name:string,
    phoneno:string,
    email:string,
    company:string,
    onClick?:()=>void,
    services:string,
}
const Agentbox:React.FC<AgentboxProps>=({id,name,phoneno,company,email,services})=>{
    const router = useRouter();
    return(
            <div onClick={()=>{router.push(`/chat/${id}`)}} className="cursor-pointer flex flex-row p-2 rounded-full w-[40vw] bg-gradient-to-r from-green-700  via-green-300 via-green-200 to-sky-300  justify-start">
                <Image src={user} alt="send" width={200} height={200} className="rounded-full bg-gray-100 border-green-900 border-2"/>
                <div className="flex flex-col gap-2 ml-2 justify-center items-center  w-96 rounded-r-full">
                    <h2>{name}</h2>
                    <div className="flex gap-2 items-center">
                        <Phone className="w-4 h-4"/>
                        <p>{phoneno}</p>
                    </div>
                    <h1>{email}</h1>
                    <p>{company}</p>
                    <p>{services}</p>
                </div>
            </div>
    )
}

export default Agentbox;