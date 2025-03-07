"use client"

import {useEffect, useState} from "react";

export default function Page(){
    const [age,setAge]=useState<number>(0);
    useEffect(() => {
        setAge(parseInt(sessionStorage.getItem("age") || "0"));
    }, []);
    const [retirementAge,setRetirementAge]=useState<number>(60);
    const [inflation,setInflation]=useState<number>(1);
    const [expenses,setExpenses]=useState<number>();
    const [isOpen,setIsOpen]=useState<boolean>(false);
    const [yearlyExpense,setYearlyExpense]=useState<number>();
    const [requiredAtRetirement,setRequiredAtRetirement]=useState<number>(0);
    const [finalCost,setFinalCost]=useState<number>(0);
    const onSubmit = () => {
        if (expenses !== undefined && inflation !== undefined && age !== undefined && retirementAge !== undefined) {
            const expense = expenses * 12;
            setYearlyExpense(expense);
            const rate = 1 + ((inflation )/ 100);
            const time= retirementAge - age;
            const expenseAtRetirement = expense*Math.pow(rate,time);
            setRequiredAtRetirement(expenseAtRetirement);
            const final=(expenseAtRetirement/inflation)*100;
            setFinalCost(final);
            setIsOpen(true);
        }
    };
    return(
        <div>
            {/*current yearly expenses multiplied by the rate and raise to the power of the difference between the retirement age and the current age */}
            <form className="flex flex-col space-y-4 w-full max-w-md">
                <div className="grid grid-cols-2 items-center gap-4">
                    <label className="text-black font-medium">Current Age:</label>
                    <input
                        value={age}
                        type="number"
                        onChange={(e) => setAge(e.target.valueAsNumber)}
                        className="border-2 rounded-lg p-2 w-full"
                    />
                </div>

                <div className="grid grid-cols-2 items-center gap-4">
                    <label className="text-black font-medium">Retirement Age:</label>
                    <input
                        value={retirementAge}
                        type="number"
                        max={20}
                        min={1}
                        onChange={(e) => setRetirementAge(e.target.valueAsNumber)}
                        className="border-2 rounded-lg p-2 w-full"
                    />
                </div>

                <div className="grid grid-cols-2 items-center gap-4">
                    <label className="text-black font-medium">Yearly Inflation:</label>
                    <input
                        value={inflation}
                        type="number"
                        onChange={(e) => setInflation(e.target.valueAsNumber)}
                        className="border-2 rounded-lg p-2 w-full"
                    />
                </div>

                <div className="grid grid-cols-2 items-center gap-4">
                    <label className="text-black font-medium">Monthly Expenses:</label>
                    <input
                        value={expenses}
                        type="number"
                        onChange={(e) => setExpenses(e.target.valueAsNumber)}
                        className=" border-2 rounded-lg p-2 w-full"
                    />
                </div>
            </form>
            <button onClick={onSubmit} className="p-3 rounded-lg mt-4 w-[40vw] bg-green-500 text-white">Calculate The money Required at your retirement</button>
            {
                isOpen && (
                    <div>
                        <p>Yearly Expense {yearlyExpense}</p>
                        <p>Yearly Expense at Retirement:  {requiredAtRetirement.toFixed(2)}</p>
                        <p>Corpus required at retirement: {finalCost}</p>
                        <p>(at the interest rate of 6 percent)</p>
                    </div>
                )
            }
        </div>
    )
}