"use client";

import SignInButton from "@/app/components/buttons/singin";
import LoginBox from "@/app/login/components/login";
import SignupBox from "@/app/login/components/signup";
import {useState} from "react";

export default function Page() {
    const [userExist,setUserExist]=useState(true);
    return (
        <div className="relative flex flex-col items-center justify-center h-screen">
            <img
                src="/bg1.svg"
                alt="Dollars"
                className="absolute inset-0 w-full h-full object-cover"
            />
            {userExist ? (<LoginBox setUserExist={setUserExist}/>) : (<SignupBox/>)}
        </div>
    );
}
