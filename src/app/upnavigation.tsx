import Link from "next/link";
import {Grip, MessageSquareMore, NotebookPen} from "lucide-react";
import React, {useState} from "react";
import {UserAuth} from "@/app/context/AuthContext";
const UpNavigation=()=> {
    const [isOpen, setIsOpen] = useState(false);
    const {user}=UserAuth();
    return(
        user && (<div className="fixed bottom-5 right-5 flex flex-col items-end space-y-2">
            <ul className={`flex flex-col space-y-2 transition-all duration-300 ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
                <li>
                    <Link href="/chat" onClick={() => setIsOpen(false)}>
                    <div
                        className="flex relative group items-center space-x-3 bg-green-800 p-2 w-16 h-16 justify-center rounded-full transition-all duration-400 cursor-pointer">
                        <MessageSquareMore color="white" size={32}/>
                        <span
                            className="absolute right-full mr-2 bottom-1/2 translate-y-1/2 opacity-0 group-hover:opacity-100 bg-gray-800 text-white text-sm px-3 py-1 rounded-md shadow-md transition-opacity duration-300">
                                    CHAT WITH COMMUNITY
                                </span>
                    </div>
                </Link>
            </li>
            <li>
                <Link href="/resources/createblog" onClick={() => setIsOpen(false)}>
                    <div
                        className="flex relative group items-center space-x-3 bg-green-800 p-2 w-16 h-16 justify-center rounded-full transition-all duration-400 cursor-pointer">
                        <NotebookPen color="white" size={32}/>
                        <span
                            className="absolute right-full mr-2 bottom-1/2 translate-y-1/2 opacity-0 group-hover:opacity-100 bg-gray-800 text-white text-sm px-3 py-1 rounded-md shadow-md transition-opacity duration-300">
                                    Create Blog
                                </span>
                    </div>
                </Link>
            </li>
        </ul>
        <button
            onClick={() => setIsOpen(!isOpen)}
            className="bg-green-800 p-2 w-16 h-16 flex items-center justify-center rounded-full transition-all duration-400"
        >
            <Grip color="white" size={32}/>
        </button>
    </div>)
    )
}

export default UpNavigation;