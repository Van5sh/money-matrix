"use client";

import React from "react";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {useRouter} from "next/navigation";

interface CardsProps {
    title: string;
    description: string;
    onclick:()=>void;
}

const Cards: React.FC<CardsProps> = ({ title, description,onclick }) => {
    const router=useRouter();
    return(
        <Card
            onClick={onclick}
            className="flex border-green-900 border-2  h-[45vh] w-[45vh] mx-6 space-x-5 flex-col justify-center items-center rounded-xl  bg-gradient-to-b  from-blue-800 via-emerald-600 to-blue-400 card-custom"
        >
        <CardHeader className="flex justify-center items-center">
                    <CardTitle className="text-white pt-4 pb-2">{title}</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-white">{description}</p>
                </CardContent>
            </Card>
    )
}
export default Cards;