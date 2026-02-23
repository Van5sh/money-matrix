"use client"
import animationData from "./../../../public/newloader.json";   
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), {
    ssr: false,
    loading: () => <div className=" bg-black/80" />,
});

export default function Loading() {
    return(
        <div className="pt-60 min-w-[231vh] overflow-hidden bg-black/75 flex items-center justify-center">
            <div className="scale-[0.75]">
                <Lottie
                    animationData={animationData}
                    className="flex justify-center items-center"
                    loop={true}
                />
            </div>
        </div>
    )
}