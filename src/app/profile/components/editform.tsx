"use client";
import React, { useEffect, useState } from "react";
import { UserAuth } from "@/app/context/AuthContext";

interface EditformProps {
    formClose: () => void;
}

const Editform: React.FC<EditformProps> = ({ formClose }) => {
    const { user } = UserAuth();
    const [name, setName] = useState<string>(user?.displayName || "");
    const [email, setEmail] = useState<string>(user?.email || "");
    const [phone, setPhone] = useState<string>("");
    const [age, setAge] = useState<string>("");
    const [weight, setWeight] = useState<string>("");
    const [height, setHeight] = useState<string>("");
    const [address, setAddress] = useState<string>("");
    const [income, setIncome] = useState<string>("");

    useEffect(() => {
        setAge(sessionStorage.getItem("age") || "");
        setWeight(sessionStorage.getItem("weight") || "");
        setHeight(sessionStorage.getItem("height") || "");
        setAddress(sessionStorage.getItem("address") || "");
        setIncome(sessionStorage.getItem("income") || "");
    }, []);

    const saveProfile = () => {
        if (!phone || parseInt(age) <= 0 || parseInt(weight) <= 0 || parseInt(height) <= 0 || !address || !income) {
            alert("Please fill all the fields");
            return;
        }
        sessionStorage.setItem("phone", phone);
        sessionStorage.setItem("age", age.toString());
        sessionStorage.setItem("weight", weight.toString());
        sessionStorage.setItem("height", height.toString());
        sessionStorage.setItem("address", address);
        sessionStorage.setItem("income", income);
        console.log("Profile saved");
        formClose();
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="h-[80vh] w-[90vw] max-w-md flex flex-col bg-gray-500 mt-20 rounded-xl shadow-lg">
                    <form className="flex  flex-col gap-4 p-10 overflow-x-auto mt-8 rounded-xl">
                        <label className="text-green-900 font-bold">NAME: <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="text-black font-serif font-normal border p-2 rounded w-full" /></label>
                        <label className="text-green-900 font-bold">E-MAIL: <input type="email" readOnly value={email} className="border p-2 rounded w-full bg-gray-200" /></label>
                        <label className="text-green-900 font-bold">PHONE NO.: <input type="text" value={phone} placeholder="+919999999999" onChange={(e) => setPhone(e.target.value)} className="text-black font-serif font-normal border p-2 rounded w-full" /></label>
                        <label className="text-green-900 font-bold">AGE (years): <input type="text" value={age} placeholder="10" onChange={(e) => setAge(e.target.value)} className="text-black font-serif font-normal border p-2 rounded w-full" /></label>
                        <label className="text-green-900 font-bold">WEIGHT (kg): <input type="text" value={weight} placeholder="60 kgs" onChange={(e) => setWeight(e.target.value)} className="text-black font-serif font-normal border p-2 rounded w-full" /></label>
                        <label className="text-green-900 font-bold">HEIGHT (m): <input type="text" value={height} placeholder="1.5m" onChange={(e) => setHeight(e.target.value)} className="text-black font-serif font-normal border p-2 rounded w-full" /></label>
                        <label className="text-green-900 font-bold">ADDRESS: <input type="text" value={address} placeholder="A-86,Second Floor, New Delhi" onChange={(e) => setAddress(e.target.value)} className="text-black font-serif font-normal border p-2 rounded w-full" /></label>
                        <label className="text-green-900 font-bold">INCOME (annual): <input type="text" placeholder="Rs 60000000" value={income} onChange={(e) => setIncome(e.target.value)} className="border p-2 rounded w-full" /></label>
                    </form>

                <div className="flex justify-between p-4">
                    <button onClick={formClose} className="p-2 bg-black text-white rounded font-bold w-1/2 mr-2">Cancel</button>
                    <button onClick={saveProfile} className="p-2 bg-green-500 text-white rounded font-bold w-1/2">Save</button>
                </div>
            </div>
        </div>
    );
};

export default Editform;