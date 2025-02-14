"use client";
import Navbar from "@/app/components/navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import Footer from "@/app/components/footer";

export default function Page() {
    return (
        <>
            <div>
                <Navbar />
                <div className="relative h-screen">
                    <div className="absolute inset-0 text-6xl font-sans text-green-200 flex flex-col justify-center items-center gap-10">
                        <div className="block z-10">HOW TO GET</div>
                        <div className="text-[175px] font-semibold text-green-600 ml-7 z-50">
                            INSURED
                        </div>
                    </div>
                </div>
            </div>

            <motion.div
                initial={{ backgroundColor: "#FFFFFF", opacity: 0 }}
                whileInView={{ backgroundColor: "#18a44c", opacity: 1 }}
                transition={{ duration: 1.5 }}
                className="p-10 text-white flex flex-col justify-center items-center rounded-xl shadow-lg"
            >
                <h1 className="font-bold text-5xl border-b-4 border-white pb-4 text-center">
                    ABOUT US
                </h1>

                <div className="flex flex-row gap-10 p-10 justify-center items-center">
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
                                    className="text-3xl font-semibold"
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
