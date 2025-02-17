"use client";
import { useState, useEffect } from "react";
import { 
  Bitcoin, House, LogIn, Info, ShieldCheck, LogOut, Boxes, Calculator, User 
} from "lucide-react";
import Link from "next/link";
import { UserAuth } from "@/app/context/AuthContext";
import "../globals.css";

export default function Navbar() {
  const { user, logOut } = UserAuth();
  console.log("User:", user);
  const [open, setOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-screen transition-colors duration-300 ${
        scrolling ? "bg-green-600 shadow-lg bg-opacity-65 rounded-lg" : "bg-transparent"
      }`}
    >
      <div className="flex gap-4 justify-between font-mono text-green-50 font-medium m-4 p-4 text-xl pb-4 py-6">
        <div>
          <button>
            <div className="text-2xl">
              <Bitcoin className="inline mr-1 mb-1 opacity-100" />
              MoneyMatrix
            </div>
          </button>
        </div>
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
            <li className="relative pb-2 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-white before:transition-all before:duration-500 hover:before:w-full">
              <Link href="/login">
                <LogIn className="inline mr-2 mb-1" /> Login/Signup
              </Link>
            </li>
          ) : (
            <>
              <li className="relative pb-2 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-white before:transition-all before:duration-500 hover:before:w-full">
                <Link href="/main">
                  <House className="inline mr-2 mb-1" /> Home
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
              <li className="relative group pb-0 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-white before:transition-all before:duration-500 hover:before:w-full">
                <button className="flex items-center gap-2 pb-2">
                  <Calculator className="inline mr-2 mb-1" /> Calculator
                </button>
                <ul className="absolute right-0 top-full mt-2 w-96 bg-white text-green-700 shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 grid grid-cols-2 gap-4 p-2">
                  <li className="text-md px-4 py-1 hover:bg-green-500 hover:text-white rounded-md cursor-pointer">BMI Calculator</li>
                  <li className="px-4 text-md py-1 hover:bg-green-500 hover:text-white rounded-md cursor-pointer">Insurance Calculator</li>
                  <li className="px-4 py-1 text-md hover:bg-green-500 hover:text-white rounded-md cursor-pointer">Insurance Calculator</li>
                  <li className="px-4 py-1 text-md hover:bg-green-500 hover:text-white rounded-md cursor-pointer">Insurance Calculator</li>
                  <li className="px-4 py-1 text-md hover:bg-green-500 hover:text-white rounded-md cursor-pointer">Insurance Calculator</li>
                  <li className="px-4 py-1 text-md hover:bg-green-500 hover:text-white rounded-md cursor-pointer">Insurance Calculator</li>
                </ul>
              </li>
              <li className="group relative pb-2 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-white before:transition-all before:duration-500 hover:before:w-full">
                <button onClick={handleOpen}>
                  <User size={24} className="inline mr-2 mb-1" />
                </button>
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 hidden group-hover:block bg-gray-800 text-white rounded px-2 py-1 z-10">
                  Profile
                </div>
                {open && (
                  <ul className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-green-500 text-white rounded-lg shadow-lg py-2 z-10 w-48">
                    <li className="hover:bg-green-700 transition-all px-4 py-2 rounded-lg">
                      <button>{user?.displayName}</button>
                    </li>
                    <li>
                      <button onClick={logOut} className="bg-red-500 hover:bg-red-700 transition-all px-4 py-2 rounded-lg">
                        <LogOut className="inline mr-2 mb-1" /> Log Out
                      </button>
                    </li>
                  </ul>
                )}
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
}
