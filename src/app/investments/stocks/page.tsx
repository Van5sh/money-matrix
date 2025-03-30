"use client";
import { useState, useEffect } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

export default function Stocks() {
    const [query, setQuery] = useState("");
    const [sugg, setSugg] = useState([]);
    const [selectedStocks, setSelectedStocks] = useState([]);
    const [viewquery, setViewquery] = useState("");
    const [singstoc, setSingstoc] = useState(null);
    const [title, setTitle] = useState(null);

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
        <div className="text-white p-4 h-[100vh]" style={{ backgroundImage: "url('/images/stockpage.avif')", backgroundSize: "cover" }}>
            <input
                className="text-black p-2 border border-gray-300 rounded w-[45vh]"
                type="text"
                placeholder="Search stock..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            {sugg.length > 0 && (
                <ul className="text-green-800 bg-white border w-[45vh] absolute border-gray-300 mt-2 rounded shadow-lg">
                    {sugg.map((stock, index) => (
                        <li key={index} className="cursor-pointer p-2 hover:bg-gray-200" onClick={() => handleSelect(stock)}>
                            {stock["1. symbol"]} - {stock["2. name"]}
                        </li>
                    ))}
                </ul>
            )}
            {selectedStocks.length > 0 && (
                <div className="mt-4">
                    <h3 className="text-lg font-semibold">SELECTED STOCKS:</h3>
                    <ul className="bg-emerald-800 p-3 rounded-lg">
                        {selectedStocks.map((stock, index) => (
                            <li key={index} className="cursor-pointer p-2 bg-green-700 text-white rounded mt-2 hover:bg-red-600" onClick={() => handleRemove(stock["1. symbol"]) }>
                                {stock["1. symbol"]} - {stock["2. name"]}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            <div className="pt-4">
                <input type="text" placeholder="Write the stock..." value={viewquery} onChange={(e) => setViewquery(e.target.value)} className="w-[45vh] text-black p-2 border-[1px] border-gray-300" />
                {title && (
                    <div className="bg-emerald-800 p-4 mt-4 rounded-lg">
                        <h2 className="text-lg font-semibold">{title["2. Symbol"]} - Last Refreshed: {title["3. Last Refreshed"]}</h2>
                        <p>Time Zone: {title["5. Time Zone"]}</p>
                    </div>
                )}
                {singstoc && (
                    <div className="bg-emerald-800 p-4 mt-4 rounded-lg min-h-[75vh]">
                        <h2 className="text-lg font-semibold">Stock Price Trend (Last 5 Days)</h2>
                        <ResponsiveContainer  width="100%" height={600}>
                            <LineChart data={graphData}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
                                <XAxis dataKey="date" tick={{ fill: 'white' }} />
                                <YAxis domain={[(dataMin) => dataMin * 0.99, (dataMax) => dataMax * 1.01]} tick={{ fill: 'white' }} />
                                <Tooltip />
                                <Line type="monotone" dataKey="close" stroke="#82ca9d" strokeWidth={2} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                )}
            </div>
        </div>
    );
}
