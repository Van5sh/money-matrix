// "use client";

// import { useEffect, useState } from "react";

// export default function Page() {
//     const [weight, setWeight] = useState<number>(0);
//     const [height, setHeight] = useState<number>(0);
//     const [bmi, setBmi] = useState<number>(0);
//     const [isSubmitted, setSubmit] = useState<boolean>(false);

//     useEffect(() => {
//         setWeight(parseInt(sessionStorage.getItem("weight") || "0"));
//         setHeight(parseFloat(sessionStorage.getItem("height") || "0"));
//     }, []);

//     const onSubmit = () => {
//         if (weight > 0 && height > 0) {
//             const calculatedBmi = weight / (height * height);
//             setBmi(calculatedBmi);
//             setSubmit(true);
//         }
//     };

//     return (
//             <div className="flex flex-col h-[75vh] max-w-md bg-white p-8 rounded-2xl shadow-xl justify-center items-center">
//                 <h1 className="text-2xl font-bold text-green-700 text-center mb-4">BMI Calculator</h1>
//                 <form className="space-y-4">
//                     <div>
//                         <label className="text-black font-medium">Weight (kg)</label>
//                         <input
//                             className="w-full border border-green-400 bg-gray-100 text-black rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-600"
//                             type="number"
//                             value={weight}
//                             onChange={(e) => setWeight(e.target.valueAsNumber)}
//                         />
//                     </div>

//                     <div>
//                         <label className="text-black font-medium">Height (m)</label>
//                         <input
//                             className="w-full border border-green-400 bg-gray-100 text-black rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-600"
//                             type="number"
//                             value={height}
//                             onChange={(e) => setHeight(e.target.valueAsNumber)}
//                         />
//                     </div>

//                     <div>
//                         <label className="text-black font-medium">Age</label>
//                         <input
//                             className="w-full border border-green-400 bg-gray-100 text-black rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-600"
//                             type="number"
//                         />
//                     </div>
//                 </form>

//                 <button
//                     onClick={onSubmit}
//                     className="mt-5 w-full bg-green-700 text-white font-bold py-2 rounded-lg hover:bg-green-800 transition duration-300"
//                 >
//                     Calculate BMI
//                 </button>

//                 {isSubmitted && (
//                     <p className="mt-4 text-center text-lg font-semibold text-green-900">
//                         Your BMI is <span className="text-black">{bmi.toFixed(2)}</span>
//                     </p>
//                 )}
//             </div>
//     );
// }
"use client";
import { useEffect, useState } from "react";

export default function Page() {
    const [weight, setWeight] = useState<number>(0);
    const [height, setHeight] = useState<number>(0);
    const [bmi, setBmi] = useState<number>(0);
    const [age, setAge] = useState<number>(18);
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
        <div className="flex flex-col items-center justify-center pb-12  bg-gradient-to-r  overflow-hidden">
            <div className="w-full max-w-xl bg-emerald-100/90 backdrop-blur-sm p-10 rounded-3xl shadow-2xl md:max-w-[65vh] md:max-h-[65vh] md:w-[65vh] md:h-[65vh] flex flex-col justify-center space-y-6">

                <h1 className="text-xl 2xl:text-3xl  2xl:pt-0  font-bold text-green-800 text-center mb-2">
                    BMI Calculator
                </h1>

                <form className="space-y-3 2xl:space-y-6">

                    <div className="flex flex-col">
                        <label className="text-gray-700 font-medium">Weight (kg)</label>
                        <input
                            className="w-full border size-6 2xl:size-10 2xl:w-full  border-green-500 bg-gray-100 text-black rounded-lg p-3 focus:outline-none focus:ring-4 focus:ring-green-500 transition-all duration-200 hover:border-green-600"
                            type="number"
                            value={weight}
                            onChange={(e) => setWeight(e.target.valueAsNumber)}
                        />
                    </div>


                    <div className="flex flex-col">
                        <label className="text-gray-700 font-medium">Height (m)</label>
                        <input
                            className="w-full border size-6 2xl:size-10 2xl:w-full border-green-500 bg-gray-100 text-black rounded-lg p-3 focus:outline-none focus:ring-4 focus:ring-green-500 transition-all duration-200 hover:border-green-600"
                            type="number"
                            value={height}
                            onChange={(e) => setHeight(e.target.valueAsNumber)}
                        />
                    </div>


                    <div className="flex flex-col ">
                        <label className="text-gray-700 font-medium">Age: <span className="text-green-700 font-semibold">{age} years</span></label>
                        <input
                            type="range"
                            min="1"
                            max="100"
                            step="1"
                            value={age}
                            onChange={(e) => setAge(Number(e.target.value))}
                            className="w-full size-6 2xl:size-10 2xl:w-full cursor-pointer border border-green-500 bg-gray-100 text-black rounded-lg p-1 focus:outline-none focus:ring-4 focus:ring-green-500 transition-all duration-200 hover:border-green-600"
                        />
                    </div>
                </form>

                <div className="flex justify-center">
                    <button
                        onClick={onSubmit}
                        className=" text-sm flex justify-center items-center 2xl:py-4 2xl:w-full 2xl:text-base w-[35vh] py-2  bg-gradient-to-r from-green-600 to-green-800 text-white font-bold  rounded-lg hover:scale-105 hover:shadow-lg transition-transform duration-300"
                    >
                        <div className="">Calculate BMI</div>
                    </button>
                </div>

            </div>
            {isSubmitted && (
                <div className="mt-4 p-4 bg-green-100 text-green-900 rounded-lg shadow-md text-center">
                    <p className="text-lg font-semibold">
                        Your BMI is <span className="text-black text-2xl">{bmi.toFixed(2)}</span>
                    </p>
                </div>
            )}
        </div>
    );
}

