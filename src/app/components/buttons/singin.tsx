"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import {UserAuth} from "@/app/context/AuthContext";
import { LogIn } from 'lucide-react';
import axios from "axios";
import {motion} from "framer-motion";


export default function SignInButton() {
    const router = useRouter();
    const [loading,setLoading]=useState(false);

    const {user,googleSignIn}=UserAuth();

    const handleSignIn = async () => {
        try {
            await googleSignIn();
            console.log("Hello");
            // await axios.post("/api/user", {
            //     name:user?.displayName,
            //     email:user?.email,
            // });
            router.push("/main");
            console.log("nigga");
            router.push("/main");
        } catch (error) {
            console.error("Sign in failed:", error);
            setLoading(false);
        }
        setLoading(true);
    };

    return (
        <>
            <motion.button
                className="border-green-600 bg-green-950 hover:bg-opacity-100 border-[1.5px]  text-green-50 p-4 text-2xl m-2 rounded-full w-60  ease-in-out duration-75 bg-opacity-20 hover:text-green-400"
                onClick={handleSignIn}
                disabled={loading}
                whileTap={{scale:0.85}}
                whileHover={{scale:1.2}}
            >
                <div><LogIn className="inline mr-2 mb-1"/> Sign In</div>
            </motion.button>
            {loading && <p>Loading...</p> }
        </>
    );
}
