"use client"
import React from "react";
import { Phone } from 'lucide-react';
import { useRouter } from 'next/navigation'


interface AgentboxProps{
    id?:number,
    name:string,
    phoneno:string,
    onClick?:()=>void
}
const Agentbox:React.FC<AgentboxProps>=({id,name,phoneno})=>{
    const router = useRouter();
    return(
        <div onClick={()=>{router.push(`/chat/${id}`)}} className="cursor-pointer flex flex-col p-6 rounded-full min-w-32 items-center bg-green-300 justify-center bg-gray-50 ">
            <h2>{name}</h2>
            <div className="flex gap-2 items-center">
                <Phone className="w-4 h-4"/>
                <p>{phoneno}</p>
            </div>
        </div>
    )
}

export default Agentbox;