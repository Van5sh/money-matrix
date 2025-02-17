"use client"
import Navbar from "@/app/components/navbar";
import Image from "next/image";
// import {SignOut} from "@/app/firebase/auth";
// import SignOutButton from "@/app/components/buttons/signout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import Footer from "@/app/components/footer";
import SignInButton from "@/app/components/buttons/singin";

export default function Page() {
    return (
        <>
            {/* <div>
                <div className="relative h-screen">

                    <img src="/images/dollars.jpg" alt="Dollars" className="w-full  h-full object-cover opacity-25 "/>

                <div className="absolute inset-0 text-6xl font-sans text-green-50  flex flex-col justify-center items-center gap-10 ">
                <div className="block z-10 font-oswald">WANT TO GET</div>
                <div className="text-[175px] font-bold text-green-600 ml-16 z-50 tracking-wider font-bangers">INSURED?</div>
                </div>

<Navbar />
</div>
</div>
<div className="p-10">
<div className="text-5xl text-green-50 ">
     BMI
</div>

</div>
<Footer/> */}
                   
                   <div className="relative h-screen">
                   <img src="/images/dollars.jpg" alt="Dollars" className="w-full  h-full object-cover opacity-25 "/>

                   <div className="absolute inset-0 text-6xl mt-16 text-green-50 flex flex-col justify-center items-center gap-10">
                        <div className="block z-10 font-oswald">WANT TO GET</div>
                        <div className="text-[200px] font-bold text-green-600 ml-14  z-50 tracking-wider font-bangers">
                            INSURED?
                        </div>
                        <SignInButton/>
                    </div>
                    <Navbar/>

                   </div>
                   

            <motion.div
                initial={{ backgroundColor: "#FFFFFF", opacity: 0 }}
                whileInView={{ backgroundColor: "#43A047", opacity: 1 }}
                transition={{ duration: 1.5 }}
                className="p-10 pl-6  text-white flex flex-row"
            >
                <h1 className="font-medium font-oswald text-6xl border-r-[1px] flex justify-center items-center border-white  pr-8 mr-6">
                    ABOUT US  
                </h1>

                <div className="flex flex-row gap-10 p-10 pt-12 justify-center items-center">
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <FontAwesomeIcon icon={faIndianRupeeSign} className="text-green-200 text-[200px]" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, staggerChildren: 0.2 }}
                        className="space-y-6"
                    >
                        {["BMI CALCULATOR", "INSURANCE CALCULATOR", "ACCOUNTING", "KNOW YOUR RIGHTS"].map(
                            (text, index) => (
                                <motion.h1
                                    key={index}
                                    initial={{ x: 50, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 0.5 + index * 0.2 }}
                                    className="text-3xl font-mono font-medium relative pb-2 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-white before:transition-all before:duration-500 hover:before:w-full"
                                >
                                    {text}
                                </motion.h1>
                            )
                        )}
                    </motion.div>
                </div>
            </motion.div>
            <Footer />
        </>
    );
}
