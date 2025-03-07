"use client";

import { useEffect, useState } from "react";

export default function Page() {
    const [weight, setWeight] = useState<number>(0);
    const [height, setHeight] = useState<number>(0);
    const [bmi, setBmi] = useState<number>(0);
    const [isSubmitted, setSubmit] = useState<boolean>(false);

    useEffect(() => {
        setWeight(parseInt(sessionStorage.getItem("weight") || "0"));
        setHeight(parseFloat(sessionStorage.getItem("height") || "0"));
    }, []);

    const onSubmit = () => {
        if (weight > 0 && height > 0) {
            const calculatedBmi = weight / (height * height);
            setBmi(calculatedBmi);
            setSubmit(true);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-green-900 to-black">
            <div className="bg-white p-8 rounded-2xl shadow-xl w-96">
                <h1 className="text-2xl font-bold text-green-700 text-center mb-4">BMI Calculator</h1>

                <form className="space-y-4">
                    <div>
                        <label className="text-black font-medium">Weight (kg)</label>
                        <input
                            className="w-full border border-green-400 bg-gray-100 text-black rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-600"
                            type="number"
                            value={weight}
                            onChange={(e) => setWeight(e.target.valueAsNumber)}
                        />
                    </div>

                    <div>
                        <label className="text-black font-medium">Height (m)</label>
                        <input
                            className="w-full border border-green-400 bg-gray-100 text-black rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-600"
                            type="number"
                            value={height}
                            onChange={(e) => setHeight(e.target.valueAsNumber)}
                        />
                    </div>

                    <div>
                        <label className="text-black font-medium">Age</label>
                        <input
                            className="w-full border border-green-400 bg-gray-100 text-black rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-600"
                            type="number"
                        />
                    </div>
                </form>

                <button
                    onClick={onSubmit}
                    className="mt-5 w-full bg-green-700 text-white font-bold py-2 rounded-lg hover:bg-green-800 transition duration-300"
                >
                    Calculate BMI
                </button>

                {isSubmitted && (
                    <p className="mt-4 text-center text-lg font-semibold text-green-900">
                        Your BMI is <span className="text-black">{bmi.toFixed(2)}</span>
                    </p>
                )}
            </div>
        </div>
    );
}
