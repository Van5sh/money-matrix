"use client";

import { UserAuth } from "@/app/context/AuthContext";
import Image from "next/image";
import main from "../../../public/main.svg";
import hi from "./image.png";
import {useRouter} from "next/navigation";

export default function Page() {
  const { user } = UserAuth();
  const router=useRouter();

  return (
    <div className="relative h-screen flex justify-center items-center text-white font-sans">
      {/* Background Section */}
      <div className="absolute inset-0 z-0">
        <Image
          src={main}
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="brightness-50 blur-xl"
        />
      </div>


      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/90 z-0"></div>

      <div className="relative z-10 w-11/12 max-w-5xl p-10 rounded-3xl shadow-2xl bg-white/20 backdrop-blur-xl border border-white/30 flex flex-col md:flex-row gap-8">
        
        <div className="flex-1">
          <h1 className="text-5xl font-bold mb-5 text-green-400 tracking-wide">
            Welcome to Maven Financials
          </h1>
          <p className="text-lg leading-relaxed text-gray-200">
            Investing is the key to financial freedom. By strategically allocating resources,
            you can build wealth, secure your future, and make informed financial decisions.
          </p>
          <p className="mt-5 text-lg text-gray-300">
            <strong className="text-green-300">Why is it Important?</strong>
            <br />
            Understanding investments helps grow your finances and prepares you for long-term stability.
          </p>
          <p className="mt-5 text-lg text-gray-300">
            <strong className="text-green-300">How Do We Help?</strong>
            <br />
            We provide expert insights, tools, and strategies to make smart investment choices effortlessly.
          </p>
        </div>

        <div className="flex-1 bg-white/30 p-8 rounded-xl shadow-lg backdrop-blur-lg border border-white/40 text-center">
    
          <div className="flex items-center gap-8 mb-6 justify-center">
            <Image src={hi} alt="Image" width={70} />
            <h2 className="text-2xl font-semibold text-white">{user?.displayName}</h2>
          </div>

          {user ? (
            <p className="text-lg text-green-300" >WELCOME TO INSURE YOUR FUTURE</p>
          ) : (
            <p className="text-lg text-gray-200">Please log in to access personalized insights.</p>
          )}
          <button onClick={()=>{router.push("/investments")}} className="mt-5 px-6 py-3 bg-green-400 text-black font-semibold rounded-full shadow-md hover:bg-green-500 transition-all">
            {user ? "Explore Insights" : "Login Now"}
          </button>
          <p className="mt-6 text-lg text-white font-medium leading-relaxed">
            📈 Your future starts today — dive into a world of smart investments, clear strategies, <br />
            and the confidence to take control of your financial journey. <br />
            Let every insight bring you one step closer to financial freedom.
          </p>
        </div>
      </div>
    </div>
  );
}
