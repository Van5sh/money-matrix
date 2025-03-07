// "use client";

// import React, { useState, useEffect, useRef } from "react";
// import { House, ShieldCheck, LogOut, Boxes, Calculator, User } from "lucide-react";
// import Link from "next/link";
// import "../globals.css";
// import { UserAuth } from "@/app/context/AuthContext";

// export default function Navbar() {
//     const { user, logOut } = UserAuth();
//     const [open, setOpen] = useState(false);
//     const dropdownRef = useRef<HTMLUListElement>(null); // Corrected type

//     // Toggle dropdown
//     const handleOpen = () => setOpen((prev) => !prev);

//     useEffect(() => {
//         function handleClickOutside(event: MouseEvent) {
//             if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
//                 setOpen(false);
//             }
//         }
//         document.addEventListener("mousedown", handleClickOutside);
//         return () => document.removeEventListener("mousedown", handleClickOutside);
//     }, []);

//     const handleClose = async () => {
//         setOpen(false);
//         await logOut();
//     };

//     return (
//         <nav className="z-10 bg-green-600 p-6 text-white font-bold">
//             <ul className="flex flex-row gap-10 justify-end items-center">
//                 {user && (
//                     <>
//                         <li className="relative pb-2 hover:before:w-full before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-white before:transition-all before:duration-500">
//                             <Link href="/main">
//                                 <House className="inline mr-2 mb-1" /> Home
//                             </Link>
//                         </li>
//                         <li className="relative pb-2 hover:before:w-full before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-white before:transition-all before:duration-500">
//                             <Link href="/insurance">
//                                 <ShieldCheck className="inline mr-2 mb-1" /> Insurance Plans
//                             </Link>
//                         </li>
//                         <li className="relative pb-2 hover:before:w-full before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-white before:transition-all before:duration-500">
//                             <Link href="/resources">
//                                 <Boxes className="inline mr-2 mb-1" /> Resources
//                             </Link>
//                         </li>

//                         {/* Calculator Dropdown */}
//                         <li className="relative group">
//                             <button className="flex items-center gap-2 pb-2 hover:before:w-full before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-white before:transition-all before:duration-500">
//                                 <Calculator className="inline mr-2 mb-1" /> Calculator
//                             </button>
//                             <ul className="absolute right-0 mt-2 w-96 bg-white text-green-700 shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 grid grid-cols-1 gap-2 p-2">
//                                 <li className="px-4 py-2 hover:bg-green-500 hover:text-white rounded-md font-bold cursor-pointer">
//                                     <Link href="../calculator/bmi_calculator">BMI Calculator</Link>
//                                 </li>
//                                 <li className="px-4 py-2 hover:bg-green-500 hover:text-white rounded-md font-bold cursor-pointer">
//                                     <Link href="../calculator/insurance_calculator">
//                                         Insurance Calculator
//                                     </Link>
//                                 </li>
//                                 <li className="px-4 py-2 hover:bg-green-500 hover:text-white rounded-md font-bold cursor-pointer">
//                                     Child Life Calculator
//                                 </li>
//                                 <li className="px-4 py-2 hover:bg-green-500 hover:text-white rounded-md font-bold cursor-pointer">
//                                     <Link href="../calculator/retirement_calculator">Retirement Calculator</Link>
//                                 </li>
//                             </ul>
//                         </li>
//                         <li className="relative">
//                             <button
//                                 onClick={handleOpen}
//                                 className="flex items-center gap-2 pb-2 hover:text-green-300 transition-all duration-300"
//                             >
//                                 <User size={24} className="inline mr-2 mb-1" />
//                             </button>

