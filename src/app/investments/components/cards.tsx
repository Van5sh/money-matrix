"use client";

import React from "react";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {useRouter} from "next/navigation";

interface CardsProps {
    title: string;
    description: string;
    link:string;
}

const Cards: React.FC<CardsProps> = ({ title, description,link }) => {
    const router=useRouter();
    return(
        <Card
            onClick={() => { router.push(`/${link}`) }}
            className="flex border-green-900 flex-col justify-center items-center rounded-xl bg-gradient-to-r from-green-800 via-emerald-400 to-green-400 card-custom"
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