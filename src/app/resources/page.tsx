"use client";

import React, { useEffect, useState } from "react";
import Blog from "@/app/components/blog";
import "../globals.css";
import { Newspaper} from "lucide-react";
import axios from "axios";

interface Blog{
    _id:string;
    title:string;
    content:string;
    author:string;
    createdAt:string;
    likes:number;
}

export default function Page() {
    const [blogs,setBlogs]=useState<Blog[]>([]);
    useEffect(() => {
        const fetchBlogs=async ()=> {
            const request = await axios.get("/api/blogs");
            console.log(request.data.data);
            const data=request.data.data.map((blog:Blog)=>({
                ...blog,
                createdAt: new Date(blog.createdAt),
            }));
            setBlogs(data);
        }
        fetchBlogs();
    }, []);
    return (
        <div className="flex flex-col gap-6 p-6 items-center justify-center bg-white min-h-screen overflow-auto" style={{ backgroundImage: "url('bg1.svg')", backgroundSize: "cover", backgroundPosition: "center" }}  >
            <h1 className="text-6xl font-bold font-anton tracking-widest text-white mb-4">LATEST BLOGS</h1>
            <div className="flex flex-col md:flex-row gap-8 w-full max-w-6xl ">
                <div className="flex flex-col items-center justify-center ">
                    <div className="w-full max-w-2xl flex flex-col gap-6 text-2xl text-white">
                        {blogs.map((blog) => (
                            <Blog key={blog._id} _id={blog._id} title={blog.title} author={blog.author} likes={blog.likes} content={blog.content} createdAt={new Date(blog.createdAt)} />
                        ))}
                    </div>
                </div>
                <div className="flex flex-col w-full max-w-sm gap-6">
                    <div className="w-full max-w-md bg-white rounded-lg shadow-green-300 shadow-lg overflow-hidden">
                        <div className="bg-gradient-to-r from-green-700 via-emerald-400 to-green-500 text-white text-xl font-bold px-6 py-4 flex items-center gap-2">
                            <Newspaper className="w-6 h-6" /> Latest News
                        </div>
                        <div className="p-6 text-green-900 min-h-[200px] border-t border-green-300">
                            {/*{news.length > 0 ? (*/}
                            {/*    news.map((article, index) => (*/}
                            {/*        <div key={index} className="border-b border-green-200 pb-3 last:border-0">*/}
                            {/*            <h2 className="text-lg font-semibold">{article.title}</h2>*/}
                            {/*            <p className="text-sm">{article.description}</p>*/}
                            {/*        </div>*/}
                            {/*    ))*/}
                            {/*) : (*/}
                            {/*    <p>Loading news...</p>*/}
                            {/*)}*/}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
