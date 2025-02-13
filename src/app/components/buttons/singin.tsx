"use client";

import { useRouter } from "next/navigation";
import { signInUser } from "@/app/firebase/auth";

export default function SignInButton() {
    const router = useRouter();

    const handleSignIn = async () => {
        try {
            await signInUser();
            // Redirect to the main page after successful sign in.
            router.push("/main"); // Adjust this path if your main page route is different.
        } catch (error) {
            console.error("Sign in failed:", error);
        }
    };

    return (
        <button
            className="border-green-900 border-2 p-4 text-2xl rounded-full w-[15vw]"
            onClick={handleSignIn}
        >
            Sign In
        </button>
    );
}
