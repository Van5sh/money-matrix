"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import { UserAuth } from "@/app/context/AuthContext";

const Page = () => {
    const { user } = UserAuth();
    const router = useRouter();
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [date, setDate] = useState<string>("");

    useEffect(() => {
        setDate(new Date().toLocaleDateString());
    }, []);

    async function postBlog() {
        const result = await axios.post("/api/blogs", {
            title: title,
            content: description,
            createdAt: date,
            author: user?.displayName,
            likes: 0,
        });
        console.log(result);
        router.push("/resources");
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-green-800 via-gray-900 to-green-500 p-8">
            <h1 className="text-5xl font-extrabold text-white mb-8 tracking-wide drop-shadow-lg animate-pulse">Create Your Blog</h1>
            <Card className="flex flex-col space-y-6 w-full max-w-3xl bg-opacity-95 bg-green-950 border border-green-400 backdrop-blur-xl shadow-2xl rounded-3xl p-8 transform transition-all hover:scale-105 hover:shadow-3xl">
                <CardHeader className="text-center text-green-300 text-3xl font-bold uppercase tracking-widest drop-shadow-lg animate-fade-in">Unleash Your Creativity</CardHeader>
                <CardContent className="flex flex-col space-y-6">
                    <div className="flex flex-col space-y-4">
                        <label className="text-green-300 text-lg font-semibold">Title:</label>
                        <input 
                            type="text" 
                            onChange={(e) => setTitle(e.target.value)} 
                            className="w-full p-4 bg-gray-800 text-green-300 rounded-lg border border-green-400 focus:ring-2 focus:ring-green-300 placeholder-green-500 text-lg shadow-inner hover:shadow-lg"
                            placeholder="Enter a captivating title..." 
                        />
                    </div>
                    <label className="text-green-300 text-lg font-semibold">Description:</label>
                    <textarea 
                        value={description} 
                        onChange={(e) => setDescription(e.target.value)}
                        className="w-full p-4 bg-gray-800 text-green-300 rounded-lg border border-green-400 focus:ring-2 focus:ring-green-300 h-56 placeholder-green-500 text-lg shadow-inner hover:shadow-lg"
                        placeholder="Express your thoughts with passion..."
                    />
                    <p className="text-green-200 text-md italic text-right">📅 Created At: {date}</p>
                    <div className="flex justify-between mt-4">
                        <Button className="bg-red-700 hover:bg-red-900 text-white px-8 py-3 rounded-xl text-lg font-semibold transition-all shadow-lg hover:shadow-xl"> 
                            Discard
                        </Button>
                        <Button onClick={postBlog} className="bg-green-500 hover:bg-green-700 text-white px-8 py-3 rounded-xl text-lg font-semibold transition-all shadow-lg hover:shadow-xl">
                            Post Blog
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
export default Page;
