"use client"
import Navbar from "@/app/components/navbar";
// import Image from "next/image";
// import SignInButton from "@/app/components/buttons/singin";
// import {SignOut} from "@/app/firebase/auth";
// import SignOutButton from "@/app/components/buttons/signout";

import Footer from "@/app/components/footer";
export default function Page() {
    return (
        <>

            <div>
                <Navbar/>
                <div className="relative h-screen">

                    <img src="/images/dollars.jpg" alt="Dollars" className="w-full  h-full object-cover opacity-25 "/>

                <div className="absolute inset-0 text-6xl font-sans text-green-50  flex flex-col justify-center items-center gap-10 ">
                <div className="block z-10">HOW TO GET</div>
                <div className="text-[175px] font-semibold text-green-600 ml-7 z-50">INSURED</div>
                </div>

<Navbar />
</div>
</div>
<div className="p-10">
<div className="text-5xl text-green-50 ">
     BMI
</div>

</div>
<Footer/>
                    {/* <div>
                        className="absolute inset-0 text-5xl font-sans text-green-50  flex flex-col justify-center items-center gap-10 ">
                        <div className="block">HOW TO GET</div>
                        <div className="text-9xl font-semibold text-green-500 ml-7">INSURED</div>
                        <SignInButton/>
                        <SignOutButton/>
                    </div>

                </div>
            
            <div className="p-10">
                <div className="text-5xl text-green-50 ">
                    BMI
                </div>
            </div> */}


            {/* <div>
  
  <div className="relative h-screen">
    
    
    <img 
      src="/images/dollars.jpg" 
      alt="Dollars" 
      className="w-full h-full object-cover opacity-25"
    />
    <Navbar />

    <div className="absolute inset-0 flex justify-center items-center text-8xl font-sans text-white">
      HOW TO GET
    </div>

  </div>

  
  <div className="p-10">
    <div className="text-5xl">
      zvgasdgdfasdgds
    </div>
  </div>
</div> */}


        </>
    );
}