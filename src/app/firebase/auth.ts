"use client"
import {auth} from "../firebase/config"
import { signInWithRedirect, GoogleAuthProvider,signOut } from "firebase/auth";

export async function SignIn(){
    try{
        const provider=new GoogleAuthProvider();
        const result=await signInWithRedirect(auth,provider);
    }catch (err){
        console.log(err)
    }
}

export async function SignOut(){
    try {
        await signOut(auth);
        console.log("Sign out successful")
    } catch (error) {
        console.error(error);
    }
}
