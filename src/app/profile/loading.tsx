"use client"
import animationData from "../../../loader.json";   
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), {
    ssr: false,
    loading: () => <div className="h-screen bg-black/80" />,
});

export default function Loading() {
    return(
        <div className="bg-black/80 min-h-screen flex items-center justify-center">
            <div className="scale-[0.85]">
                <Lottie
                    animationData={animationData}
                    className="flex justify-center items-center"
                    loop={true}
                />
            </div>
        </div>
    )
}