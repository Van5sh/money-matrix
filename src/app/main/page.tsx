"use client";

import { UserAuth } from "@/app/context/AuthContext";
import Image from "next/image";

export default function Page() {
  const { user } = UserAuth();

  return (
    <div
      className="h-screen flex flex-col justify-center items-center bg-cover bg-center text-white backdrop-blur-md px-4"
      style={{ backgroundImage: "url('/image.png')" }}
    >
      {/* Logo */}
      <div className="mb-6">
        <Image src="../../../public/circular_logo.png" alt="Money Matrix Logo" width={150} height={150} />
      </div>

      <div className="bg-black bg-opacity-80 p-8 rounded-2xl w-4/5 max-w-3xl flex flex-col md:flex-row shadow-lg">
        <div className="flex-2 pr-6">
          <h1 className="text-4xl font-bold mb-4">Welcome to Investment Insights</h1>
          <p className="text-lg leading-relaxed">
            Investment is the act of allocating money or resources into assets or
            ventures with the goal of generating profit or income over time.
          </p>
          <p className="mt-6 text-lg">
            <strong>Why is it Important?</strong>
            <br />
            Understanding investment is crucial for financial growth, securing your
            future, and making informed financial decisions.
          </p>
          <p className="mt-6 text-lg">
            <strong>How Do We Help?</strong>
            <br />
            We provide knowledge, tools, and resources to guide you in making wise
            investment choices, ensuring financial stability and growth.
          </p>
        </div>
        <div className="flex-1 bg-white bg-opacity-40 p-6 rounded-lg backdrop-blur-md text-black">
          <p className="text-lg font-semibold">User Information</p>
          {user ? (
            <p className="mt-3">Welcome, {user.displayName}</p>
          ) : (
            <p className="mt-3">Please log in to access personalized insights.</p>
          )}
        </div>
      </div>
    </div>
  );
}
