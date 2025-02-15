"use client";

import { House, Info } from "lucide-react";
import Link from "next/link";

import { UserAuth } from "@/app/context/AuthContext"; // Fixed import

export default function Navbar() {
    const { user,logOut } = UserAuth();
    console.log("User:", user);
    return (
        <nav className="bg-green-600 p-6 text-white font-bold">
            <ul className="flex flex-row gap-10 justify-end items-center">
                <li className="relative pb-2 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-white before:transition-all before:duration-500 hover:before:w-full">
                    <Link href="#">
                        <House className="inline mr-2 mb-1" /> Home
                    </Link>
                </li>
                <li className="relative pb-2 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-white before:transition-all before:duration-500 hover:before:w-full">
                    <Link href="#">
                        <Info className="inline mr-2 mb-1" /> About Us
                    </Link>
                </li>
                {!user ? (
                    <>

                    </>
                ) : (
                    <>
                        <li className="relative pb-2 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-white before:transition-all before:duration-500 hover:before:w-full">
                            Insurance Plans
                        </li>
                        <li className="relative pb-2 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-white before:transition-all before:duration-500 hover:before:w-full">
                            Resources
                        </li>
                        <li className="relative pb-2 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-white before:transition-all before:duration-500 hover:before:w-full">
                            <Link href="#">
                                <Info className="inline mr-2 mb-1" /> Contact Us
                            </Link>
                        </li>
                        <li>
                            Calculator
                        </li>
                        <button className="relative pb-2 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-white before:transition-all before:duration-500 hover:before:w-full" onClick={logOut}>
                            Log Out
                        </button>
                    </>
                )}
            </ul>
        </nav>
    );
}
