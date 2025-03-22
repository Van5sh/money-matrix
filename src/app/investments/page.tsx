import React from "react";
import Cards from "@/app/investments/components/cards";

export default function Page(){
    const items = [
        {
            index: 1,
            title: "FIXED DEPOSITS",
            description: "FOR YOUR SECURE FUTURE",
            link:"fixed-deposits"
        },
        {
            index: 2,
            title: "MUTUAL FUNDS",
            description: "INVEST IN THE FUTURE",
            link:"mutual-funds"
        },
        {
            index: 3,
            title: "STOCKS",
            description: "INVEST IN THE FUTURE",
            link:"stocks"
        },
        {
            index: 4,
            title:"GOLD",
            description:"SAVE FOR THE FUTURE",
            link: "gold"
        }
        ]
    return(
        <div className="flex flex-col  items-center h-screen">
            <h1 className="text-green-700 font-bold font-oswald text-5xl m-3">INVESTEMENTS</h1>
            <div className="flex flex-row gap-4">
                {items.map((item) => (
                    <Cards title={item.title} description={item.description} key={item.index} link={item.link}/>
                ))}
            </div>
            <div>
                <p className="text-green-700 font-bold text-2xl">TYPES OF INVESTMENTS</p>
                <div className="grid grid-cols-2">

                </div>
            </div>
        </div>
   )
}