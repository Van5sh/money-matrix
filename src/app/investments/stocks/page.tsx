"use client";
import { useState, useEffect } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import Loading from "../stocks/loading";

export default function Stocks() {
    const [query, setQuery] = useState("");
    const [sugg, setSugg] = useState([]);
    const [selectedStocks, setSelectedStocks] = useState([]);
    const [viewquery, setViewquery] = useState("");
    const [singstoc, setSingstoc] = useState(null);
    const [title, setTitle] = useState(null);
    const [loading, setLoading] = useState<boolean>(true);
   
    

    useEffect(() => {
        const fetchStocks = async () => {
            if (query.length < 1) {
                setSugg([]);
                return;
            }
            try {
                const apikey = process.env.NEXT_PUBLIC_ALPHA_VANTAGE_API_KEY;
                const response = await fetch(
                    `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${query}&apikey=${apikey}`
                );
                const jsonData = await response.json();
                if (jsonData.bestMatches) {
                    setSugg(jsonData.bestMatches.slice(0, 5));
                }
            } catch (error) {
                console.error("Error fetching stock data:", error);
                setSugg([]);
            }
        };
        fetchStocks();
    }, [query]);

    useEffect(() => {
        const fetchStockData = async () => {
            if (viewquery.length < 1) {
                setSingstoc(null);
                setTitle(null);
                return;
            }
            try {
                const apikey = process.env.NEXT_PUBLIC_ALPHA_VANTAGE_API_KEY;
                const response = await fetch(
                    `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${viewquery}.BSE&outputsize=full&apikey=${apikey}`
                );
                const jsonData = await response.json();
                if (jsonData["Meta Data"] && jsonData["Time Series (Daily)"]) {
                    setTitle(jsonData["Meta Data"]);
                    setSingstoc(jsonData["Time Series (Daily)"]);
                }
            } catch (error) {
                console.error("Error fetching stock time series:", error);
            }
        };
        fetchStockData();
    }, [viewquery]);
    useEffect(() => {
        setTimeout(()=>{setLoading(false)},5000);
    }, []);
    if(loading){
        return <Loading />;
    }

    const handleSelect = (stock) => {
        if (!selectedStocks.some(s => s["1. symbol"] === stock["1. symbol"])) {
            setSelectedStocks([...selectedStocks, stock]);
        }
        setQuery("");
        setSugg([]);
    };

    const handleRemove = (symbol) => {
        setSelectedStocks(selectedStocks.filter(stock => stock["1. symbol"] !== symbol));
    };

    const graphData = singstoc ? Object.keys(singstoc).slice(0, 5).map(date => ({
        date,
        close: parseFloat(singstoc[date]["4. close"])
    })).reverse() : [];

    return (
        <div className="min-h-screen w-full flex flex-col  bg-gradient-to-br from-green-900 to-emerald-600 text-white p-6">
            {/* Title */}
            <h1 className="text-3xl font-bold text-center mb-6">📈 Stock Market Tracker</h1>

            {/* Search Bar */}
            <div className="w-full max-w-lg">
                <input
                    className="w-full p-3 text-black border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    type="text"
                    placeholder="Search stock..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                {sugg.length > 0 && (
                    <ul className="bg-white text-black border border-gray-300 mt-2 rounded-lg shadow-lg absolute w-full max-w-lg z-10">
                        {sugg.map((stock, index) => (
                            <li key={index} className="cursor-pointer p-3 hover:bg-gray-200" onClick={() => handleSelect(stock)}>
                                {stock["1. symbol"]} - {stock["2. name"]}
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            {/* Selected Stocks */}
            {selectedStocks.length > 0 && (
                <div className="mt-6 w-full max-w-lg bg-emerald-800 p-4 rounded-lg shadow-md">
                    <h3 className="text-lg font-semibold mb-2">Selected Stocks:</h3>
                    <ul>
                        {selectedStocks.map((stock, index) => (
                            <li key={index} className="cursor-pointer p-3 bg-green-700 text-white rounded-md mt-2 hover:bg-red-600" onClick={() => handleRemove(stock["1. symbol"]) }>
                                {stock["1. symbol"]} - {stock["2. name"]}
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Stock Input */}
            <div className="mt-6 w-full max-w-lg">
                <input 
                    type="text" 
                    placeholder="Enter stock symbol..." 
                    value={viewquery} 
                    onChange={(e) => setViewquery(e.target.value)} 
                    className="w-full p-3 text-black border border-gray-300 rounded-lg shadow-md" 
                />
                {title && (
                    <div className="bg-emerald-800 p-4 mt-4 rounded-lg shadow-md">
                        <h2 className="text-lg font-semibold">{title["2. Symbol"]} - Last Refreshed: {title["3. Last Refreshed"]}</h2>
                        <p>Time Zone: {title["5. Time Zone"]}</p>
                    </div>
                )}

                {/* Stock Graph */}
                {singstoc && (
                    <div className="bg-emerald-900 p-6 mt-6 rounded-lg shadow-md  w-[225vh] min-w-screen-xl">
                        <h2 className="text-xl font-semibold mb-4 text-center text-white">Stock Price Trend (Last 5 Days)</h2>
                        <ResponsiveContainer width="100%" height={500}>
                            <LineChart data={graphData} margin={{ left: 20, right: 20 }}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
                                <XAxis dataKey="date" tick={{ fill: 'white' }} />
                                <YAxis domain={[(dataMin) => dataMin * 0.99, (dataMax) => dataMax * 1.01]} tick={{ fill: 'white' }} />
                                <Tooltip />
                                <Line type="monotone" dataKey="close" stroke="#10b981" strokeWidth={4} dot={{ r: 5, fill: "#fff" }} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                )}
            </div>
        </div>
    );
}
