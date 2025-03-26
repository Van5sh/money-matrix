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
            <h1 className="text-green-700 font-bold font-oswald text-7xl m-3">INVESTEMENTS</h1>
            <i className="text-white text-lg">It is not how much money you make, but how much money you keep, how hard it works for you, and how many generations you keep it for.</i>
            <div className="flex flex-row gap-4 p-8">
                {items.map((item) => (
                    <Cards title={item.title} description={item.description} key={item.index} link={item.link}/>
                ))}
            </div>
            <div className="flex justify-end gap-4 items-center flex-col">
                <h1 className="text-green-700 font-bold text-2xl">TYPES OF INVESTMENTS</h1>
                <p className="text-md text-white">Invest for the long haul. Don’t get too greedy and don’t get too scared. </p>
                <div className="grid grid-cols-2">
                </div>
            </div>
        </div>
   )
}