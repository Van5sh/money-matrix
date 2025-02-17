"use client"; // Ensure this file runs on the client side
import {ThumbsUp} from 'lucide-react';
import React from 'react';

interface BlogProps {
    title: string;
    content: string;
    user: string;
    createdAt: Date;
    likes: number;
    onLike: () => void;
}

const Blog: React.FC<BlogProps> = ({title, user, content, createdAt, likes,onLike}) => {
    const [liked, setLiked] = React.useState(false);
    const handleLike = () => {
        console.log("Liked");
        setLiked(!liked);
        likes++;
        console.log(likes);
        onLike();
    }
    return (
        <div className="flex flex-col border-l-8 w-full h-[40vh] bg-transparent max-w-2xl border-4 border-green-900 rounded-lg">
            <div className="flex flex-row justify-between w-full p-4 bg-green-900">
                <h1 className="text-2xl text-white capitalize">{title}</h1>
                <span className="text-md text-white capitalize">{user}</span>
            </div>
            <p className="flex-1 w-full p-4 overflow-hidden text-ellipsis">
                {content}
            </p>
            <div className="flex flex-row gap-4 justify-end w-full p-2">
                <button className={`text-sm text-gray-600transition-all ${
                    liked ? "text-green-600" : "text-gray-600"
                }`} onClick={handleLike}><ThumbsUp/></button>
                <span className="text-md text-gray-600">{createdAt.toLocaleDateString()}</span>
            </div>
        </div>
    );
};

export default Blog;
