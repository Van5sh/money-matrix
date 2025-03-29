"use client";
import { useState, useEffect } from "react";

export default function Page() {
    const [age, setAge] = useState<number>(25);
    const [retirementAge, setRetirementAge] = useState<number>(60);
    const [salary, setSalary] = useState<number>(50000);
    const [smoker, setSmoker] = useState<boolean>(false);
    const [weight, setWeight] = useState<number>(60);
    const [height, setHeight] = useState<number>(1.7);

    useEffect(() => {
        setWeight(parseInt(sessionStorage.getItem("weight") || "60"));
        setHeight(parseFloat(sessionStorage.getItem("height") || "1.7"));
    }, []);

    return (
        <div className="flex flex-col items-center justify-center pb-12 min-h-screen text-white px-4">
            <div className="w-full max-w-xl bg-emerald-200/80 border-[1px] border-white bg-opacity-50 text-black backdrop-blur-md p-8 rounded-3xl shadow-2xl md:max-w-lg md:w-[60vh] flex flex-col justify-center space-y-6">
                <h1 className="text-2xl font-bold text-green-800 text-center mb-4">INSURANCE CALCULATOR</h1>

                <form className="space-y-5">
                    {/* Age */}
                    <div>
                        <label className="block text-gray-700 font-medium">Age: <span className="text-green-700 font-semibold">{age} years</span></label>
                        <input
                            type="range"
                            min="18"
                            max="80"
                            step="1"
                            value={age}
                            onChange={(e) => setAge(Number(e.target.value))}
                            className="w-full cursor-pointer accent-green-600"
                        />
                    </div>

                    {/* Retirement Age */}
                    <div>
                        <label className="block text-gray-700 font-medium">Retirement Age: <span className="text-green-700 font-semibold">{retirementAge} years</span></label>
                        <input
                            type="range"
                            min="40"
                            max="80"
                            step="1"
                            value={retirementAge}
                            onChange={(e) => setRetirementAge(Number(e.target.value))}
                            className="w-full cursor-pointer accent-green-600"
                        />
                    </div>

                    {/* Salary */}
                    <div>
                        <label className="block text-gray-700 font-medium">Salary (₹ per month)</label>
                        <input
                            type="number"
                            value={salary}
                            onChange={(e) => setSalary(Number(e.target.value))}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-green-300"
                        />
                    </div>

                    {/* Smoker Status */}
                    <div>
                        <label className="block text-gray-700 font-medium">Do you smoke?</label>
                        <div className="flex space-x-4 mt-1">
                            <button
                                type="button"
                                onClick={() => setSmoker(true)}
                                className={`px-4 py-2 rounded-lg font-semibold transition-all duration-200 ${smoker ? 'bg-green-700 text-white' : 'bg-gray-200 text-black hover:bg-gray-300'}`}
                            >
                                Yes
                            </button>
                            <button
                                type="button"
                                onClick={() => setSmoker(false)}
                                className={`px-4 py-2 rounded-lg font-semibold transition-all duration-200 ${!smoker ? 'bg-green-700 text-white' : 'bg-gray-200 text-black hover:bg-gray-300'}`}
                            >
                                No
                            </button>
                        </div>
                    </div>

                    {/* Weight */}
                    <div>
                        <label className="block text-gray-700 font-medium">Weight (kg): <span className="text-green-700 font-semibold">{weight} kg</span></label>
                        <input
                            type="range"
                            min="30"
                            max="150"
                            step="1"
                            value={weight}
                            onChange={(e) => setWeight(Number(e.target.value))}
                            className="w-full cursor-pointer accent-green-600"
                        />
                    </div>

                    {/* Height */}
                    <div>
                        <label className="block text-gray-700 font-medium">Height (m): <span className="text-green-700 font-semibold">{height.toFixed(2)} m</span></label>
                        <input
                            type="range"
                            min="1.2"
                            max="2.2"
                            step="0.01"
                            value={height}
                            onChange={(e) => setHeight(parseFloat(e.target.value))}
                            className="w-full cursor-pointer accent-green-600"
                        />
                    </div>
                </form>

                {/* Submit Button */}
                <div className="flex justify-center">
                    <button
                        className="w-full py-3 bg-green-900/35 backdrop-blur-xl hover:bg-gradient-to-r hover:from-green-600 hover:to-green-800 text-black hover:text-white font-bold rounded-lg hover:scale-105 hover:shadow-lg transition-transform duration-300"
                    >
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
}
