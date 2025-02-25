"use client"

// import {useEffect, useState} from "react";
import {useEffect, useState} from "react";

export default function Page(){
    const [age,setAge]=useState<number>();
    useEffect(() => {
        setAge(parseInt(sessionStorage.getItem("age") || "0"));
    }, []);
    const [retirementAge,setRetirementAge]=useState<number>();
    const [inflation,setInflation]=useState<number>();
    const [expenses,setExpenses]=useState<number>();
    const [isOpen,setIsOpen]=useState<boolean>(false);
    const [yearlyExpense,setYearlyExpense]=useState<number>();
    const [finalRate,setFinalRate]=useState<number>();
    const [requiredAtRetirement,setRequiredAtRetirement]=useState<number>();
    const onSubmit = () => {
        if (expenses !== undefined && inflation !== undefined && age !== undefined && retirementAge !== undefined) {
            const expense = expenses * 12;
            setYearlyExpense(expense);
            const rate = 1 + inflation / 100;
            const expenseAtRetirement = Math.pow((expenses * rate), retirementAge - age);
            setRequiredAtRetirement(expenseAtRetirement);
            setIsOpen(true);
        }
    };
    return(
        <div>
            {/*current yearly expenses multiplied by the rate and raise to the power of the difference between the retirement age and the current age */}
            <form>
                <p>Current Age</p>
                <input value={age} onChange={(e)=>{setAge(e.target.valueAsNumber)}} className="border-2 rosunded-lg"/>
                <p>Retirement Age</p>
                <input value={retirementAge} onChange={(e)=>{setRetirementAge(e.target.valueAsNumber)}} className="border-2 rounded-lg" />
                <p>Yearly Inflation</p>
                <input value={inflation} onChange={(e)=>{setInflation(e.target.valueAsNumber)}} className="border-2 rounded-lg" />
                <p>Monthly Expenses</p>
                <input value={expenses} onChange={(e)=>{setExpenses(e.target.valueAsNumber)}} className="border-2 rounded-lg" />
            </form>
            <button onClick={onSubmit} className="bg-green-500 text-white">Calculate The money Required at your retirement</button>
            {
                isOpen && (
                    <div>
                        <p>Yearly Expense at Retirement:{yearlyExpense}</p>
                    </div>
                )
            }
        </div>
    )
}