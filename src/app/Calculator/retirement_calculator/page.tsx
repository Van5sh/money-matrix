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
            <form>
                <p>Current Age</p>
                <input value={age} type="number" onChange={(e)=>{setAge(e.target.valueAsNumber)}} className="border-2 rosunded-lg"/>
                <p>Retirement Age</p>
                <input value={retirementAge} type="number" max={20} min={1} onChange={(e)=>{setRetirementAge(e.target.valueAsNumber)}} className="border-2 rounded-lg" />
                <p>Yearly Inflation</p>
                <input value={inflation} type="number" onChange={(e)=>{setInflation(e.target.valueAsNumber)}} className="border-2 rounded-lg" />
                <p>Monthly Expenses</p>
                <input value={expenses} type="number" onChange={(e)=>{setExpenses(e.target.valueAsNumber)}} className="border-2 rounded-lg" />
            </form>
            <button onClick={onSubmit} className="bg-green-500 text-white">Calculate The money Required at your retirement</button>
            {
                isOpen && (
                    <div>
                        <p>Yearly Expense {yearlyExpense}</p>
                        <p>{requiredAtRetirement.toFixed(2)}</p>
                        <p>{finalCost}</p>
                    </div>
                )
            }
        </div>
    )
}