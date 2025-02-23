// "use client";
//
// import React,{useState,useEffect} from "react";
// import {House, ShieldCheck,LogOut, Boxes, Calculator, User } from "lucide-react";
// import Link from "next/link";
// import "../globals.css";
// import {UserAuth} from "@/app/context/AuthContext";
//
// export default function Navbar() {
//     const {user, logOut} = UserAuth();
//     const [Open, setOpen] = useState(false);
//
//     const handleOpen = () => {
//         setOpen(!Open);
//     }
//     useEffect(() => {
//         const toggleButton = document.getElementById("dark-mode-toggle");
//         if (toggleButton) {
//             toggleButton.addEventListener("click", () => {
//                 document.body.classList.toggle("dark-mode");
//             });
//         }
//     }, []);
//     const handleClose = async() => {
//         setOpen(false);
//         await logOut();
//     }
//
//     return (
//         <nav className="bg-green-600  p-6 text-white font-bold">
//             <ul className="flex flex-row gap-10 justify-end items-center">
//                 {user && (
//                     <>
//                         <li className="relative pb-2 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-white before:transition-all before:duration-500 hover:before:w-full">
//                             <Link href="/main">
//                                 <House className="inline mr-2 mb-1"/> Home
//                             </Link>
//                         </li>
//                         <li className="relative pb-2 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-white before:transition-all before:duration-500 hover:before:w-full">
//                             <Link href="/insurance">
//                                 <ShieldCheck className="inline mr-2 mb-1"/> Insurance Plans
//                             </Link>
//                         </li>
//                         <li className="relative pb-2 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-white before:transition-all before:duration-500 hover:before:w-full">
//                             <Link href="/resources">
//                                 <Boxes className="inline mr-2 mb-1"/>
//                                 Resources
//                             </Link>
//                         </li>
//                         {/*<li className="relative pb-2 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-white before:transition-all before:duration-500 hover:before:w-full">*/}
//                         {/*    <Link href="/contact">*/}
//                         {/*        <Info className="inline mr-2 mb-1"/> Contact Us*/}
//                         {/*    </Link>*/}
//                         {/*</li>*/}
//                         <li className="relative z-10 group pb-0 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-white before:transition-all before:duration-500 hover:before:w-full">
//                             <button className="flex items-center gap-2 pb-2 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-white before:transition-all before:duration-500 hover:before:w-full">
//                                 <Calculator className="inline mr-2 mb-1"/> Calculator
//                             </button>
//                             <ul className="shadow-green-950 absolute right-0 top-full mt-2 w-96 bg-white text-green-700 shadow-lg rounded-lg opacity-0 invisible font-bold group-hover:opacity-100 group-hover:visible transition-all duration-300 grid grid-cols-1 gap-2 p-2">
//                                 <li className="text-md px-4 py-1 shadow-green-800 justify-center hover:bg-green-500 hover:text-white rounded-md font-bold cursor-pointer">
//                                     <Link href="../calculator/bmi_calculator">
//                                         BMI Calculator
//                                     </Link>
//                                 </li>
//                                 <li className="px-4 text-md py-1 shadow-green-800 justify-center hover:bg-green-500 hover:text-white rounded-md font-bold cursor-pointer">Insurance Calculator</li>
//                                 <li className="px-4 py-1 text-md shadow-green-800 justify-center hover:bg-green-500 hover:text-white rounded-md font-bold cursor-pointer">Child Life Calculator</li>
//                                 <li className="px-4 py-1 text-md shadow-green-800 justify-center hover:bg-green-500 hover:text-white rounded-md font-bold cursor-pointer">Term Insurance Calculator</li>
//                             </ul>
//                         </li>
//                         <li className="group relative pb-2 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-white before:transition-all before:duration-500 hover:before:w-full">
//                             <button onClick={handleOpen}>
//                                 <User size={24} className="inline mr-2 mb-1"/>
//                             </button>
//                             <div  className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 hidden group-hover:block bg-gray-800 text-white rounded px-2 py-1 z-10">
//                                 Profile
//                             </div>
//                             {Open && (
//                                 <ul className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 mr-2 bg-green-500 text-white rounded-lg shadow-lg py-2 z-10 w-48">
//                                     <li className=" hover:bg-green-700 transition-all px-4 py-2 rounded-lg">
//                                         <button onClick={()=>{console.log("hhhb")}} >
//                                             {user?.displayName}
//                                         </button>
//                                     </li>
//                                     <li>
//                                         <button
//                                             onClick={handleClose}
//                                             className="bg-red-500 hover:bg-red-700 transition-all px-4 py-2 rounded-lg"
//                                         >
//                                             <LogOut className="inline mr-2 mb-1"/>
//                                             Log Out
//                                         </button>
//                                     </li>
//                                 </ul>
//                             )}
//                         </li>
//                     </>
//                 )}
//             </ul>
//         </nav>
//     );
// }

