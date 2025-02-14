"use client";

import SignInButton from "@/app/components/buttons/singin"; // adjust the import path as needed

export default function Page() {
    return (
        <div className="relative flex items-center justify-center h-screen">
            {/*<img src="/bg.svg" alt="Dollars" className="w-full  h-full object-cover "/>*/}
            <div className="absolute p-6 w-full max-w-lg border-black border-8 bg-transparent rounded-lg shadow-lg">
            <h1 className="text-3xl text-black font-bold text-center mb-6">Welcome</h1>
                <div className="flex justify-center">
                    <SignInButton />
                </div>
            </div>
        </div>
    );
}
