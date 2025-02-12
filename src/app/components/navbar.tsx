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

}