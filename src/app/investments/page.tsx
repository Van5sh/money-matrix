// "use client";
// import React, { useState } from "react";
// import Cards from "@/app/investments/components/cards";

// export default function Page() {
//     const [selectedCard, setSelectedCard] = useState(null);

//     const items = [
//         { index: 1, title: "FIXED DEPOSITS", description: "FOR YOUR SECURE FUTURE" },
//         { index: 2, title: "MUTUAL FUNDS", description: "INVEST IN THE FUTURE" },
//         { index: 3, title: "STOCKS", description: "INVEST IN THE FUTURE" },
//         { index: 4, title: "GOLD", description: "SAVE FOR THE FUTURE" },
//     ];

//     const investmentDetails = {
//         1: `Fixed Deposit (FD) – A Secure Investment Option. 
//         A Fixed Deposit (FD) is a financial instrument offered by banks where an investor deposits a lump sum amount for a fixed period at a predetermined interest rate.
//         - Guaranteed Returns: Unlike stocks or mutual funds, FDs provide fixed interest rates, ensuring stable returns.
//         - Interest Rates: Banks offer varying interest rates based on tenure, typically ranging from 3% to 8% per annum.
//         - Flexible Tenure: Ranges from 7 days to 10 years, allowing investors to align with their financial goals.
//         - Loan Facility: Investors can avail loans against their FDs without breaking them.
//         - Tax Implications: Interest earned is taxable and subject to TDS above a certain limit.`,

//         2: `Mutual Funds – Diversify Your Portfolio. 
//         Mutual funds pool money from various investors to invest in stocks, bonds, or other assets, providing diversification and professional management.
//         - Types: Includes equity funds, debt funds, hybrid funds, and index funds, catering to different risk appetites.
//         - SIP Option: Systematic Investment Plans (SIPs) allow small periodic investments rather than lump sums.
//         - Risk & Returns: Higher potential returns but also market risks, depending on fund type.
//         - Liquidity: Easily redeemable, with varying exit loads and tax implications.
//         - Professional Management: Managed by experienced fund managers who analyze market trends and investment opportunities.`,

//         3: `Stocks – High Risk, High Reward. 
//         Stocks represent ownership in a company, offering potential growth and dividends but with market risks.
//         - Equity Investment: Buying stocks means holding a share in the company’s ownership.
//         - Returns: Potentially high returns through capital appreciation and dividends.
//         - Market Volatility: Stock prices fluctuate due to economic conditions, company performance, and market sentiment.
//         - Long-Term Growth: Historically, stocks have provided superior long-term returns compared to other asset classes.
//         - Risk Management: Investors use strategies like diversification and stop-loss orders to manage risks.`,

//         4: `Gold – A Safe Haven Asset. 
//         Gold is considered a stable investment, often used to hedge against inflation and economic uncertainties.
//         - Forms of Investment: Available as physical gold (jewelry, coins, bars), digital gold, Gold ETFs, and sovereign gold bonds.
//         - Inflation Hedge: Maintains value during economic downturns and inflationary periods.
//         - Liquidity: Easily tradable in global markets.
//         - Diversification: Adds balance to investment portfolios by reducing overall risk.
//         - Returns: Historically provides moderate returns but is relatively more stable than stocks.`
//     };

//     return (
//         <div className="flex flex-col items-center h-full pt-10 bg-gradient-to-br from-green-700 via-emerald-400 to-green-400">
//             <h1 className="text-green-700 font-bold font-oswald text-7xl m-3 tracking-wider pb-6">INVESTMENTS</h1>
//             <i className="text-white text-xl pb-4">It is not how much money you make, but how much money you keep, how hard it works for you, and how many generations you keep it for.</i>
            
//             <div className="flex flex-row gap-4 p-8">
//                 {items.map((item) => (
//                     <Cards 
//                         key={item.index} 
//                         title={item.title} 
//                         description={item.description} 
//                         onclick={() => setSelectedCard(item.index)} 
//                     />
//                 ))}
//             </div>
            
