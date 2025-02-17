"use client";
import { useState, useEffect } from "react";
import { Bitcoin, House, LogIn, Info } from "lucide-react";
import Link from "next/link";
import { UserAuth } from "@/app/context/AuthContext";

// export default function Nav() {
    // const { user,logOut } = UserAuth();
    // console.log("User:", user);
    // const [scrolling, setScrolling] = useState(false);

  // Function to track scroll position
//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         setScrolling(true);
//       } else {
//         setScrolling(false);
//       }
//     };

//     // Add scroll event listener
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//         // Remove event listener on cleanup
//         window.removeEventListener("scroll", handleScroll);
//       };
//     }, []);

    

//   return (
//     <>
//       <div
       
//       >
//         <div className="flex gap-4 justify-between font-mono text-green-50 font-medium m-6 p-4 text-xl pb-4 ">
//           <div>
//             <button>
//               <div className="text-2xl">
//                 <Bitcoin className="inline mr-1 mb-1 opacity-100" />
//                 MoneyMatrix
//               </div>
//             </button>
//           </div>
//           <div>
//             <ul className="flex gap-10">
//               <li className="relative pb-2 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-white before:transition-all before:duration-500 hover:before:w-full">
//                 <button>
//                   <House className="inline mr-2 mb-1" />
//                   Home
//                 </button>
//               </li>
//               <li className="relative pb-2 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-white before:transition-all before:duration-500 hover:before:w-full">
//                 <button>
//                   <LogIn className="inline mr-2 mb-1" />
//                   Login/Signup
//                 </button>
//               </li>
//               <li className="relative pb-2 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-white before:transition-all before:duration-500 hover:before:w-full">
//                 <button>
//                   <Info className="inline mr-2 mb-1" />
//                   AboutUs
//                 </button>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </>
//   );



 // Fixed import

export default function Navbar() {
    const { user,logOut } = UserAuth();
    console.log("User:", user);
    const [scrolling, setScrolling] = useState(false);

  // Function to track scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);
    return () => {
        // Remove event listener on cleanup
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
    return (
        <div  className={`fixed top-0 left-0 w-screen transition-colors duration-300 ${
            scrolling ? "bg-green-800 shadow-lg bg-opacity-65 rounded-lg" : "bg-transparent"
          }`}>
            <div className="flex gap-4 justify-between font-mono text-green-50 font-medium m-4 p-4 text-xl pb-4 py-6 ">
            <div>
             <button>
              <div className="text-2xl">
                 <Bitcoin className="inline mr-1 mb-1 opacity-100" />
                 MoneyMatrix
               </div>
             </button>
           </div>
                <ul className="flex flex-row gap-10 justify-end items-center">
                <li className="relative pb-2 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-white before:transition-all before:duration-500 hover:before:w-full">
                    <Link href="#">
                        <House className="inline mr-2 mb-1" /> Home
                    </Link>
                </li>
                <li className="relative pb-2 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-white before:transition-all before:duration-500 hover:before:w-full">
                    <Link href="#">
                        <Info className="inline mr-2 mb-1" /> About Us
                    </Link>
                </li>
                {!user ? (
                    <>

                    </>
                ) : (
                    <ul className="flex flex-row gap-10 justify-end items-center">
                        <li className="relative pb-2 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-white before:transition-all before:duration-500 hover:before:w-full">
                            Insurance Plans
                        </li>
                        <li className="relative pb-2 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-white before:transition-all before:duration-500 hover:before:w-full">
                            <Link href="/resources">
                                Resources
                            </Link>
                        </li>
                        <li className="relative pb-2 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-white before:transition-all before:duration-500 hover:before:w-full">
                            <Link href="#">
                                <Info className="inline mr-2 mb-1" /> Contact Us
                            </Link>
                        </li>
                        <li className="relative pb-2 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-white before:transition-all before:duration-500 hover:before:w-full" >
                            Calculator
                        </li>
                        <button className="relative pb-2 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-white before:transition-all before:duration-500 hover:before:w-full" onClick={logOut}>
                            Log Out
                        </button>
                    </ul>
                )}
                </ul>
                </div>

            </div>
    );
}