//                             {open && (
//                                 <ul
//                                     ref={dropdownRef} // Corrected ref type
//                                     className="absolute right-0 mt-3 bg-white text-gray-800 rounded-xl shadow-lg py-3 w-56 border border-gray-200 transition-all duration-300"
//                                 >
//                                     <li className="px-5 py-3 hover:bg-gray-100 font-bold">
//                                         {user?.displayName}
//                                     </li>
//                                     <li className="px-5 py-3 hover:bg-gray-100">
//                                         <Link href="/profile">Profile</Link>
//                                     </li>
//                                     <li>
//                                         <button
//                                             onClick={handleClose}
//                                             className="w-full text-left bg-red-500 hover:bg-red-600 text-white transition-all duration-300 px-5 py-3 rounded-b-xl flex items-center gap-2"
//                                         >
//                                             <LogOut size={20} /> Log Out
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
// "use client";

// import React, { useState, useEffect, useRef } from "react";
// import { House, ShieldCheck, LogOut, Boxes, Calculator, User, Bitcoin, Info, LogIn } from "lucide-react";
// import Link from "next/link";
// import "../globals.css";
// import { UserAuth } from "@/app/context/AuthContext";

// export default function Navbar() {
//     const { user, logOut } = UserAuth();
//     const [open, setOpen] = useState(false);
//     const [scrolling, setScrolling] = useState(false);
//     const dropdownRef = useRef<HTMLDivElement>(null);

//     // Toggle dropdown
//     const handleOpen = () => setOpen((prev) => !prev);

//     useEffect(() => {
//         const handleScroll = () => {
//             setScrolling(window.scrollY > 40);
//         };
//         window.addEventListener("scroll", handleScroll);
//         return () => window.removeEventListener("scroll", handleScroll);
//     }, []);

