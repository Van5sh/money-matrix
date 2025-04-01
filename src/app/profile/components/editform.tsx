"use client";

import { useEffect, useState } from "react";
import { UserAuth } from "@/app/context/AuthContext";
import { Button } from "@/components/ui/button";
import axios from "axios";

interface EditFormProps {
    onClose: () => void;
}

const EditForm: React.FC<EditFormProps> = ({ onClose }) => {
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

        try {
            const response = await axios.put(`/api/profile?name=${encodeURIComponent(user.displayName)}`, {
                occupation: job,
                phone,
                age,
                weight,
                height,
                address,
                income,
            });
            console.log(response);
            alert("Profile updated successfully!");
            onClose();
        } catch (error) {
            console.error("Error updating profile:", error);
            alert("Failed to update profile. Please try again.");
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-black/70 backdrop-blur-sm p-4">
            <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-5 p-6 bg-white rounded-xl shadow-lg w-full max-w-lg md:max-w-xl lg:max-w-2xl"
            >
                <h1 className="text-2xl md:text-3xl font-bold text-black mb-4 text-center">
                    Edit Your Profile
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col">
                        <label className="text-black font-medium">Occupation</label>
                        <input
                            type="text"
                            value={job}
                            onChange={(e) => setJob(e.target.value)}
                            className="border p-2 rounded w-full focus:outline-none focus:ring focus:border-black text-black"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-black font-medium">Email</label>
                        <input
                            type="email"
                            value={email}
                            className="border p-2 rounded w-full bg-gray-200 text-gray-600 cursor-not-allowed"
                            readOnly
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-black font-medium">Phone No.</label>
                        <input
                            type="text"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="+919999999999"
                            className="border p-2 rounded w-full focus:outline-none focus:ring focus:border-black text-black"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-black font-medium">Age (years)</label>
                        <input
                            type="number"
                            value={age ?? ""}
                            onChange={(e) => setAge(e.target.value ? Number(e.target.value) : null)}
                            placeholder="10"
                            className="border p-2 rounded w-full focus:outline-none focus:ring focus:border-black text-black"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-black font-medium">Weight (kg)</label>
                        <input
                            type="number"
                            value={weight ?? ""}
                            onChange={(e) => setWeight(e.target.value ? Number(e.target.value) : null)}
                            placeholder="60"
                            className="border p-2 rounded w-full focus:outline-none focus:ring focus:border-black text-black"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-black font-medium">Height (m)</label>
                        <input
                            type="number"
                            value={height ?? ""}
                            onChange={(e) => setHeight(e.target.value ? Number(e.target.value) : null)}
                            placeholder="1.5"
                            className="border p-2 rounded w-full focus:outline-none focus:ring focus:border-black text-black"
                        />
                    </div>
                </div>

                <div className="flex flex-col">
                    <label className="text-black font-medium">Address</label>
                    <input
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="A-86, Second Floor, New Delhi"
                        className="border p-2 rounded w-full focus:outline-none focus:ring focus:border-black text-black"
                    />
                </div>

                <div className="flex flex-col">
                    <label className="text-black font-medium">Income (annual)</label>
                    <input
                        type="number"
                        value={income ?? ""}
                        onChange={(e) => setIncome(e.target.value ? Number(e.target.value) : null)}
                        placeholder="6000000"
                        className="border p-2 rounded w-full focus:outline-none focus:ring focus:border-black text-black"
                    />
                </div>

                <div className="flex space-x-4 mt-4">
                    <Button
                        type="submit"
                        className="w-full bg-black text-white font-bold py-2 rounded-lg hover:bg-gray-800 transition"
                    >
                        Submit
                    </Button>
                    <Button
                        type="button"
                        onClick={onClose}
                        className="w-full bg-gray-700 text-white font-bold py-2 rounded-lg hover:bg-gray-800 transition"
                    >
                        Close
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default EditForm;