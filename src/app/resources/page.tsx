"use client";

import React, { useEffect, useState } from "react";
import Blog from "@/app/components/blog";
import "../globals.css";
import { Newspaper } from "lucide-react";
import axios from "axios";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Blog {
    _id: string;
    title: string;
    content: string;
    author: string;
    createdAt: string;
    likes: number;
}

export default function Page() {
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [open, setOpen] = useState<boolean>(false);
    const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);

    useEffect(() => {
        const fetchBlogs = async () => {
            const request = await axios.get("/api/blogs");
            console.log(request.data.data);
            const data = request.data.data.map((blog: Blog) => ({
                ...blog,
                createdAt: new Date(blog.createdAt),
            }));
            setBlogs(data);
        };
        fetchBlogs();
    }, []);

    return (
        <div className="flex flex-col gap-6 p-6 items-center justify-center bg-white min-h-screen overflow-auto"
             style={{ backgroundImage: "url('bg1.svg')", backgroundSize: "cover", backgroundPosition: "center" }}>
            <h1 className="text-6xl font-bold font-anton tracking-widest text-white mb-4">LATEST BLOGS</h1>

            <div className="flex flex-col md:flex-row gap-8 w-full max-w-6xl">
                <div className="flex flex-col items-center justify-center">
                    <div className="w-full max-w-2xl flex flex-col gap-6 text-2xl text-white">
                        {blogs.map((blog) => (
                            <Blog
                                key={blog._id}
                                _id={blog._id}
                                title={blog.title}
                                author={blog.author}
                                likes={blog.likes}
                                content={blog.content}
                                createdAt={new Date(blog.createdAt)} open={open}
                                onOpen={()=>{
                                    setSelectedBlog(blog);
                                    setOpen(true);
                                }}
                            />
                        ))}
                    </div>
                </div>

                <div className="flex flex-col w-full max-w-sm gap-6">
                    <div className="w-full max-w-md bg-white rounded-lg shadow-green-300 shadow-lg overflow-hidden">
                        <div className="bg-gradient-to-r from-green-700 via-emerald-400 to-green-500 text-white text-xl font-bold px-6 py-4 flex items-center gap-2">
                            <Newspaper className="w-6 h-6" /> Latest News
                        </div>
                        <div className="p-6 text-green-900 min-h-[200px] border-t border-green-300">
                        </div>
                    </div>
                </div>
                {open && selectedBlog && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                        <div className="relative justify-center mt-20 p-7 rounded-lg shadow-lg w-full max-w-md bg-white">
                            <button
                                onClick={() => setOpen(false)}
                                className="absolute top-3 right-3 text-gray-900 hover:text-gray-600 text-xl font-bold"
                            >
                                X
                            </button>
                            <Card className="w-full">
                                <CardHeader className="text-xl font-bold text-gray-900">
                                    EDIT BLOG
                                </CardHeader>
                                <CardContent className="flex flex-col gap-4">
                                    <input
                                        type="text"
                                        value={selectedBlog.title}
                                        onChange={(e) => setSelectedBlog({ ...selectedBlog, title: e.target.value })}
                                        className="border border-gray-300 rounded-md p-2 w-full focus:ring-2 focus:ring-green-500 focus:outline-none"
                                    />
                                    <textarea
                                        value={selectedBlog.content}
                                        onChange={(e) => setSelectedBlog({ ...selectedBlog, content: e.target.value })}
                                        className="border border-gray-300 rounded-md p-2 w-full h-32 resize-none focus:ring-2 focus:ring-green-500 focus:outline-none"
                                    />
                                    <div className="flex justify-end gap-4">
                                        <Button
                                            onClick={() => setOpen(false)}
                                            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                                        >
                                            Cancel
                                        </Button>
                                        <Button
                                            className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
                                            onClick={() => {
                                                setOpen(false);
                                            }}
                                        >
                                            Save Changes
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