//     return (
//         <div
//             className={`z-40 fixed top-0 left-0 w-screen transition-all duration-300 ${
//                 scrolling ? "backdrop-blur-2xl shadow-lg bg-opacity-45 rounded-lg" : "bg-transparent"
//             }`}
//         >
//             <div className={`flex gap-4 justify-between font-mono text-green-50 font-medium text-xl ${
//                 scrolling ? "pb-2 pt-4 m-4 px-6" : "py-6 m-4 p-4 pb-4"
//             }`}>
//                 <div>
//                     <button>
//                         <div className="text-2xl">
//                             <Bitcoin className="inline mr-1 mb-1 opacity-100" />
//                             MoneyMatrix
//                         </div>
//                     </button>
//                 </div>
//                 <ul className="flex flex-row gap-10 justify-end items-center">
//                     {!user ? (
//                         <>
//                             <li className="relative pb-2 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-white before:transition-all before:duration-500 hover:before:w-full">
//                                 <Link href="#">
//                                     <House className="inline mr-2 mb-1" /> Home
//                                 </Link>
//                             </li>
//                             <li className="relative pb-2 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-white before:transition-all before:duration-500 hover:before:w-full">
//                                 <Link href="#">
//                                     <Info className="inline mr-2 mb-1" /> About Us
//                                 </Link>
//                             </li>
//                             <li className="relative pb-2 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-white before:transition-all before:duration-500 hover:before:w-full">
//                                 <Link href="/login">
//                                     <LogIn className="inline mr-2 mb-1" /> Login/Signup
//                                 </Link>
//                             </li>
//                         </>
//                     ) : (
//                         <>
//                             <li className="relative pb-2 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-white before:transition-all before:duration-500 hover:before:w-full">
//                                 <Link href="/main">
//                                     <House className="inline mr-2 mb-1" /> Home
//                                 </Link>
//                             </li>
//                             <li className="relative pb-2 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-white before:transition-all before:duration-500 hover:before:w-full">
//                                 <Link href="/insurance">
//                                     <ShieldCheck className="inline mr-2 mb-1" /> Insurance Plans
//                                 </Link>
//                             </li>
//                             <li className="relative pb-2 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-white before:transition-all before:duration-500 hover:before:w-full">
//                                 <Link href="/resources">
//                                     <Boxes className="inline mr-2 mb-1" /> Resources
//                                 </Link>
//                             </li>
//                             <li className="relative group pb-0 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-white before:transition-all before:duration-500 hover:before:w-full">
//                                 <button className="flex items-center gap-2 pb-2">
//                                     <Calculator className="inline mr-2 mb-1" /> Calculator
//                                 </button>
//                                 <ul className="absolute right-0 top-full mt-2 w-96 bg-white text-green-700 shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 grid grid-cols-2 gap-4 p-2">
//                                     <li className="text-md px-4 py-1 hover:bg-green-500 hover:text-white rounded-md cursor-pointer">BMI Calculator</li>
//                                     <li className="px-4 text-md py-1 hover:bg-green-500 hover:text-white rounded-md cursor-pointer">Insurance Calculator</li>
//                                     <li className="px-4 py-1 text-md hover:bg-green-500 hover:text-white rounded-md cursor-pointer">Insurance Calculator</li>
//                                     <li className="px-4 py-1 text-md hover:bg-green-500 hover:text-white rounded-md cursor-pointer">Insurance Calculator</li>
//                                     <li className="px-4 py-1 text-md hover:bg-green-500 hover:text-white rounded-md cursor-pointer">Insurance Calculator</li>
//                                     <li className="px-4 py-1 text-md hover:bg-green-500 hover:text-white rounded-md cursor-pointer">Insurance Calculator</li>
//                                 </ul>
//                             </li>
//                             <li className="group relative pb-2 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-white before:transition-all before:duration-500 hover:before:w-full">
//                                 <button onClick={handleOpen}>
//                                     <User size={24} className="inline mr-2 mb-1" />
//                                 </button>
//                                 <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 hidden group-hover:block bg-gray-800 text-white rounded px-2 py-1 z-10">
//                                     Profile
//                                 </div>
//                                 {open && (
//                                     <ul className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-green-500 text-white rounded-lg shadow-lg py-2 z-10 w-48">
//                                         <li className="hover:bg-green-700 transition-all px-4 py-2 rounded-lg">
//                                             <button>{user?.displayName}</button>
//                                         </li>
//                                         <li>
//                                             <button onClick={logOut} className="bg-red-500 hover:bg-red-700 transition-all px-4 py-2 rounded-lg">
//                                                 <LogOut className="inline mr-2 mb-1" /> Log Out
//                                             </button>
//                                         </li>
//                                     </ul>
//                                 )}
//                             </li>
//                         </>
//                     )}
//                 </ul>
//             </div>
//         </div>
//     );
// }
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
            setScrolling(window.scrollY > 40);
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
            className={`z-40  top-0 left-0 min-w-screen transition-all duration-300 ${scrolling ? "backdrop-blur-2xl shadow-lg bg-opacity-45 rounded-lg" : ""
                }`}
        >
            <div className={`flex gap-4 justify-between font-mono text-green-900 font-medium text-xl ${scrolling ? "pb-2 pt-4 m-4 px-6" : "py-6 m-4 p-4 pb-4"
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
                                <button className="flex items-center gap-2 pb-2 hover:before:w-full before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-white before:transition-all before:duration-500">
                                    <Calculator className="inline mr-2 mb-1" /> Calculator
                                </button>
                                <ul className="absolute right-0 mt-2 w-96 bg-white text-green-700 shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 grid grid-cols-2 gap-2 p-2">
                                    <li className="px-4 py-2 hover:bg-green-500 hover:text-white rounded-md cursor-pointer">
                                        <Link href="../calculators/bmi_calculator">BMI Calculator</Link>
                                    </li>
                                    <li className="px-4 py-2 hover:bg-green-500 hover:text-white rounded-md cursor-pointer">
                                        <Link href="../calculators/insurance_calculator">
                                            Insurance Calculator
                                        </Link>
                                    </li>
                                    <li className="px-4 py-2 hover:bg-green-500 hover:text-white rounded-md cursor-pointer">
                                        Child Life Calculator
                                    </li>
                                    <li className="px-4 py-2 hover:bg-green-500 hover:text-white rounded-md cursor-pointer">
                                        <Link href="../calculators/retirement_calculator">Retirement Calculator</Link>
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