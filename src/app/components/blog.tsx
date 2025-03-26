"use client"; // Ensure this file runs on the client side
import {ThumbsUp} from 'lucide-react';
import React from 'react';
import {UserAuth} from "@/app/context/AuthContext";
import { FilePenLine } from 'lucide-react';
import {useState} from "react";
import {Card, CardContent, CardFooter, CardTitle} from "@/components/ui/card";
import axios from "axios";

interface BlogProps {
    _id: string;
    title: string;
    content: string;
    author: string;
    createdAt: Date;
    likes: number;
    // onLike: () => void;
}

const Blog: React.FC<BlogProps> = ({_id,title, author, content, createdAt,likes}) => {
    const [liked, setLiked] = React.useState(false);
    const {user}=UserAuth();
    const [likesCount, setLikesCount] = useState(likes);
    const handleLike = async () => {
        if (liked) return;

        setLiked(true);
        setLikesCount((prev) => prev + 1);

        try {
            await axios.put("/api/blogs", {
                _id,
                likes: likesCount + 1,
            });
        } catch (error) {
            console.error("Error updating likes:", error);
            setLiked(false);
        }
    }
    return (
        <Card className=" flex shadow-green-300 shadow-lg flex-col border-l-8 w-full h-[40vh] bg-blur backdrop-blur-3xl max-w-2xl border-4 border-l-green-700 border-b-green-700 border-t-green-500 border-r-green-500 rounded-lg">
            <CardTitle className="flex flex-row justify-between w-full p-4 bg-gradient-to-r from-green-700 via-emerald-400 to-green-500">
                <h1 className="text-3xl text-white capitalize font-bebas">{title}</h1>
                <span className="text-md text-white capitalize">{author}</span>
            </CardTitle>
            <CardContent className="flex-1 w-full p-4 backdrop-blur-md overflow-hidden text-ellipsis font-mono ">
                <p className="text-white">
                    {content}
                </p>
            </CardContent>
            <CardFooter className="flex flex-row justify-between p-4">
                <span className="text-md text-white">{createdAt.toLocaleDateString()}</span>
                <div className="flex flex-row space-x-4">
                    <span className="text-white">{likesCount}</span>
                    <button onClick={handleLike} className={`flex flex-row space-x-1 ${liked ? "text-green-700" : "text-white"}`}>
                        <ThumbsUp />
                    </button>
                    {user?.displayName === author && (
                        <button className="text-white">
                            <FilePenLine />
                        </button>
                    )}
                </div>
            </CardFooter>
        </Card>
    );
};

export default Blog;
