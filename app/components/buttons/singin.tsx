"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import {UserAuth} from "@/app/context/AuthContext";
import { LogIn } from 'lucide-react';

export default function SignInButton() {
    const router = useRouter();
    const [loading,setLoading]=useState(false);
    const {googleSignIn}=UserAuth();

    const handleSignIn = async () => {
        try {
            await googleSignIn();
            router.push("/main");
        } catch (error) {
            console.error("Sign in failed:", error);
            setLoading(false);
        }
        setLoading(true);
    };

    return (
        <>
            <button
                className="border-green-600 bg-green-950 hover:bg-opacity-100 hover:scale-110  border-[1.5px]  text-green-50 p-4 text-2xl m-2 rounded-full w-60  ease-in-out duration-500 bg-opacity-20 hover:text-white "
                onClick={handleSignIn}
                disabled={loading}
            >
                <div><LogIn className="inline mr-2 mb-1"/> Sign In</div>
                
            </button>
            {loading && <p>Loading...</p> }
        </>
    );
}
