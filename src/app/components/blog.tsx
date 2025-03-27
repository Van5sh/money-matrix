"use client"; // Ensure this file runs on the client side
import { ThumbsUp, FilePenLine } from "lucide-react";
import React, { useState } from "react";
import { UserAuth } from "@/app/context/AuthContext";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import axios from "axios";

interface BlogProps {
    _id: string;
    title: string;
    content: string;
    author: string;
    createdAt: Date;
    likes: number;
    open: boolean;
    onOpen: () => void;
}

const Blog: React.FC<BlogProps> = ({ _id, title, author, content, createdAt, likes, onOpen }) => {
    const { user } = UserAuth();
    const [liked, setLiked] = useState(false);
    const [likesCount, setLikesCount] = useState(likes);
    const [loading, setLoading] = useState(false); // Prevent multiple rapid clicks

    const handleLike = async () => {
        if (liked || loading) return; // Prevent spam clicks

        setLiked(true);
        setLikesCount((prev) => prev + 1);
        setLoading(true);

        try {
            await axios.put("/api/blogs/likes", { id: _id });
        } catch (error) {
            console.error("Error updating likes:", error);
            setLiked(false);
            setLikesCount((prev) => prev - 1);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Card className="flex shadow-green-300 shadow-lg flex-col border-l-8 w-full h-[40vh] bg-blur backdrop-blur-3xl max-w-2xl border-4 border-l-green-700 border-b-green-700 border-t-green-500 border-r-green-500 rounded-lg">
            <CardTitle className="flex flex-row justify-between w-full p-4 bg-gradient-to-r from-green-700 via-emerald-400 to-green-500">
                <h1 className="text-3xl text-white capitalize font-bebas">{title}</h1>
                <span className="text-md text-white capitalize">{author}</span>
            </CardTitle>
            <CardContent className="flex-1 w-full p-4 backdrop-blur-md overflow-hidden text-ellipsis font-mono">
                <p className="text-white">{content}</p>
            </CardContent>
            <CardFooter className="flex flex-row justify-between p-4">
                <span className="text-md text-white">{createdAt.toLocaleDateString()}</span>
                <div className="flex flex-row space-x-4">
                    <span className="text-white">{likesCount}</span>
                    <button
                        onClick={handleLike}
                        className={`flex flex-row space-x-1 ${liked ? "text-green-700" : "text-white"} ${loading ? "opacity-50" : ""}`}
                        disabled={loading} // Prevent multiple clicks
                    >
                        <ThumbsUp />
                    </button>
                    {user?.displayName === author && (
                        <button className="text-white" onClick={onOpen}>
                            <FilePenLine />
                        </button>
                    )}
                </div>
            </CardFooter>
        </Card>
    );
};

export default Blog;
