"use client"; // Ensure this file runs on the client side
import {ThumbsUp} from 'lucide-react';
import React from 'react';
import {UserAuth} from "@/app/context/AuthContext";

interface BlogProps {
    title: string;
    content: string;
    author: string;
    createdAt: Date;
    // likes: number;
    // onLike: () => void;
}

const Blog: React.FC<BlogProps> = ({title, author, content, createdAt}) => {
    const [liked, setLiked] = React.useState(false);
    const {user}=UserAuth();
    const handleLike = () => {
        console.log("Liked");
        setLiked(!liked);
    }
    return (
        <div className=" flex shadow-green-300 shadow-lg flex-col border-l-8 w-full h-[40vh] bg-transparent max-w-2xl border-4 border-l-green-700 border-b-green-700 border-t-green-500 border-r-green-500 rounded-lg">
            <div className="flex flex-row justify-between w-full p-4 bg-gradient-to-r from-green-700 via-emerald-400 to-green-500">
                <h1 className="text-3xl text-white capitalize font-bebas">{title}</h1>
                <span className="text-md text-white capitalize">{author}</span>
            </div>
            <p className="flex-1 w-full p-4 backdrop-blur-md overflow-hidden text-ellipsis font-mono ">
                {content}
            </p>
            <div className="flex flex-row m-1">
                <span className="text-md text-gray-600">{createdAt.toLocaleDateString()}</span>
                <div className="flex flex-row gap-4 backdrop-blur-md justify-end w-full p-2 ">
                    <button className={`text-sm text-gray-600transition-all ${
                        liked ? "text-green-600" : "text-gray-600"
                    }`} onClick={handleLike}><ThumbsUp/></button>
                    {
                        user?.displayName===author && (
                            <button className="text-sm text-gray-600transition-all text-red-600">Edit</button>
                        )
                    }
                </div>
            </div>
            
        </div>
    );
};

export default Blog;
