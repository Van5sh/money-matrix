"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { signInUser } from "@/app/firebase/auth";

export default function SignInButton() {
    const router = useRouter();
    const [loading,setLoading]=useState(false);

    const handleSignIn = async () => {
        try {
            await signInUser();

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
                className="border-green-400 border-4 text-green-400 p-4 text-2xl m-2 rounded-full w-60"
                onClick={handleSignIn}
                disabled={loading}
            >
                Sign In
            </button>
            {loading && <p>Loading...</p> }
        </>
    );
}
