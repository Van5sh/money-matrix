"use client";

import React, { useState, useEffect, useRef } from "react";
import { House, ShieldCheck, LogOut, Boxes, Calculator, User, Bitcoin, Info, LogIn } from "lucide-react";
import Link from "next/link";
import "../globals.css";
import { UserAuth } from "@/app/context/AuthContext";
import Image from "next/image";
import logo from "../../../public/flogo.svg";

export default function Navbar() {
    const { user, logOut } = UserAuth();
    const [open, setOpen] = useState(false);
    const [scrolling, setScrolling] = useState(false);
    const dropdownRef = useRef<HTMLUListElement>(null);

    const handleOpen = () => setOpen((prev) => !prev);

    useEffect(() => {
        const handleScroll = () => {
            setScrolling(window.scrollY > 70);
        };
        window.addEventListener("scroll", handleScroll);

        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleClose = async () => {
        setOpen(false);
        await logOut();
    };

    return (user && (
        <div
            className={`z-40 sticky  top-0 left-0 min-w-screen transition-all duration-500 ${scrolling ? "backdrop-blur-2xl bg-green-600 shadow-lg bg-opacity-45 rounded-lg" : "bg-gradient-to-b from-green-800 via-green-600 to-green-400"
                }`}
        >
            <div className={`flex gap-4 justify-between font-mono  duration-500 font-medium text-xl ${scrolling ? "pb-2 pt-4 m-4 px-6 text-white" : "py-6  p-4 pb-2 text-green-900"
                }`}>
                <div>
                    <Image src={logo} alt="Logo" />
                </div>
                <ul className="flex flex-row gap-10 justify-end items-center">
                    {user && (
                        <>
                            <li className="relative pb-2 hover:before:w-full before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-white before:transition-all before:duration-500">
                                <Link href="/main">
                                    <House className="inline mr-2 mb-1" /> Home
                                </Link>
                            </li>
                            <li className="relative pb-2 hover:before:w-full before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-white before:transition-all before:duration-500">
                                <Link href="/insurance">
                                    <ShieldCheck className="inline mr-2 mb-1" /> Insurance Plans
                                </Link>
                            </li>
                            <li className="relative pb-2 hover:before:w-full before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-white before:transition-all before:duration-500">
                                <Link href="/resources">
                                    <Boxes className="inline mr-2 mb-1" /> Resources
                                </Link>
                            </li>
                            <li className="relative pb-2 hover:before:w-full before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-white before:transition-all before:duration-500">
                                <Link href="/chat">
                                    <Boxes className="inline mr-2 mb-1" />Chat
                                </Link>
                            </li>
                            <li className="relative group">
                                <button className="flex items-center gap-2 pb-2 group-hover:before:w-full before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-white before:transition-all before:duration-500">
                                    <Calculator className="inline mr-2 mb-1" /> Calculator
                                </button>
                                <ul className="absolute right-0 mt-[16px] w-96 bg-white text-green-700 shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 grid grid-cols-2 gap-2 p-2">
                                    <Link href="../calculators/bmi_calculator"><li className="px-4 py-2 duration-200 hover:text-2xl hover:bg-green-500 hover:text-white rounded-md cursor-pointer">
                                        BMI Calculator
                                    </li></Link>
                                    <Link href="../calculators/insurance_calculator"> <li className="px-4 py-2 duration-200 hover:text-2xl hover:bg-green-500 hover:text-white rounded-md cursor-pointer">

                                        Insurance Calculator

                                    </li></Link>
                                    <li className="px-4 py-2 duration-200 hover:bg-green-500 hover:text-2xl hover:text-white rounded-md cursor-pointer">
                                        Child Life Calculator
                                    </li>
                                    <Link href="../calculators/retirement_calculator"><li className="px-4 py-2 duration-200 hover:bg-green-500 hover:text-white hover:text-2xl rounded-md cursor-pointer">
                                        Retirement Calculator
                                    </li></Link>
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
                                    <ul
                                        ref={dropdownRef}
                                        className="absolute right-0 mt-3 bg-white text-gray-800 rounded-xl shadow-lg py-3 w-56 border border-gray-200 transition-all duration-300"
                                    >
                                        <li className="px-5 py-3 hover:bg-gray-100 font-bold">
                                            {user?.displayName}
                                        </li>
                                        <li className="px-5 py-3 hover:bg-gray-100">
                                            <Link href="/profile">Profile</Link>
                                        </li>
                                        <li>
                                            <button
                                                onClick={handleClose}
                                                className="w-full text-left bg-red-500 hover:bg-red-600 text-white transition-all duration-300 px-5 py-3 rounded-b-xl flex items-center gap-2"
                                            >
                                                <LogOut size={20} /> Log Out
                                            </button>
                                        </li>
                                    </ul>
                                )}
                            </li>
                        </>
                    )}
                    {!user && (
                        <>
                            <li className="relative pb-2 hover:before:w-full before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-white before:transition-all before:duration-500">
                                <Link href="#">
                                    <House className="inline mr-2 mb-1" /> Home
                                </Link>
                            </li>
                            <li className="relative pb-2 hover:before:w-full before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-white before:transition-all before:duration-500">
                                <Link href="#">
                                    <Info className="inline mr-2 mb-1" /> About Us
                                </Link>
                            </li>
                            <li className="relative pb-2 hover:before:w-full before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-white before:transition-all before:duration-500">
                                <Link href="/login">
                                    <LogIn className="inline mr-2 mb-1" /> Login/Signup
                                </Link>
                            </li>
                        </>
                    )}
                </ul>
            </div>
        </div>
    ));
}