"use client"

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Link from "next/link";
import Loading from "../../../loading";

export default function Page() {
    const [hoveredCard, setHoveredCard] = useState(null);
    const sectionRefs = useRef({});
    const [loading, setLoading] = useState(true);

    const items = [
        { index: 1, title: "FIXED DEPOSITS", description: "FOR YOUR SECURE FUTURE",link:"/investments/fixed-deposits" },
        { index: 2, title: "MUTUAL FUNDS", description: "INVEST IN THE FUTURE",link:"/investments/mutual-funds" },
        { index: 3, title: "STOCKS", description: "HIGH RISK, HIGH REWARD",link:"/investments/stocks" },
        { index: 4, title: "GOLD", description: "STABLE & SECURE INVESTMENT",link:"/investments/gold" },
    ];
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        },4000);
    },[]);
    if(loading){
        <Loading/>
    }

    const moreInfoContent = {
        1: {
            intro: "Fixed Deposits (FDs) are one of the safest investment options, offering guaranteed returns with fixed interest rates.",
            features: [
                "🏦 Secure & Stable: Provides guaranteed returns, unaffected by market fluctuations.",
                "💰 Interest Rates: Ranges from 3% to 8% per annum, depending on tenure and bank.",
                "⏳ Flexible Tenure: Choose a period from 7 days to 10 years.",
                "📌 Loan Facility: Banks allow loans against FDs at lower interest rates.",
                "🛑 Lock-in Period: Premature withdrawal may result in penalties."
            ]
        },
        2: {
            intro: "Mutual Funds pool money from multiple investors and invest in diversified assets like stocks, bonds, and other securities.",
            features: [
                "📊 Diversified Investment: Reduces risk by investing in multiple assets.",
                "📈 High Return Potential: Equity mutual funds can generate significant returns over time.",
                "💳 SIP Option: Start investing with as little as ₹500 per month.",
                "⚠️ Market-Linked: Returns depend on stock market performance.",
                "🏦 Liquidity: Can redeem investments anytime, except for ELSS funds."
            ]
        },
        3: {
            intro: "Stocks represent ownership in a company, and their value fluctuates based on market conditions and business performance.",
            features: [
                "📈 High Returns: Potential to generate massive wealth over time.",
                "⚠️ Market Volatility: Prices fluctuate daily based on various factors.",
                "💰 Dividend Earnings: Some companies pay dividends to shareholders.",
                "⏳ Long-Term Growth: Historical data shows that long-term investors benefit the most.",
                "📌 Requires Knowledge: Understanding financial statements and market trends is crucial."
            ]
        },
        4: {
            intro: "Gold is considered a safe investment and acts as a hedge against inflation and currency depreciation.",
            features: [
                "🏆 Safe Haven: Gold retains value during economic crises.",
                "💰 Various Forms: Available as physical gold, digital gold, ETFs, and sovereign gold bonds.",
                "📌 Inflation Hedge: Protects against rising inflation.",
                "⚠️ Price Fluctuations: Gold prices are affected by global demand and supply.",
                "📈 Moderate Returns: Historically stable with long-term appreciation."
            ]
        }
    };

    const handleCardClick = (index) => {
        sectionRefs.current[index]?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <div className="relative bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-700 min-h-screen">
            {/* Background Animation */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-900 to-emerald-700 opacity-30 blur-3xl z-0"></div>

            <div className="relative flex flex-col items-center h-full pt-10 px-4 z-10">
                {/* Page Title */}
                <motion.h1
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-white font-extrabold font-oswald text-7xl mb-8 tracking-wider drop-shadow-md"
                >
                    INVESTMENTS
                </motion.h1>

                {/* Investment Cards */}
                <div className="flex flex-wrap justify-center gap-6 p-8 relative">
                    {items.map((item) => (
                        <motion.div
                            key={item.index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: item.index * 0.2 }}
                            className="relative"
                        >
                            <Card
                                onMouseEnter={() => setHoveredCard(item.index)}
                                onMouseLeave={() => setHoveredCard(null)}
                                onClick={() => handleCardClick(item.index)}
                                className="w-64 p-4 h-[17vh] text-center backdrop-blur-xl bg-white/10 shadow-md rounded-xl cursor-pointer border border-gray-200 hover:shadow-2xl hover:bg-green-600 hover:scale-105 transition-all duration-300"
                            >
                                <CardHeader>
                                    <CardTitle className="text-xl font-bold text-white">{item.title}</CardTitle>
                                    <CardDescription className="text-gray-300">{item.description}</CardDescription>
                                </CardHeader>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* More Information Section */}
            <div className="relative w-full mt-12 overflow-hidden rounded-lg bg-white/10 backdrop-blur-lg shadow-lg p-6">
                <h2 className="text-5xl border-b-[1px] border-b-white text-white tracking-widest font-anton text-left pb-4">
                    MORE INFORMATION
                </h2>
                <div className="pt-6">
                    {items.map((item) => (
                        <motion.div
                            key={item.index}
                            ref={(el) => (sectionRefs.current[item.index] = el)}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: item.index * 0.2 }}
                            className="mb-12 p-6 bg-gradient-to-br from-emerald-900 to-emerald-700 rounded-xl shadow-lg"
                        >
                            <div className="text-center"><Link href={item.link} className="text-4xl font-bold text-white text-center">{item.title}</Link></div>
                            <p className="text-xl text-gray-200 mt-2">{moreInfoContent[item.index].intro}</p>

                            {/* Features List */}
                            <ul className="list-disc pl-5 mt-4 text-lg text-gray-300 space-y-2">
                                {moreInfoContent[item.index].features.map((point, index) => (
                                    <li key={index}>{point}</li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
