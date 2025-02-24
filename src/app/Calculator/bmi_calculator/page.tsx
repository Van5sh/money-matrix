"use client"

import {useEffect, useState} from "react";

export default function Page(){
    const [weight,setWeight]=useState<number>(0);
    const [height,setHeight]=useState<number>(0);
    const [bm,setbmi]=useState<number>();
    const [isSubmi,setSubmit]=useState<boolean>(false);
    useEffect(() => {
        setWeight(parseInt(sessionStorage.getItem("weight") || "0"));
        setHeight(parseInt(sessionStorage.getItem("height") || "0"));
    }, []);

    const onSubmit=()=>{
        const bmi=weight/(height*height);
        setbmi(bmi);
        setSubmit(true);
    }

    return(
        <div>
            <form>
                <p>Weight</p>
                <input className="border-2 rosunded-lg" type="number" value={weight} onChange={(e)=>{setWeight(e.target.valueAsNumber)}} />
                <p>Height</p>
                <input className="border-2 rounded-lg" type="number" value={height} onChange={(e)=>{setHeight(e.target.valueAsNumber)}} />
                <p>Age</p>
                <input className="border-2 rounded-lg" />
            </form>
            <button onClick={onSubmit} className="bg-green-500 text-white">Calculate BMI</button>
            {isSubmi && <p className="text-green-700">Your BMI is {bm?.toFixed(2)}</p>}
        </div>
    )
}