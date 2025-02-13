"use client";

import SignInButton from "@/app/components/buttons/singin"; // adjust the import path as needed

export default function Page() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold text-center mb-6">Welcome</h1>
                <div className="flex justify-center">
                    <SignInButton />
                </div>
            </div>
        </div>
    );
}
