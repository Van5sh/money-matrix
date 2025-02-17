"use client";

import React,{useState,useEffect} from "react";
import {House, ShieldCheck,LogOut, Boxes, Calculator, User } from "lucide-react";
import Link from "next/link";
import "../globals.css";
import {UserAuth} from "@/app/context/AuthContext";

export default function Navbar() {
    const {user, logOut} = UserAuth();
    const [Open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!Open);
    }
    useEffect(() => {
        const toggleButton = document.getElementById("dark-mode-toggle");
        if (toggleButton) {
            toggleButton.addEventListener("click", () => {
                document.body.classList.toggle("dark-mode");
            });
        }
    }, []);
    const handleClose = async() => {
        setOpen(false);
        await logOut();
    }

    return (
        <nav className="bg-green-600  p-6 text-white font-bold">
            <ul className="flex flex-row gap-10 justify-end items-center">
                {user && (
                    <>
                        <li className="relative pb-2 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-white before:transition-all before:duration-500 hover:before:w-full">
                            <Link href="/main">
                                <House className="inline mr-2 mb-1"/> Home
                            </Link>
                        </li>
                        <li className="relative pb-2 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-white before:transition-all before:duration-500 hover:before:w-full">
                            <Link href="/insurance">
                                <ShieldCheck className="inline mr-2 mb-1"/> Insurance Plans
                            </Link>
                        </li>
                        <li className="relative pb-2 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-white before:transition-all before:duration-500 hover:before:w-full">
                            <Link href="/resources">
                                <Boxes className="inline mr-2 mb-1"/>
                                Resources
                            </Link>
                        </li>
                        {/*<li className="relative pb-2 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-white before:transition-all before:duration-500 hover:before:w-full">*/}
                        {/*    <Link href="/contact">*/}
                        {/*        <Info className="inline mr-2 mb-1"/> Contact Us*/}
                        {/*    </Link>*/}
                        {/*</li>*/}
                        <li className="relative group pb-0 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-white before:transition-all before:duration-500 hover:before:w-full">
                            <button className="flex items-center gap-2 pb-2 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-white before:transition-all before:duration-500 hover:before:w-full">
                                <Calculator className="inline mr-2 mb-1"/> Calculator
                            </button>
                            <ul className="absolute right-0 top-full mt-2 w-96 bg-white text-green-700 shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 grid grid-cols-2 gap-4 p-2">
                                <li className="text-md px-4 py-1 justify-center hover:bg-green-500 hover:text-white rounded-md cursor-pointer">BMI Calculator</li>
                                <li className="px-4 text-md py-1 justify-center hover:bg-green-500 hover:text-white rounded-md cursor-pointer">Insurance Calculator</li>
                                <li className="px-4 py-1 text-md justify-center hover:bg-green-500 hover:text-white rounded-md cursor-pointer">Insurance Calculator</li>
                                <li className="px-4 py-1 text-md justify-center hover:bg-green-500 hover:text-white rounded-md cursor-pointer">Insurance Calculator</li>
                                <li className="px-4 py-1 text-md justify-center hover:bg-green-500 hover:text-white rounded-md cursor-pointer">Insurance Calculator</li>
                                <li className="px-4 py-1 text-md justify-center hover:bg-green-500 hover:text-white rounded-md cursor-pointer">Insurance Calculator</li>
                            </ul>
                        </li>
                        <li className="group relative pb-2 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-white before:transition-all before:duration-500 hover:before:w-full">
                            <button onClick={handleOpen}>
                                <User size={24} className="inline mr-2 mb-1"/>
                            </button>
                            <div  className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 hidden group-hover:block bg-gray-800 text-white rounded px-2 py-1 z-10">
                                Profile
                            </div>
                            {Open && (
                                <ul className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-green-500 text-white rounded-lg shadow-lg py-2 z-10 w-48">
                                    <li className=" hover:bg-green-700 transition-all px-4 py-2 rounded-lg">
                                        <button onClick={()=>{console.log("hhhb")}} >
                                            {user?.displayName}
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            onClick={handleClose}
                                            className="bg-red-500 hover:bg-red-700 transition-all px-4 py-2 rounded-lg"
                                        >
                                            <LogOut className="inline mr-2 mb-1"/>
                                            Log Out
                                        </button>
                                    </li>
                                </ul>
                            )}
                        </li>
                    </>
                )}
            </ul>
        </nav>
    );
}
