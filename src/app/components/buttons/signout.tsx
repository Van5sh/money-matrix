"use client";

import { useRouter } from "next/navigation";
import { signOutUser } from "@/app/firebase/auth";

export default function SignOutButton() {
    const router = useRouter();

    const handleSignOut = async () => {
        try {
            await signOutUser();
            router.push("/");
        } catch (error) {
            console.error("Error signing out:", error);
        }
    };

    return (
        <button onClick={handleSignOut} className="text-green-400 border-2 p-6 rounded-full">
            SignOut
        </button>
    );
}
