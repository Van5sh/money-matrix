"use client";

import { useEffect, useState } from "react";
import { UserAuth } from "@/app/context/AuthContext";
import { Button } from "@/components/ui/button";
import axios from "axios";
import {urlencoded} from "express";

// interface EditFormProps {
//     submit: () => void;
// }

const EditForm = () => {
    const { user } = UserAuth();
    const [job, setJob] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [age, setAge] = useState<number | null>(null);
    const [weight, setWeight] = useState<number | null>(null);
    const [height, setHeight] = useState<number | null>(null);
    const [address, setAddress] = useState("");
    const [income, setIncome] = useState<number | null>(null);

    useEffect(() => {
        if (user?.email) {
            setEmail(user.email);
        }
    }, [user]);
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!user?.displayName) return;
        const response= await axios.put(`/api/profile?name=${encodeURIComponent(user.displayName)}`,{
            occupation:job,
            phone,
            age,
            weight,
            height,
            address,
            income,
        })
        console.log(response);
        alert("Form submitted successfully!");
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-900 p-6">
            <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-4 p-10 bg-white rounded-xl shadow-lg w-full max-w-md"
            >
                <h1 className="text-3xl font-extrabold text-green-700 mb-8 tracking-wide drop-shadow-lg animate-pulse">
                    Edit Your Profile
                </h1>
                <label className="text-green-900 font-bold">
                    OCCUPATION:
                    <input
                        type="text"
                        value={job}
                        onChange={(e) => setJob(e.target.value)}
                        className="text-black font-serif font-normal border p-2 rounded w-full"
                    />
                </label>

                <label className="text-green-900 font-bold">
                    E-MAIL:
                    <input
                        type="email"
                        value={email}
                        className="border p-2 rounded w-full bg-gray-200"
                        readOnly
                    />
                </label>

                <label className="text-green-900 font-bold">
                    PHONE NO.:
                    <input
                        type="text"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+919999999999"
                        className="text-black font-serif font-normal border p-2 rounded w-full"
                    />
                </label>

                <label className="text-green-900 font-bold">
                    AGE (years):
                    <input
                        type="number"
                        value={age ?? ""}
                        onChange={(e) => setAge(e.target.value ? Number(e.target.value) : null)}
                        placeholder="10"
                        className="text-black font-serif font-normal border p-2 rounded w-full"
                    />
                </label>

                <label className="text-green-900 font-bold">
                    WEIGHT (kg):
                    <input
                        type="number"
                        value={weight ?? ""}
                        onChange={(e) => setWeight(e.target.value ? Number(e.target.value) : null)}
                        placeholder="60 kg"
                        className="text-black font-serif font-normal border p-2 rounded w-full"
                    />
                </label>

                <label className="text-green-900 font-bold">
                    HEIGHT (m):
                    <input
                        type="number"
                        value={height ?? ""}
                        onChange={(e) => setHeight(e.target.value ? Number(e.target.value) : null)}
                        placeholder="1.5m"
                        className="text-black font-serif font-normal border p-2 rounded w-full"
                    />
                </label>

                <label className="text-green-900 font-bold">
                    ADDRESS:
                    <input
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="A-86, Second Floor, New Delhi"
                        className="text-black font-serif font-normal border p-2 rounded w-full"
                    />
                </label>

                <label className="text-green-900 font-bold">
                    INCOME (annual):
                    <input
                        type="number"
                        value={income ?? ""}
                        onChange={(e) => setIncome(e.target.value ? Number(e.target.value) : null)}
                        placeholder="Rs 60000000"
                        className="border p-2 rounded w-full"
                    />
                </label>

                <Button
                    type="submit"
                    onClick={handleSubmit}
                    className="bg-green-900 text-white font-bold p-3 rounded-lg hover:bg-green-700 transition"
                >
                    Submit
                </Button>
            </form>
        </div>
    );
};

export default EditForm;
