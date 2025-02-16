"use client";

import React, { useState } from "react";
import Blog from "@/app/components/blog";
import { UserAuth } from "@/app/context/AuthContext";

export default function Page() {
    const { user } = UserAuth();
    const currentUser = user?.displayName || "Guest";

    const initialBlogs = [
        { id: 1, title: "My First Blog", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Morbi vitae pharetra orci. Duis eget vehicula ipsum, at dapibus lorem.", createdAt: new Date(), user: currentUser, likes: 0 },
        { id: 2, title: "A Day in React Native", content: "Vestibulum vitae libero vitae sapien cursus accumsan. Sed vulputate lacus eu risus rhoncus, non ultrices justo condimentum.", createdAt: new Date(), user: currentUser, likes: 0 },
        { id: 3, title: "Understanding Next.js", content: "Curabitur faucibus tortor id nulla tristique, sed ornare mauris vehicula. Proin convallis dui ut ligula accumsan posuere.", createdAt: new Date(), user: currentUser, likes: 0 },
        { id: 4, title: "CSS Tips & Tricks", content: "Aliquam erat volutpat. Aenean sodales varius justo nec sollicitudin. Etiam vestibulum sapien sed felis interdum vulputate.", createdAt: new Date(), user: currentUser, likes: 0 }
    ];

    const [blogs, setBlogs] = useState(initialBlogs);

    const handleLike = (id: number) => {
        setBlogs((prevBlogs) =>
            prevBlogs.map((blog) =>
                blog.id === id ? { ...blog, likes: blog.likes + 1 } : blog
            )
        );
    };

    const topBlogs = [...blogs].sort((a, b) => b.likes - a.likes).slice(0, 3);

    return (
        <div className="flex flex-col gap-6 p-6 items-center justify-center min-h-screen bg-gray-50 overflow-auto ">
            <h1 className="text-4xl font-bold text-green-900 mb-4">Latest Blogs</h1>
            <div className="flex flex-col md:flex-row gap-8 w-full max-w-6xl">
                <div className="flex flex-col items-center justify-center flex-1">
                    <div className="w-full max-w-2xl flex flex-col gap-6">
                        {blogs.map((blog) => (
                            <Blog key={blog.id} {...blog} onLike={() => handleLike(blog.id)} />
                        ))}
                    </div>
                    {/*<button className="bg-green-900 text-white px-5 py-3 rounded-lg mt-6 hover:bg-green-800 transition">*/}
                    {/*    Load More*/}
                    {/*</button>*/}
                </div>
                <div className="bg-green-900 w-full max-w-sm p-6 rounded-lg self-start text-white shadow-lg">
                    <h1 className="text-xl font-bold mb-4 text-center">🔥 TOP BLOGS</h1>
                    <div className="space-y-4">
                        {topBlogs.map((blog) => (
                            <div key={blog.id} className="border-b border-white pb-3 last:border-0">
                                <h2 className="text-lg font-semibold">{blog.title}</h2>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
