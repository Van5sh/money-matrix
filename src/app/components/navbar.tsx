<<<<<<< HEAD
"use client"
import {Bitcoin, House, LogIn, Info} from 'lucide-react';
import Link from "next/link";

export default function nav() {
    return (
        <>
            <div className="fixed top-0 left-0 w-screen">
                <div
                    className=" flex gap-4 justify-between font-mono text-green-50 font-medium m-6 p-4 text-xl  pb-4  ">

                    <div className="">
                        <button>
                            <div><Bitcoin className='inline mr-1 mb-1'/>MoneyMatrix</div>
                        </button>
                    </div>
                    <div className="">
                        <ul className="flex gap-10">
                            <li className="relative pb-2 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-white before:transition-all before:duration-500 hover:before:w-full">
                                <Link href="#" >
                                    <House className='inline mr-2 mb-1'/>Home
                                </Link>
                            </li>
                            <li className="relative pb-2 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-white before:transition-all before:duration-500 hover:before:w-full">
                                <button><LogIn className='inline mr-2 mb-1'/>Login/Signup</button>
                            </li>
                            <li className="relative pb-2 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-white before:transition-all before:duration-500 hover:before:w-full">
                                <button><Info className='inline mr-2 mb-1'/>AboutUs</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </>
    );
=======
"use client";
import { useState, useEffect } from "react";
import { Bitcoin, House, LogIn, Info } from "lucide-react";
>>>>>>> ef5ba55d07a9002ee01eb30fcb63490e781965a3

export default function Nav() {
  const [scrolling, setScrolling] = useState(false);

  // Function to track scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    return () => {
      // Remove event listener on cleanup
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-screen transition-colors duration-300 ${
          scrolling ? "bg-green-700 bg-opacity-70 rounded-lg" : "bg-transparent"
        }`}
      >
        <div className="flex gap-4 justify-between font-mono text-green-50 font-medium m-6 p-4 text-xl pb-4">
          <div>
            <button>
              <div className="text-2xl">
                <Bitcoin className="inline mr-1 mb-1" />
                MoneyMatrix
              </div>
            </button>
          </div>
          <div>
            <ul className="flex gap-10">
              <li className="relative pb-2 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-white before:transition-all before:duration-500 hover:before:w-full">
                <button>
                  <House className="inline mr-2 mb-1" />
                  Home
                </button>
              </li>
              <li className="relative pb-2 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-white before:transition-all before:duration-500 hover:before:w-full">
                <button>
                  <LogIn className="inline mr-2 mb-1" />
                  Login/Signup
                </button>
              </li>
              <li className="relative pb-2 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-white before:transition-all before:duration-500 hover:before:w-full">
                <button>
                  <Info className="inline mr-2 mb-1" />
                  AboutUs
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
