"use client";

import React, { useState, useEffect, useRef } from "react";
import { House, ShieldCheck, LogOut, Boxes, Calculator, User } from "lucide-react";
import Link from "next/link";
import "../globals.css";
import { UserAuth } from "@/app/context/AuthContext";

export default function Navbar() {
    const { user, logOut } = UserAuth();
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

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
                                <Boxes className="inline mr-2 mb-1" /> Chat
                            </Link>
                        </li>

                        {/* Calculator Dropdown */}
                        <li className="relative group">
                            <button className="flex items-center gap-2 pb-2 hover:before:w-full before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-white before:transition-all before:duration-500">
                                <Calculator className="inline mr-2 mb-1" /> Calculator
                            </button>
                            <ul className="absolute right-0 mt-2 w-96 bg-white text-green-700 shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 grid grid-cols-1 gap-2 p-2">
                                <li className="px-4 py-2 hover:bg-green-500 hover:text-white rounded-md font-bold cursor-pointer">
                                    <Link href="../calculator/bmi_calculator">BMI Calculator</Link>
                                </li>
                                <li className="px-4 py-2 hover:bg-green-500 hover:text-white rounded-md font-bold cursor-pointer">
                                    <Link href="../calculator/insurance_calculator">
                                        Insurance Calculator
                                    </Link>
                                </li>
                                <li className="px-4 py-2 hover:bg-green-500 hover:text-white rounded-md font-bold cursor-pointer">
                                    Child Life Calculator
                                </li>
                                <li className="px-4 py-2 hover:bg-green-500 hover:text-white rounded-md font-bold cursor-pointer">
                                    <Link href="../calculator/retirement_calculator">Retirement Calculator</Link>
                                </li>
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
            </ul>
        </nav>
    );
}
