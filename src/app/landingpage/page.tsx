"use client"
import Navbar from "@/app/components/navbar";
import Image from "next/image";
import { useState } from "react";
// import {SignOut} from "@/app/firebase/auth";
// import SignOutButton from "@/app/components/buttons/signout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Footer from "@/app/components/footer";
import SignInButton from "@/app/components/buttons/singin";
import * as React from 'react';
import { ChartCandlestick } from 'lucide-react';

export default function Page() {
  const [showContent, setShowContent] = useState(false);
  const [showContent1, setShowContent1] = useState(false);
  const[showContent2,setShowConten2]=useState(false);
  const text = "STOCK MARKET".split("");
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <>

      <div className="relative h-screen scroll-smooth">
        <img src="/images/dollars.jpg" className="absolute inset-0 w-full h-full object-cover opacity-45" alt="" />
        <div className="absolute inset-0 text-6xl mt-16 text-green-50 flex flex-col justify-center items-center gap-10">
          <div className="block z-10 font-oswald">WANT TO GET</div>
          <div className="text-[200px] font-bold text-green-600 ml-14  z-50 tracking-wider font-bangers">
            INSURED?
          </div>
          <SignInButton />
        </div>
        <Navbar />

      </div>





      {/* Insurance */}
      
        <motion.div
        onClick={()=>setShowConten2(!showContent2)}
        >
          <AnimatePresence mode="popLayout">
          {!showContent2 ? ( 
            <motion.div
            key="insurance-card"
            initial={{x:"-100%"}}
            animate={{x:"0%"}}
            exit={{x:"-100%"}}
            transition={{duration:0.5}}
            className="relative bg-black flex justify-center items-center overflow-hidden min-h-[75vh] group"
            >
              <img src="/images/insu9.jpg" alt="" className="absolute w-full object-cover min-h-[75vh] opacity-35 group-hover:opacity-90 group-hover:scale-125 duration-500" />
              <h1 className="absolute text-8xl text-white font-anton transition-all duration-500 group-hover:scale-150 group-hover:text-green-200 tracking-wider ">INSURANCE</h1>

            </motion.div>
          ):(
          <motion.div
          key="About-features"
          initial={{x:"100%"}}
          animate={{x:"0%"}}
          exit={{x:"100%"}}
          transition={{duration:0.5}}
          >
          
          <motion.div

            initial={{ backgroundColor: "#FFFFFF" }}
            whileInView={{ backgroundColor: "#1B5E20" }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className=" text-white grid grid-cols-5 min-h-[75vh]"
          >
            <div
              className=" relative font-medium font-oswald text-6xl border-l-[1px] flex justify-center items-center  border-white  col-span-2 ">
              <img src="/images/feature.avif" alt="Dollars" className="w-full max-h-[75vh]  object-cover opacity-45 " />
              <h1 className="absolute">
                FEATURES
              </h1>
            </div>

            <div className="flex flex-row gap-10 p-10 pt-12 min-h-[50vh] justify-center items-center col-span-3 bg-black  transition-all duration-200 hover:shadow-2xl hover:shadow-green-400 ">
              <motion.div
                animate={{x:[-8,-8,-150,190,0]}}
                transition={{ duration: 2.5 }}
              >
                <FontAwesomeIcon icon={faIndianRupeeSign} className="text-green-300 text-[200px]" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0}}
                whileInView={{ opacity: 1}}
                animate={{x:[150,-100,120,0]}}
                transition={{ duration: 3, staggerChildren: 1}}
                className="space-y-6 z-40  border-2 rounded-[30%] shadow-xl shadow-green-400 border-green-400 p-20"
              >
                {["BMI CALCULATOR", "INSURANCE CALCULATOR", "ACCOUNTING", "KNOW YOUR RIGHTS"].map(
                  (text, index) => (
                    <motion.h1
                      key={index}
                      initial={{ x: 100, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 1 + index * 0.5 }}
                      className="text-3xl font-mono font-medium relative pb-2 text-white"
                    >
                      <button
                        className="transition-all duration-150 ease-in-out hover:scale-125 hover:text-green-500">
                        {text}
                      </button>

                    </motion.h1>
                  )
                )}
              </motion.div>
            </div>
          </motion.div>
          </motion.div>)}
          </AnimatePresence>
        </motion.div>
      
      {/* end of Insurance */}

      {/* stock market */}
      <motion.div
        
        className=" duration-500 bg-black text-white overflow-hidden "
        onClick={() => setShowContent1(!showContent1)}
      >
        <AnimatePresence mode="popLayout">
          {!showContent1 ? (
            <motion.div
              key="about-image"
              initial={{ x: "-100%" }} // Start from outside the screen
              animate={{ x: "0" }} // Slide into view
              exit={{ x: "-100%" }} // Slide out when hidden
              transition={{ duration: 0.5 }}
              className="relative flex items-center bg-black justify-center overflow-hidden group transition-opacity duration-500"
            >


              <img src="/images/st.gif" alt="Dollars" className="w-full opacity-35 object-cover max-h-[75vh] duration-500 group-hover:scale-125 group-hover:opacity-[100%] " />
              <h1 className="absolute text-8xl font-anton transition-all duration-500 group-hover:scale-150 group-hover:text-green-200 tracking-wider ">STOCK MARKET</h1>


            </motion.div>
          ) : (
            <motion.div
              key="about-content"
              initial={{ x: "100%" }} // Start from outside the screen
              animate={{ x: 0 }} // Slide into view
              exit={{ x: "100%" }} // Slide out when hidden
              transition={{ duration: 0.5 }}
              className="relative min-h-[75vh]  bg-black text-white overflow-hidden group"
            >
              <img src="/Videos/first.gif" alt="Dollars" className="absolute inset-0 w-full opacity-45 object-cover max-h-[75vh] duration-500 " />

              <div ref={ref} className="absolute inset-0" >
                <div className="font-bebas text-7xl p-8 py-4  tracking-wider backdrop-blur-lg ">
                  <ChartCandlestick className="inline-block size-24 pr-8" />
                  {text.map((el, i) => (
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 2, delay: (i * 0.2) }}
                      className="text-green-100"
                    >
                      {el}
                    </motion.span>
                  ))}
                </div>

                <div className="flex justify-evenly">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2 }}
                    className="p-4 pt-16 pl-20 font-mono text-3xl"
                  >
                    <ul className="pt-5">
                      {["We like it", "You will too", "Come to me baby", "ahhhhhhhhhhhhhh"].map((lit, i) => (
                        <motion.li
                          initial={{ opacity: 0, x: 100 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 2, delay: i * 2.5 }}
                          className="py-6"
                        >
                          {lit}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                  <div className="invisible text-9xl">
                    hello
                  </div>
                  <div className="invisible text-9xl">
                    hello
                  </div>
                  <AnimatePresence>
                    <motion.div

                      className="overflow-hidden">

                      <motion.img
                        // animate={{
                        //   scale: [.5, .75, .5, 1],
                        //   rotate: [30, 130, 460, 0],
                        //   borderRadius: ["20%", "90%", "30%", "10%"]
                        // }}
                        initial={{scale:0,opacity:0}}
                        animate={{scale:1,opacity:1}}
                        transition={{ duration:2 }}
                        src="/images/stock3.jpg" alt="" className="max-h-[60vh]" />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </motion.div>
      {/* end of stock market */}


      {/* //this is us */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className=" duration-500 bg-black  text-white overflow-hidden "
        onClick={() => setShowContent(!showContent)}
      >
        <AnimatePresence mode="popLayout">
          {!showContent ? (
            <motion.div
              key="about-image"
              initial={{ x: "-100%" }} // Start from outside the screen
              animate={{ x: "0" }} // Slide into view
              exit={{ x: "-100%" }} // Slide out when hidden
              transition={{ duration: 0.5 }}
              className="relative flex items-center justify-center overflow-hidden group transition-opacity duration-500"
            >


              <img src="/images/ab.avif" alt="Dollars" className="w-full opacity-35  max-h-[75vh] duration-500 group-hover:scale-125 group-hover:opacity-[98%] " />
              <h1 className="absolute text-8xl font-anton transition-all duration-500 group-hover:scale-150 group-hover:text-green-200  tracking-wider">WE ARE MONEYMATRIX</h1>


            </motion.div>
          ) : (
            <motion.div
              key="about-content"
              initial={{ x: "100%" }} // Start from outside the screen
              animate={{ x: 0 }} // Slide into view
              exit={{ x: "100%" }} // Slide out when hidden
              transition={{ duration: 0.5 }}
              className="relative min-h-[75vh] p-6 bg-black  text-white overflow-hidden"
            >
              <img src="/images/ourpicbg.avif" className="absolute inset-0 w-full h-full object-cover opacity-25 backdrop-blur-lg" alt="" />

              <div className="absolute inset-0 flex flex-col items-center pt-4">
                <div className="absolute inset-0 flex flex-col items-center pt-4">

                  <h2 className="text-5xl font-extrabold mb-2 font-mono py-4 ">ABOUT US</h2>

                </div>

                <div className="  min-h-[600px] relative flex flex-row gap-14 pt-24 pb-4">
                  <div className="relative max-h-[95%] group duration-700">
                    <div className="min-w-[60vh] h-full rounded-full relative overflow-hidden">
                      <img
                        src="images/vanshdhir.jpg"
                        className="absolute inset-0 opacity-90 border-4 border-green-500 transition-all  duration-700 group-hover:opacity-85 object-cover min-w-[60vh] h-full rounded-full"
                        alt="Vansh Dhir"
                      />
                      <div className="absolute bottom-0 left-0 right-0 p-4  backdrop-blur-sm text-4xl group-hover:hidden text-center  bg-green-900 bg-opacity-70">
                        <div className="font-bebas text-white font-bold tracking-wider">VANSH DHIR</div>
                      </div>
                    </div>

                    <div className="rounded-full hidden duration-700 ease-in-out absolute inset-0 group-hover:flex justify-center items-center group-hover:backdrop-blur-sm text-4xl">
                      <button className="ease-in-out duration-300 hover:scale-125 hover:text-green-300">LINK</button>
                    </div>
                  </div>
                  <div className="relative max-h-[95%] group">
                    <div className="min-w-[60vh] h-full rounded-full relative overflow-hidden">
                      <img
                        src="images/vanshdhir.jpg"
                        className="absolute inset-0 border-4 border-green-500  opacity-90 duration-700 group-hover:opacity-85 object-cover min-w-[60vh] h-full rounded-full"
                        alt="Vansh Dhir"
                      />
                      <div className="absolute bottom-0 left-0 right-0 p-4 backdrop-blur-sm text-4xl group-hover:hidden text-center text-green-950 bg-green-900 bg-opacity-70">
                        <div className="font-bebas text-white font-bold tracking-wider">VANSH DHIR</div>
                      </div>
                    </div>

                    <div className="rounded-full hidden duration-700 ease-in-out absolute inset-0 group-hover:flex justify-center items-center backdrop-blur-sm text-4xl">
                      <button className="ease-in-out duration-300 hover:scale-125 hover:text-green-300">LINK</button>
                    </div>
                  </div>

                  <div className="relative max-h-[95%] group">
                    <div className="min-w-[60vh] h-full rounded-full relative overflow-hidden">
                      <img
                        src="images/vanshdhir.jpg"
                        className="absolute border-4 border-green-500  inset-0 opacity-90 duration-700 group-hover:opacity-85 object-cover min-w-[60vh] h-full rounded-full"
                        alt="Vansh Dhir"
                      />
                      <div className="absolute bottom-0 left-0 right-0 p-4 backdrop-blur-sm text-4xl group-hover:hidden text-center text-green-950 bg-green-900 bg-opacity-70">
                        <div className="font-bebas text-white font-bold  tracking-wider">VANSH DHIR</div>
                      </div>
                    </div>

                    <div className="rounded-full hidden duration-700 ease-in-out absolute inset-0 group-hover:flex justify-center items-center backdrop-blur-sm text-4xl">
                      <button className="ease-in-out duration-300 hover:scale-125 hover:text-green-300">LINK</button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </motion.div>
      <Footer />
    </>
  );
}