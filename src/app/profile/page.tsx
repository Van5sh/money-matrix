"use client";

import { UserAuth } from "@/app/context/AuthContext";
import React, { useEffect, useState } from "react";
import { UserPen, LogOut } from "lucide-react";
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
    <div className="relative min-h-screen overflow-y-hidden bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center px-4 pt-4 pb-12 mt-[-40px] overflow-hidden text-white font-mono">
      <div className="absolute w-[500px] h-[500px] bg-green-700 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-ping-slow -top-20 -left-20"></div>
      <div className="absolute w-[300px] h-[300px] bg-emerald-400 rounded-full mix-blend-screen filter blur-2xl opacity-30 animate-pulse -bottom-10 -right-10"></div>

      {/* 🔥 Dashboard Card */}
      <div className="w-[150vh] max-w-6xl h-[60vh] backdrop-blur-2xl bg-white/5 border border-white/10 rounded-3xl shadow-[0_0_60px_rgba(0,255,150,0.2)] flex flex-col lg:flex-row overflow-hidden transition-all duration-300 2xl:h-[54vh] ">

        {/* Sidebar */}
        <div className="lg:w-1/3 h-[60vh] w-full bg-gradient-to-b from-green-600/80 to-green-800/80 p-8 flex flex-col items-center gap-6 shadow-inner">
          <div className="relative group">
            {user?.photoURL ? (
              <img
                src={user.photoURL}
                alt="User Avatar"
                className="w-20 h-20 2xl:w-40 2xl:h-40 rounded-full border-4 border-white shadow-xl group-hover:scale-105 transition-transform duration-300"
              />
            ) : (
              <div className="w-20 h-20 2xl:w-40 2xl:h-40 flex items-center justify-center bg-white text-gray-700 rounded-full text-xl font-bold border-4 border-white">
                No Image
              </div>
            )}
            <div className="absolute -bottom-2 right-0 w-2 h-2 2xl:w-4 2xl:h-4 bg-lime-400 rounded-full animate-ping"></div>
          </div>
          <h2 className="text-xl 2xl:text-2xl font-extrabold uppercase tracking-wider">
            {user?.displayName || "Unknown User"}
          </h2>

          <button
            onClick={() => setIsOpen(true)}
            className="flex items-center text-sm 2xl:text-base  gap-2 px-6 py-2 rounded-full bg-white text-green-700 font-bold hover:scale-105 hover:bg-green-200 transition-all duration-300 shadow-md"
          >
            <UserPen size={18} /> Edit Profile
          </button>

          <button
            onClick={logOut}
            className="flex items-center text-sm 2xl:text-base gap-2 px-6 py-2 rounded-full bg-red-600 hover:bg-red-700 text-white font-bold transition shadow-md hover:scale-105"
          >
            <LogOut size={18} /> Sign Out
          </button>
        </div>
        <div className="lg:w-2/3 w-full p-7 pt-5 2xl:p-10 bg-black/30 text-green-100">
          <h1 className="text-xl 2xl:text-4xl font-bold mb-3 2xl:mb-6 tracking-tight border-b border-white/10 pb-2">
            User Dashboard
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 2xl:gap-6 text-base leading-relaxed font-semibold">
            <div><span className="text-gray-400 text-sm 2xl:text-base">🧍 Name:</span> <br /> <span className="text-sm 2xl:text-base pl-1">{profileData.name}</span></div>
            <div><span className="text-gray-400 text-sm 2xl:text-base">📧 Email:</span> <br /><span className="text-sm 2xl:text-base pl-1">{profileData.email}</span> </div>
            <div><span className="text-gray-400 text-sm 2xl:text-base">📱 Phone:</span> <br /><span className="text-sm 2xl:text-base pl-1">{profileData.phone}</span></div>
            <div><span className="text-gray-400 text-sm 2xl:text-base">🎂 Age:</span> <br /><span className="text-sm 2xl:text-base pl-1">{profileData.age}</span></div>
            <div><span className="text-gray-400 text-sm 2xl:text-base">⚖️ Weight:</span> <br /><span className="text-sm 2xl:text-base pl-1">{profileData.weight}</span> kg</div>
            <div><span className="text-gray-400 text-sm 2xl:text-base">📏 Height:</span> <br /><span className="text-sm 2xl:text-base pl-1">{profileData.height}</span> cm</div>
            <div className=" text-sm 2xl:text-base">
              <span className="text-gray-400">🏠 Address:</span> <br /> {profileData.address}
            </div>
            <div className=" text-sm 2xl:text-base">
              <span className="text-gray-400">💸 Annual Income:</span> <br /> {profileData.income}
            </div>
          </div>
        </div>
      </div>
      {isOpen && <Editform formClose={() => setIsOpen(false)} />}
    </div>
  );
};

export default Page;
