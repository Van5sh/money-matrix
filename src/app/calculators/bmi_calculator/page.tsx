
"use client";

import { useEffect, useState } from "react";
import Loading from "../loading";
export default function Page() {
    const [weight, setWeight] = useState<number>(50);
    const [height, setHeight] = useState<number>(1.6);
    const [age, setAge] = useState<number>(25);
    const [retirementAge, setRetirementAge] = useState<number>(60);
    const [inflation, setInflation] = useState<number>(2);
    const [monthlyExpenses, setMonthlyExpenses] = useState<number>(20000);
    const [bmi, setBmi] = useState<number | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const storedWeight = parseInt(sessionStorage.getItem("weight") || "50");
        const storedHeight = parseFloat(sessionStorage.getItem("height") || "1.6");
        setWeight(storedWeight);
        setHeight(storedHeight);
    }, []);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 5000)
        if (weight && height) {
            const bmiCalc = weight / (height * height);
            setBmi(bmiCalc);
        }
    }, [weight, height]);
    if (loading) {
        return <Loading />;
    }
    return (
        <div className="min-h-screen flex flex-col items-center justify-center pt-0 p-6">
            <div className="bg-emerald-200/95 border-[1px] border-white shadow-lg rounded-xl p-6 w-full max-w-lg">
                <h2 className="text-3xl font-semibold text-green-700 text-center mb-6 min-w-[45vh]">BMI Calculator</h2>

                <form className="space-y-6">
                    {/* Current Age */}
                    <div>
                        <label className="block text-gray-700 font-semibold mb-1">Current Age: {age}</label>
                        <input
                            type="range"
                            min="18" max="70" step="1"
                            value={age}
                            onChange={(e) => setAge(parseInt(e.target.value))}
                            className="w-full accent-green-600"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-semibold mb-1">Weight (kg): {weight}</label>
                        <input
                            type="range"
                            min="30" max="150" step="1"
                            value={weight}
                            onChange={(e) => setWeight(parseInt(e.target.value))}
                            className="w-full accent-green-600"
                        />
                    </div>

                    {/* Height */}
                    <div>
                        <label className="block text-gray-700 font-semibold mb-1">Height (m): {height.toFixed(2)}</label>
                        <input
                            type="range"
                            min="1.2" max="2.2" step="0.01"
                            value={height}
                            onChange={(e) => setHeight(parseFloat(e.target.value))}
                            className="w-full accent-green-600"
                        />
                    </div>
                </form>

                {/* BMI Display */}
                <div className="mt-6 text-center">
                    <p className="text-lg font-semibold text-gray-800">
                        Your BMI: <span className="text-green-700">{bmi?.toFixed(2)}</span>
                    </p>
                </div>
            </div>
        </div>
    );
}


