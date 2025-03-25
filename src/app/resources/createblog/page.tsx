"use client";
import {Card, CardContent, CardHeader} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {useRouter} from "next/navigation";
import {useEffect, useState} from "react";
import axios from "axios";
import {UserAuth} from "@/app/context/AuthContext";

const Page = () => {
    const {user}=UserAuth();
    const router=useRouter();
    const [title,setTitle]=useState<string>("");
    const [description,setDescription]=useState<string>("");
    const [date,setDate]=useState<string>("");
    useEffect(() => {
        setDate(new Date().toLocaleDateString());
    }, []);
    async function postBlog(){
        const result=await axios.post("/api/blogs",{
            title:title,
            description:description,
            date:date,
            user:user?.displayName
        })
        console.log(result);
        router.push("/resources")
    }
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1>Create Your Blog</h1>
            <Card className="flex flex-col space-y-4 min-w-[90vw] min-h-[90vh] bg-grey-500 border-green-900 border-8 rounded-lg shadow-lg">
                <CardHeader className="bg-gray-400 text-xl font-bold">SHARE YOUR ADVICE WITH THE WORLD</CardHeader>
                <CardContent className="flex flex-col space-y-4">
                    <div className="flex flex-row space-x-8 justify-between">
                        <label className="text-white justify-start ">Title: <input type="text" onChange={(e)=>setTitle(e.target.value)} className="border-green-500 text-black border-4 rounded-lg"/></label>
                        <label className="font-bold text-lg text-green-700">Created At: date</label>
                    </div>
                        <label className="text-white flex flex-col">
                            Description:
                            <textarea value={description} onChange={(e) => setDescription(e.target.value)}
                                      className="border-green-500 text-black h-[50vh] border-4 rounded-lg"/>
                        </label>
                    <div className="flex flex-row justify-between">
                        <div className="flex flex-row space-x-4">
                            <Button className="bg-red-600 text-white font-bold" onClick={()=>{router.push("/resources")}} >
                                Discard
                            </Button>
                            <Button onClick={postBlog} className="bg-green-600 text-white font-bold">
                                Post Blog
                            </Button>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
export default Page;