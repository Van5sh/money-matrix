"use client";

import { UserAuth } from "@/app/context/AuthContext";
import React, { useEffect, useState } from "react";
import { UserPen } from "lucide-react";
import Editform from "@/app/profile/components/editform";

const Page = () => {
    const { user, logOut } = UserAuth();
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [profileData, setProfileData] = useState({
        name: "",
        email: "",
        phone: "",
        age: 0,
        weight: 0,
        height: 0,
        address: "",
        income: "",
    });

    useEffect(() => {
        setProfileData({
            name: sessionStorage.getItem("name") || user?.displayName || "",
            email: sessionStorage.getItem("email") || user?.email || "",
            phone: sessionStorage.getItem("phone") || "",
            age: Number(sessionStorage.getItem("age")) || 0,
            weight: Number(sessionStorage.getItem("weight")) || 0,
            height: Number(sessionStorage.getItem("height")) || 0,
            address: sessionStorage.getItem("address") || "",
            income: sessionStorage.getItem("income") || "",
        });
    }, [isOpen, user]);

    return (
        <div className="flex flex-col items-center justify-center gap-4 p-4 bg-gray-50">
            <div className="flex flex-row bg-gray-50 min-h-screen border-green-900 border-4 rounded-xl">
                <div className="flex flex-col gap-4 p-6 space-y-6 bg-green-800 items-center rounded-l-lg">
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
                    <button onClick={() => setIsOpen(true)} className="flex flex-row items-center font-bold gap-2 text-white p-3 rounded-lg bg-green-500">
                        <UserPen /> Edit Profile
                    </button>
                    <button onClick={logOut} className="text-white px-10 font-bold p-2 rounded-lg bg-red-700">Sign Out</button>
                </div>
                <div className="flex flex-col gap-4 p-6 text-green-700 rounded-r-lg">
                    <h1>NAME: {profileData.name}</h1>
                    <h1>E-MAIL: {profileData.email}</h1>
                    <h1>PHONE NO.: {profileData.phone}</h1>
                    <h1>AGE: {profileData.age}</h1>
                    <h1>WEIGHT: {profileData.weight}</h1>
                    <h1>HEIGHT: {profileData.height}</h1>
                    <h1>ADDRESS: {profileData.address}</h1>
                    <h1>INCOME(annual): {profileData.income}</h1>
                </div>
            </div>
            {isOpen && <Editform formClose={() => setIsOpen(false)} />}
        </div>
    );
};

export default Page;
