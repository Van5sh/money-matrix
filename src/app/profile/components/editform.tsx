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
    const [age, setAge] = useState<number>(0);
    const [weight, setWeight] = useState<number>(0);
    const [height, setHeight] = useState<number>(0);
    const [address, setAddress] = useState<string>("");
    const [income, setIncome] = useState<string>("");

    useEffect(() => {
        setAge(parseInt(sessionStorage.getItem("age") || "0", 10));
        setWeight(parseInt(sessionStorage.getItem("weight") || "0", 10));
        setHeight(parseInt(sessionStorage.getItem("height") || "0", 10));
        setAddress(sessionStorage.getItem("address") || "");
        setIncome(sessionStorage.getItem("income") || "");
    }, []);

    const saveProfile = () => {
        if (!phone || age <= 0 || weight <= 0 || height <= 0 || !address || !income) {
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
            <div className="relative h-full min-w-[89vh] flex flex-col gap-4 bg-white rounded-xl shadow-lg w-96">
                <h2 className="text-lg font-bold justify-center items-center bg-green-800 text-white rounded-t-lg p-4">Edit Profile</h2>
                <form className="flex flex-col gap-4 overflow-y-auto p-6">
                    <label>NAME: <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} className="border p-2 rounded w-full"  /></label>
                    <label>E-MAIL: <input type="email" onChange={(e)=>{setName(e.target.value)}} value={email} className="border p-2 rounded w-full"  /></label>
                    <label>PHONE NO.: <input type="text" value={phone} className="border p-2 rounded w-full" onChange={(e)=> setPhone(e.target.value)} /></label>
                    <label>AGE: <input type="number" value={age} onChange={(e)=> setAge(e.target.valueAsNumber || 0)} className="border p-2 rounded w-full" /></label>
                    <label>WEIGHT: <input type="number" value={weight} onChange={(e)=> setWeight(e.target.valueAsNumber || 0)} className="border p-2 rounded w-full" /></label>
                    <label>HEIGHT: <input type="number" value={height} onChange={(e)=> setHeight(e.target.valueAsNumber || 0)} className="border p-2 rounded w-full" /></label>
                    <label>ADDRESS: <input type="text" value={address} onChange={(e)=> setAddress(e.target.value)} className="border p-2 rounded w-full" /></label>
                    <label>INCOME(annual): <input type="text" value={income} onChange={(e)=> setIncome(e.target.value)} className="border p-2 rounded w-full" /></label>
                </form>
                <button onClick={saveProfile} className="m-4 p-2 bg-green-500 text-white rounded font-bold">SAVE YOUR PROFILE</button>
            </div>
        </div>
    );
};

export default Editform;
