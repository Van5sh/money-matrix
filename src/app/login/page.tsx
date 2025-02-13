"use client";

import SignInButton from "@/app/components/buttons/singin"; // adjust the import path as needed

export default function Page() {
    return (
        <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-green-950 to-green-800 bg-gray-100">
            <img
                src="/images/dollars.jpg"
                alt="Dollars"
                className="absolute inset-0 w-full h-full object-cover opacity-25"
            />
            <div className="relative w-[40vw] h-[30vh] border-green-900 border-8 z-10  max-w-md p-8 bg-white rounded-lg shadow-lg">
                <h1 className="rounded-full text-3xl text-green-900 font-bold text-center mb-6">Welcome</h1>
                <div className="flex justify-center">
                    <SignInButton />
                </div>
            </div>
        </div>
    );
}