"use client";

import React, { useState, useEffect, useRef } from "react";
import {House, ShieldCheck,LogOut, Boxes, Calculator, User } from "lucide-react";
import Link from "next/link";
import "../globals.css";
import { UserAuth } from "@/app/context/AuthContext";

export default function Navbar() {
    const { user, logOut } = UserAuth();
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Toggle dropdown
    const handleOpen = () => setOpen((prev) => !prev);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleClose = async () => {
        setOpen(false);
        await logOut();
    };

    return (
        <nav className="z-10 bg-green-600 p-6 text-white font-bold">
            <ul className="flex flex-row gap-10 justify-end items-center">
                {user && (
                    <>
                        <li className="relative pb-2 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-white before:transition-all before:duration-500 hover:before:w-full">
                            <Link href="/main">
                                <House className="inline mr-2 mb-1" /> Home
                            </Link>
                        </li>
                        <li className="relative pb-2 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-white before:transition-all before:duration-500 hover:before:w-full">
                            <Link href="/chat">
                                <ShieldCheck className="inline mr-2 mb-1" /> Insurance Plans11
                            </Link>
                        </li>
                        <li className="relative pb-2 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-white before:transition-all before:duration-500 hover:before:w-full">
                            <Link href="/insurance">
                                <ShieldCheck className="inline mr-2 mb-1" /> Insurance Plans
                            </Link>
                        </li>
                        <li className="relative pb-2 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-white before:transition-all before:duration-500 hover:before:w-full">
                            <Link href="/resources">
                                <Boxes className="inline mr-2 mb-1" /> Resources
                            </Link>
                        </li>
                        <li className="relative z-10 group pb-0 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-white before:transition-all before:duration-500 hover:before:w-full">
                            <button className="flex items-center gap-2 pb-2 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-white before:transition-all before:duration-500 hover:before:w-full">
                                <Calculator className="inline mr-2 mb-1"/> Calculator
                            </button>
                            <ul className="shadow-green-950 absolute right-0 top-full mt-2 w-96 bg-white text-green-700 shadow-lg rounded-lg opacity-0 invisible font-bold group-hover:opacity-100 group-hover:visible transition-all duration-300 grid grid-cols-1 gap-2 p-2">
                                <li className="text-md px-4 py-1 shadow-green-800 justify-center hover:bg-green-500 hover:text-white rounded-md font-bold cursor-pointer">
                                    <Link href="../calculator/bmi_calculator">
                                        BMI Calculator
                                    </Link>
                                </li>
                                <li className="px-4 text-md py-1 shadow-green-800 justify-center hover:bg-green-500 hover:text-white rounded-md font-bold cursor-pointer">Insurance Calculator</li>
                                <li className="px-4 py-1 text-md shadow-green-800 justify-center hover:bg-green-500 hover:text-white rounded-md font-bold cursor-pointer">Child Life Calculator</li>
                                <li className="px-4 py-1 text-md shadow-green-800 justify-center hover:bg-green-500 hover:text-white rounded-md font-bold cursor-pointer">Term Insurance Calculator</li>
                            </ul>
                        </li>
                        <li className="relative">
                            <button
                                onClick={handleOpen}
                                className="flex items-center gap-2 pb-2 hover:text-green-300 transition-all duration-300"
                            >
                                <User size={24} className="inline mr-2 mb-1" />
                            </button>

                            {open && (
                                <div
                                    ref={dropdownRef}
                                    className="absolute z-10 right-0 mt-3 bg-white text-gray-800 rounded-xl shadow-lg py-3 w-56 border border-gray-200 transform transition-all duration-300 opacity-100 scale-100 origin-top-right"
                                >
                                    <div className="px-5 pb-3 text-sm text-gray-500 border-b border-gray-200">
                                        <span className="block font-semibold text-gray-800 mt-1">{user?.displayName || "Profile"}</span>
                                    </div>

                                    <button className="block w-full text-left px-5 py-3 text-gray-700 hover:bg-green-100 hover:text-green-700 transition-all duration-300 rounded-t-lg">
                                        Profile
                                    </button>
                                    <button
                                        onClick={handleClose}
                                        className=" w-full text-left bg-red-500 hover:bg-red-600 text-white transition-all duration-300 px-5 py-3 rounded-b-xl flex items-center gap-2"
                                    >
                                        <LogOut size={20} />
                                        Log Out
                                    </button>
                                </div>
                            )}
                        </li>
                    </>
                )}
            </ul>
        </nav>
    );
}
