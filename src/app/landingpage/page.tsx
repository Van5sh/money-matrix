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
import {Button} from "@/components/ui/button";
import {useRouter} from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import AboutSection from "@/app/landingpage/aboutpage";

export default function Page() {
  const [showContent, setShowContent] = useState(false);
  const [showContent1, setShowContent1] = useState(false);
  const [showContent2, setShowConten2] = useState(false);
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);
  const [flipped,setflip]=useState(false);
  const text = "STOCK MARKET".split("");
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  const router=useRouter();
  return (
    <>

      <div className="relative h-screen scroll-smooth">
        <img src="/images/ruppe2.jpg" className="absolute inset-0 w-full h-full object-cover opacity-25" alt="" />
        <div className="absolute inset-0 text-6xl mt-16 text-green-50 flex flex-col justify-center items-center gap-10">
          <div className="block z-10 font-oswald">WANT TO GET</div>
          <div className="text-[200px] font-bold text-green-600 ml-[20px]  z-50 tracking-wider font-bangers">
            INSURED?
          </div>
            <SignInButton/>
        </div>
        <Navbar />
      </div>
      <motion.div
        onClick={() => setShowConten2(!showContent2)}
      >
        <AnimatePresence mode="popLayout">
          {!showContent2 && !flipped ? (
            <motion.div
              key="insurance-card"
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.5 }}
              className="relative bg-black flex justify-center items-center overflow-hidden min-h-[75vh] group"
            >
              <img src="/images/insurance.avif" alt="" className="absolute w-full object-cover min-h-[75vh] opacity-35 group-hover:opacity-90 group-hover:scale-125 duration-500" />
              <h1 className="absolute text-8xl text-white font-anton transition-all duration-500 group-hover:scale-150 group-hover:text-green-200 tracking-wider ">INSURANCE</h1>

            </motion.div>
          ) : (
            <motion.div
              key="About-features"
              initial={{ x: "100%" }}
              animate={{ x: "0%" }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                initial={{ backgroundColor: "#FFFFFF" }}
                whileInView={{ backgroundColor: "#1B5E20" }}
                transition={{ duration: 1.5, delay: 0.5 }}
                className="text-white grid grid-cols-5 h-[75vh]"
              >
                <div className="relative font-medium font-oswald text-6xl border-l-[1px] flex justify-center items-center border-white col-span-1">
                  <img
                    src="/images/feature.avif"
                    alt="Dollars"
                    className="h-[75vh] object-cover opacity-45"
                  />
                  <h1 className="absolute">FEATURES</h1>
                </div>

                <div className="flex flex-row gap-5 p-10 pt-12 min-h-[50vh] justify-center items-center col-span-4 bg-gradient-to-br from-emerald-800 via-emerald-700 to-emerald-700 transition-all duration-200 hover:shadow-2xl hover:shadow-green-400">
                  <motion.div>
                    <FontAwesomeIcon
                      icon={faIndianRupeeSign}
                      className="text-green-300 p-4 text-[200px]"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="grid grid-cols-2 gap-8"
                  >
                    {[
                      { title: "BMI CALCULATOR", desc: "Calculate your BMI based on weight & height" },
                      { title: "INSURANCE CALCULATOR", desc: "Estimate your insurance premiums easily" },
                      { title: "BLOGS", desc: "Increase your knowledge through informatory blogs" },
                      { title: "KNOW YOUR RIGHTS", desc: "You have no rights" },
                    ].map((feature, index) => (
                      <motion.div
                        key={index}
                        onClick={(e) =>{
                          e.stopPropagation();
                          setFlippedIndex(flippedIndex === index ? null : index)
                        }}
                        className="relative cursor-pointer"
                      >
                        <motion.div
                          initial={{ rotateY: 0 }}
                          animate={{
                            rotateY: flippedIndex === index ? 180 : 0,
                          }}
                          transition={{ duration: 0.6 }}
                          className="relative"
                          style={{ transformStyle: "preserve-3d" }}
                        >
                          {/* Front Side */}
                          <Card
                            className="bg-black border-2 rounded-lg shadow-xl duration-300 ease-in-out bg-black/50 backdrop-blur-lg hover:bg-transparent shadow-green-400 text-white border-green-400 p-10 hover:scale-105 hover:text-black  h-48 flex items-center justify-center"
                            style={{ backfaceVisibility: "hidden" }}
                          >
                            <CardContent className="text-center">
                              <motion.h1 className="text-2xl font-semibold">
                                {feature.title}
                              </motion.h1>
                            </CardContent>
                          </Card>

                          {/* Back Side */}
                          <Card
                            className="absolute inset-0 bg-transparent  backdrop-blur-lg border-2 rounded-lg shadow-xl shadow-green-400 border-green-400 p-10  h-48 flex items-center justify-center"
                            style={{
                              backfaceVisibility: "hidden",
                              transform: "rotateY(180deg)",
                            }}
                          >
                            <CardContent className="text-center font-semibold text-xl text-white">
                              <p className="">{feature.desc}</p>
                            </CardContent>
                          </Card>
                        </motion.div>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          )}
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
                    className="p-4 pt-10 pl-20 font-mono text-sm 2xl:text-3xl"
                  >
                    <ul className="">
                      {["Want to know what has happened in the Stock Market?", "Get the latest Stock Market trends","make a to-do list of the stocks", "Write the stock name you want and get a graph"].map((lit, i) => (
                        <motion.li
                          initial={{ opacity: 0, x: 100 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 2, delay: i * 2.5 }}
                          className="py-2 2xl:py-6"
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
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 2 }}
                        src="/images/stock3.jpg" alt="" className="max-h-[60vh] pt-4 2xl:pt-10" />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </motion.div>
      {/* end of stock market */}
        <AboutSection/>
      <Footer />
    </>
  );
}