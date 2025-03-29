"use client";

import { useEffect, useState } from "react";

export default function Page() {
    const [age, setAge] = useState<number>(0);
    useEffect(() => {
        const storedAge = parseInt(sessionStorage.getItem("age") || "0", 10);
        setAge(isNaN(storedAge) ? 0 : storedAge);
    }, []);

    const [retirementAge, setRetirementAge] = useState<number>(60);
    const [inflation, setInflation] = useState<number>(1);
    const [expenses, setExpenses] = useState<number>(0);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [yearlyExpense, setYearlyExpense] = useState<number>(0);
    const [requiredAtRetirement, setRequiredAtRetirement] = useState<number>(0);
    const [finalCost, setFinalCost] = useState<number>(0);

    const onSubmit = () => {
        if (expenses > 0 && inflation >= 0 && age >= 0 && retirementAge > age) {
            const expense = expenses * 12;
            setYearlyExpense(expense);
            const rate = 1 + (inflation / 100);
            const time = retirementAge - age;
            const expenseAtRetirement = expense * Math.pow(rate, time);
            setRequiredAtRetirement(expenseAtRetirement);
            const final = inflation !== 0 ? (expenseAtRetirement / inflation) * 100 : 0;
            setFinalCost(final);
            setIsOpen(true);
        }
    };

    return (
        <div className="flex justify-center items-center   p-6">
            <div className="w-full max-w-md bg-black bg-opacity-60 backdrop-blur-sm border border-green-600 shadow-lg p-6 rounded-2xl">
                <h1 className="text-center text-2xl font-bold text-green-400 mb-4">Retirement Fund Calculator</h1>
                <form className="space-y-4">
                    {[
                        { label: "Current Age", value: age, setValue: setAge },
                        { label: "Retirement Age", value: retirementAge, setValue: setRetirementAge, min: 40 },
                        { label: "Yearly Inflation (%)", value: inflation, setValue: setInflation },
                        { label: "Monthly Expenses ($)", value: expenses, setValue: setExpenses },
                    ].map(({ label, value, setValue, min }, index) => (
                        <div key={index} className="flex flex-col">
                            <label className="text-white font-medium pb-2">{label}:</label>
                            <input
                                type="number"
                                value={value}
                                min={min}
                                onChange={(e) => setValue(e.target.valueAsNumber)}
                                className="border border-green-400 bg-gray-700 text-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                        </div>
                    ))}

                    <button
                        type="button"
                        onClick={onSubmit}
                        className="w-full p-3 rounded-lg bg-green-600  border-[1px] border-white backdrop-blur-md bg-opacity-35 text-white font-bold hover:bg-green-600 transition-transform transform hover:scale-105"
                    >
                        Calculate Retirement Fund
                    </button>
                </form>

                {isOpen && (
                    <div className="mt-6 p-4 bg-green-700 text-white rounded-lg shadow-md text-center">
                        <p className="font-semibold">Yearly Expense: Rs {yearlyExpense}</p>
                        <p>Yearly Expense at Retirement: Rs {requiredAtRetirement.toFixed(2)}</p>
                        <p>Corpus required at retirement: Rs {finalCost.toFixed(2)}</p>
                        <p className="text-sm opacity-80">(at an interest rate of 6%)</p>
                    </div>
                )}
            </div>
        </div>
    );
}