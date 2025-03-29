"use client";
import { useState, useEffect } from "react";

export default function Stocks() {
    const [query, setQuery] = useState("");
    const [sugg, setSugg] = useState([]);
    const [selectedStocks, setSelectedStocks] = useState([]);

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
                    const results = jsonData.bestMatches.slice(0, 5);
                    setSugg(results);
                }
            } catch (error) {
                console.error("Error fetching stock data:", error);
                setSugg([]);
            }
        };

        fetchStocks();
    }, [query]);

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

    return (
        <div className="text-white p-4 h-[100vh]" style={{backgroundImage:"url('/images/stockpage.avif')",backgroundSize:"cover"}}>
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
                        <li
                            key={index}
                            className="cursor-pointer p-2 hover:bg-gray-200"
                            onClick={() => handleSelect(stock)}
                        >
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
                            <li
                                key={index}
                                className="cursor-pointer p-2 bg-green-700 text-white rounded mt-2 hover:bg-red-600"
                                onClick={() => handleRemove(stock["1. symbol"])}
                            >
                                {stock["1. symbol"]} - {stock["2. name"]}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}