//             <div className="flex justify-end gap-4 items-center flex-col">
//                 <h1 className="text-green-700 font-bold text-2xl">TYPE OF INVESTMENT:</h1>
//                 {selectedCard && (
//                     <div className="text-gray-200 text-center max-w-xl">
//                         <h1 className="text-6xl font-bold">{items.find(i => i.index === selectedCard).title}</h1>
//                         <p className="text-3xl">{investmentDetails[selectedCard]}</p>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// }
"use client";
import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"; // Import ShadCN Card
import Cards from "@/app/investments/components/cards";

export default function Page() {
    const [selectedCard, setSelectedCard] = useState(null);

    const items = [
        { index: 1, title: "FIXED DEPOSITS", description: "FOR YOUR SECURE FUTURE" },
        { index: 2, title: "MUTUAL FUNDS", description: "INVEST IN THE FUTURE" },
        { index: 3, title: "STOCKS", description: "HIGH RISK, HIGH REWARD" },
        { index: 4, title: "GOLD", description: "STABLE & SECURE INVESTMENT" },
    ];

    const investmentDetails = {
        1: [
            "📌 **Fixed Deposit (FD) – A Secure Investment Option**",
            "✅ Guaranteed Returns",
            "✅ Interest Rates: 3%-8% per annum",
            "✅ Flexible Tenure: 7 days to 10 years",
            "✅ Loan Facility Available",
            "✅ Tax Implications: Subject to TDS"
        ],
        2: [
            "📌 **Mutual Funds – Diversify Your Portfolio**",
            "✅ Types: Equity, Debt, Hybrid & Index Funds",
            "✅ SIP Option for Small Investments",
            "✅ High Potential Returns, but Market Risks Apply",
            "✅ Liquidity: Can be Redeemed Anytime",
            "✅ Professionally Managed by Experts"
        ],
        3: [
            "📌 **Stocks – High Risk, High Reward**",
            "✅ Equity Investment with Ownership",
            "✅ Potential for High Returns & Dividends",
            "✅ Market Volatility: Prices Fluctuate",
            "✅ Long-Term Growth Benefits",
            "✅ Risk Management via Diversification"
        ],
        4: [
            "📌 **Gold – A Safe Haven Asset**",
            "✅ Investment Forms: Jewelry, Digital Gold, ETFs, Bonds",
            "✅ Hedge Against Inflation & Economic Instability",
            "✅ High Liquidity in Global Markets",
            "✅ Portfolio Diversification Benefits",
            "✅ Historically Stable & Moderate Returns"
        ]
    };

    return (
        <div className="flex flex-col items-center h-full pt-10 bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-700 min-h-screen px-4">
            {/* Page Title */}
            <h1 className="text-white font-extrabold font-oswald text-7xl mb-6 tracking-wider drop-shadow-md">INVESTMENTS</h1>
            <p className="text-gray-200 text-lg italic max-w-2xl text-center px-4">
                “It is not how much money you make, but how much money you keep, how hard it works for you, and how many generations you keep it for.”
            </p>

            
            <div className="flex flex-wrap justify-center gap-6 p-8">
                {items.map((item) => (
                    <Card
                        key={item.index}
                        onClick={() => setSelectedCard(item.index)}
                        className="w-64 p-4 text-center bg-gradient-to-br from-green-600 via-green-600 to-emerald-400 cursor-pointer border border-gray-200 hover:shadow-lg hover:border-white transition-all duration-300"
                    >
                        <CardHeader>
                            <CardTitle className="text-xl font-bold text-gray-800">{item.title}</CardTitle>
                            <CardDescription className="text-white">{item.description}</CardDescription>
                        </CardHeader>
                    </Card>
                ))}
            </div>

           
            {selectedCard && (
                <div className="bg-black bg-opacity-40 backdrop-blur-lg p-6 rounded-xl max-w-2xl text-white mt-6 transition-all duration-500 shadow-lg">
                    <h2 className="text-3xl font-bold text-center mb-4">{items.find(i => i.index === selectedCard).title}</h2>
                    
                   
                    <ul className="text-lg leading-relaxed space-y-2">
                        {investmentDetails[selectedCard].map((point, index) => (
                            <li key={index} className="block">
                                {point}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}
