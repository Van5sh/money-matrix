"use client";

import { useState,useEffect } from "react";

export default function Page() {
    const [childAge, setChildAge] = useState<number>(1);
    const [policyTerm, setPolicyTerm] = useState<number>(18);
    const [sumAssured, setSumAssured] = useState<number>(500000);
    const [premium, setPremium] = useState<number>(3000);
    const [parentSmoker, setParentSmoker] = useState<boolean>(false);
    const[isopen,setisopen]=useState<boolean>(false);
    const[isprem,setprem]=useState<number>(0);
    const onSubmit=()=>{
        if((sumAssured>0)&&(premium>0)){
            setisopen(true);
            const pre=premium*12;
            setprem(pre);
        }
        

    }


    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-6  text-white">
            <div className="bg-black bg-opacity-60 backdrop-blur-sm border-[1px] border-green-600 text-black border shadow-lg rounded-xl p-6 w-full max-w-lg">
                <h2 className="text-2xl font-semibold text-green-700 text-center mb-6">CHILD LIFE INSURANCE CALCULATOR</h2>

                <form className="space-y-6">
                    {/* Child Age */}
                    <div>
                        <label className="block text-white font-semibold mb-1">Child’s Age: {childAge} years</label>
                        <input 
                            type="range" 
                            min="1" max="18" step="1" 
                            value={childAge} 
                            onChange={(e) => setChildAge(parseInt(e.target.value))} 
                            className="w-full accent-green-600"
                        />
                    </div>

                    {/* Policy Term */}
                    <div>
                        <label className="block text-white font-semibold mb-1">Policy Term: {policyTerm} years</label>
                        <input 
                            type="range" 
                            min="5" max="25" step="1" 
                            value={policyTerm} 
                            onChange={(e) => setPolicyTerm(parseInt(e.target.value))} 
                            className="w-full accent-green-600"
                        />
                    </div>

                    {/* Sum Assured */}
                    <div>
                        <label className="block text-white font-semibold mb-1">Sum Assured (₹)</label>
                        <input 
                            type="number" 
                            value={sumAssured} 
                            onChange={(e) => setSumAssured(parseInt(e.target.value))} 
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-green-300"
                        />
                    </div>

                    {/* Premium Amount */}
                    <div>
                        <label className="block text-white font-semibold mb-1">Monthly Premium (₹)</label>
                        <input 
                            type="number" 
                            value={premium} 
                            onChange={(e) => setPremium(parseInt(e.target.value))} 
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-green-300"
                        />
                    </div>

                    {/* Parent Smoker Status */}
                    <div>
                        <label className="block text-white font-semibold">Parent Smoker Status</label>
                        <div className="flex space-x-4 mt-1">
                            <button
                                type="button"
                                onClick={() => setParentSmoker(true)}
                                className={`px-4 py-2 rounded-lg font-semibold transition-all duration-200 ${parentSmoker ? 'bg-green-700 text-white' : 'bg-gray-200 text-black hover:bg-gray-300'}`}
                            >
                                Yes
                            </button>
                            <button
                                type="button"
                                onClick={() => setParentSmoker(false)}
                                className={`px-4 py-2 rounded-lg font-semibold transition-all duration-200 ${!parentSmoker ? 'bg-green-700 text-white' : 'bg-gray-200 text-black hover:bg-gray-300'}`}
                            >
                                No
                            </button>
                        </div>
                    </div>
                    <div className="mt-6 flex justify-center">
                    <button
                    type="button"
                    onClick={onSubmit}
                        className="w-full py-3 bg-green-600  border-[1px] border-white backdrop-blur-md bg-opacity-35 hover:bg-gradient-to-r hover:from-green-600 hover:to-green-800 text-white font-bold rounded-lg hover:scale-105 hover:shadow-lg transition-transform duration-300"
                    >
                        Calculate Premium
                    </button>
                </div>
                </form>

                {/* Submit Button */}
               
                {isopen &&(
                    <div className="mt-4 font-mono font-semibold text-lg text-white px-1 text-center bg-green-700 py-4  rounded-xl">
                        <p>Your esimated Premium per year is:{isprem} </p>
                    </div>
                )}
            </div>
        </div>
    );
}
