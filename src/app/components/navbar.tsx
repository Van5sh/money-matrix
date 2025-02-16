"use client";

import {House, ShieldCheck, Info, Boxes, Calculator,LogOut} from "lucide-react";
import Link from "next/link";
import {UserAuth} from "@/app/context/AuthContext";

export default function Navbar() {
    const {user, logOut} = UserAuth();

    return (
        <nav className="bg-green-600 p-6 text-white font-bold">
            <ul className="flex flex-row gap-10 justify-end items-center">
                <li className="relative pb-2 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-white before:transition-all before:duration-500 hover:before:w-full">
                    <Link href="/main">
                        <House className="inline mr-2 mb-1"/> Home
                    </Link>
                </li>
                <li className="relative pb-2 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-white before:transition-all before:duration-500 hover:before:w-full">
                    <Link href="/about">
                        <Info className="inline mr-2 mb-1"/> About Us
                    </Link>
                </li>
                {user && (
                    <>
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
                        <li className="relative pb-2 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-white before:transition-all before:duration-500 hover:before:w-full">
                            <Link href="/calculator">
                                <Calculator className="inline mr-2 mb-1"/>
                                Calculator
                            </Link>
                        </li>
                        <li>
                            <button
                                onClick={logOut}
                                className="bg-red-500 hover:bg-red-700 transition-all px-4 py-2 rounded-lg"
                            >
                                <LogOut className="inline mr-2 mb-1" />
                                Log Out
                            </button>
                        </li>
                    </>
                )}
            </ul>
        </nav>
    );
}
