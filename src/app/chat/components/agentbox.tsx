"use client"
import React from "react";
import { Phone } from 'lucide-react';
import { useRouter } from 'next/navigation'
import user from "../../../../public/imageforchat.png"
import { Button } from "@/components/ui/button"

import Image from "next/image";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"


interface AgentboxProps {
    id?: number,
    name: string,
    phoneno: string,
    email: string,
    company: string,
    onClick?: () => void,
    services: string,
}
const Agentbox: React.FC<AgentboxProps> = ({ id, name, phoneno, company, email, services }) => {
    const router = useRouter();
    return (
        <div  className="py-3 min-w-[80vh]">
            {/* <Image src={user} alt="send" width={200} height={200} className="rounded-full bg-gray-100 border-green-900 border-2"/>
                <div className="flex flex-col gap-2 ml-2 justify-center items-center  w-96 rounded-r-full">
                    <h2>{name}</h2>
                    <div className="flex gap-2 items-center">className="cursor-pointer flex flex-row p-2 rounded-full w-[40vw] bg-gradient-to-r from-green-700  via-green-300 via-green-200 to-sky-300  justify-start"
                        <Phone className="w-4 h-4"/>
                        <p>{phoneno}</p>
                    </div>
                    <h1>{email}</h1>
                    <p>{company}</p>
                    <p>{services}</p>
                </div> */}
            <Card className="bg-gradient-to-r from-green-600 via-emerald-400 to-green-400 rounded-[20%]" >
                <CardHeader className="flex justify-center items-center">
                    <Image src={user} alt="send" width={200} height={200} className="rounded-full bg-gray-100 border-green-900 border-2 " />
                    <CardTitle className="pt-4 pb-2">{name}</CardTitle>
                    <CardDescription className="font-bebas text-3xl tracking-widest text-black">{company}</CardDescription>
                </CardHeader>
                <CardContent>

                    <div className="flex flex-col gap-2 ml-2 text-2xl  justify-center items-center    rounded-r-full">


                        <h1>{email}</h1>

                        <p>{services}</p>
                        <div className="flex justify-center gap-2 items-center">
                            <Phone className="w-4 h-4" />
                            <p>{phoneno}</p>
                        </div>
                    </div>
                </CardContent>
                <CardFooter className="flex justify-center gap-2 items-center">
                    <Button onClick={() => { router.push(`/chat/${id}`) }} className="text-xl bg-transparent border-[1px] text-black border-black hover:text-white hover:bg-green-900 hover:cursor-pointer">
                         Want to chat now?
                    </Button>
                </CardFooter>
            </Card>
        </div>
    )
}

export default Agentbox;