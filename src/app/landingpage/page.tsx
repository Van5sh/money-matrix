"use client"
import Navbar from "@/app/components/navbar";
import Image from "next/image";
// import {SignOut} from "@/app/firebase/auth";
// import SignOutButton from "@/app/components/buttons/signout";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faIndianRupeeSign} from "@fortawesome/free-solid-svg-icons";
import {motion} from "framer-motion";
import Footer from "@/app/components/footer";
import SignInButton from "@/app/components/buttons/singin";

export default function Page() {
    return (
        <>
            <div className="relative h-screen">

                <div
                    className="absolute inset-0 text-6xl mt-15 text-green-50 flex flex-col justify-center items-center gap-10">
                    <div className="block z-10 font-oswald">WANT TO GET</div>
                    <div className="text-[200px] font-bold text-green-600 ml-14  z-50 tracking-wider font-bangers">
                        INSURED?
                    </div>
                    <SignInButton/>
                </div>
                <Navbar/>
            </div>
            <motion.div
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{duration: 1.5}}
                className="  text-white grid grid-cols-4 "
            >
                <div
                    className="bg-gradient-to-bl from-green-700  to-green-500  grid grid-cols-4 gap-4 col-span-3 p-10 transition-all duration-200 hover:z-40  hover:shadow-2xl hover:shadow-green-400   ">
                    <div
                        className="text-center text-pretty font-mono font-semibold text-2xl col-span-2 min-h-[50vh] flex justify-center items-center  ">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe neque veritatis, suscipit, esse
                        repellendus quibusdam ratione, nostrum nam velit nemo magnam dolorem dolor voluptas maxime illum
                        natus exercitationem. Quod, hic.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, recusandae itaque. Quia harum,
                        asperiores obcaecati eum rem blanditiis! Dolore commodi cupiditate accusantium eius facilis.
                        Adipisci vel voluptate mollitia et maiores!
                    </div>
                    <div></div>
                    <div></div>
                </div>
                <div
                    className="relative font-medium font-oswald text-6xl border-l-[1px] flex justify-center items-center border-white   ">
                    <img src="/images/aboutusnew.jpg" alt="Dollars"
                         className="w-full  h-full object-cover opacity-45 "/>
                    <h1 className="absolute">
                        ABOUT US
                    </h1>
                </div>
            </motion.div>


            <motion.div
                initial={{backgroundColor: "#FFFFFF", opacity: 0}}
                whileInView={{backgroundColor: "#1B5E20", opacity: 1}}
                transition={{duration: 1.5}}
                className=" text-white grid grid-cols-4 min-h-[45vh]"
            >
                <div
                    className=" relative font-medium font-oswald text-6xl border-l-[1px] flex justify-center items-center border-white   ">
                    <img src="/images/feature.avif" alt="Dollars" className="w-full  h-full object-cover opacity-45 "/>
                    <h1 className="absolute">
                        FEATURES
                    </h1>
                </div>

                <div
                    className="flex flex-row gap-10 p-10 pt-12 min-h-[50vh] justify-start items-center col-span-3 bg-gradient-to-br from-green-700  to-green-500  transition-all duration-200 hover:z-40  hover:shadow-2xl hover:shadow-green-400 ">
                    <motion.div
                        initial={{scale: 0}}
                        animate={{scale: 1}}
                        transition={{duration: 0.5}}
                    >
                        <FontAwesomeIcon icon={faIndianRupeeSign} className="text-green-200 text-[200px]"/>
                    </motion.div>

                    <motion.div
                        initial={{opacity: 0, x: 50}}
                        whileInView={{opacity: 1, x: 0}}
                        transition={{duration: 1, staggerChildren: 0.2}}
                        className="space-y-6 pl-8 "
                    >
                        {["BMI CALCULATOR", "INSURANCE CALCULATOR", "ACCOUNTING", "KNOW YOUR RIGHTS"].map(
                            (text, index) => (
                                <motion.h1
                                    key={index}
                                    initial={{x: 50, opacity: 0}}
                                    animate={{x: 0, opacity: 1}}
                                    transition={{duration: 0.5 + index * 0.2}}
                                    className="text-3xl font-mono font-medium relative pb-2 text-white"
                                >
                                    <button
                                        className="transition-all duration-100 ease-in-out hover:scale-110 hover:text-cyan-500">
                                        {text}
                                    </button>

                                </motion.h1>
                            )
                        )}
                    </motion.div>
                </div>
            </motion.div>
            <Footer/>
        </>
    );
}
