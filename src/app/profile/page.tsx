"use client";

import { UserAuth } from "@/app/context/AuthContext";
import { useEffect } from "react";
import Image from "next/image";

const Page = () => {
    const { user } = UserAuth();

    useEffect(() => {
        console.log(user?.metadata);
    }, [user]); // Added `user` as a dependency

    return (
        <div className="flex flex-col items-center justify-center gap-4 p-4 bg-gray-50">
            <div className="flex flex-row w-[75vw] h-[80vh] bg-gray-50 border-green-500 border-4 rounded-xl items-center justify-center p-4">
                <div className="flex flex-col gap-4 bg-green-800 left-0">
                    {user?.photoURL ? (
                        <img
                            src={user.photoURL}
                            alt="User Profile"
                            width={150}
                            height={150}
                            className="rounded-full bg-white border-4 border-green-900"
                        />
                    ) : (
                        <p className="text-gray-500">No Profile Image</p>
                    )}
                    <p>{user?.displayName}</p>
                    <button>Edit Profile</button>
                    <button>Sign Out</button>
                </div>
                <div>
                    <h1>NAME: {user?.displayName}</h1>
                    <h1>E-MAIL: {user?.email}</h1>
                    <h1>PHONE NO.:</h1>
                    <h1>AGE:</h1>
                </div>
            </div>
        </div>
    );
};

export default Page;
