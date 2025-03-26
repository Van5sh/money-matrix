"use client";

import { useRouter } from "next/navigation";
import { useState,useEffect } from "react";
import {UserAuth} from "@/app/context/AuthContext";
import { LogIn } from 'lucide-react';
import {motion} from "framer-motion";


export default function SignInButton() {
    const router = useRouter();
    const [loading,setLoading]=useState(false);

    const {user,googleSignIn}=UserAuth();


    const handleSignIn = async (e: React.MouseEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            await googleSignIn();
            //
            // if (user) {
            //     await fetch("/api/users", {
            //         method: 'POST',
            //         headers: { "Content-Type": "application/json" },
            //         body: JSON.stringify({
            //             name: user.displayName,
            //             email: user.email,
            //         }),
            //     });
            //     // await axios.post("/api/users", {
            //     //     email: user.email,
            //     //     name: user.displayName,
            //     // });
            // }
            router.push("/main");
        } catch (error) {
            console.error("Sign in failed:", error);
        }
        setLoading(false);
    };
    useEffect(() => {
        const saveUser=async()=> {
            if (user) {
                await fetch("/api/users", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        name: user.displayName,
                        email: user.email,
                    }),
                });
            }
        }
        saveUser();

    }, [user]);


    return (
        <>
            <motion.button
                className="border-green-600 bg-green-950 hover:bg-opacity-100 border-[1.5px] text-green-50 p-4 text-xl m-2 rounded-full w-80  ease-in-out duration-75 bg-opacity-20 hover:text-green-400"
                onClick={handleSignIn}
                disabled={loading}
                whileTap={{scale:0.85}}
                whileHover={{scale:1.2}}
            >
                <div><LogIn className="inline mr-2 mb-1"/> Sign In With Google</div>
            </motion.button>
            {loading && <p>Loading...</p> }
        </>
    );
}
