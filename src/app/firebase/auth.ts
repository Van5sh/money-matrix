"use client";
import { auth } from "../firebase/config";
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";

export async function signInUser() {
    try {
        const provider = new GoogleAuthProvider();
        const result = await signInWithPopup(auth, provider);
        return result; // You can return the result if needed
    } catch (error) {
        console.error("Error during sign in:", error);
        throw error;
    }
}

export async function signOutUser() {
    try {
        await signOut(auth);
        console.log("Sign out successful");
    } catch (error) {
        console.error("Error during sign out:", error);
    }
}
