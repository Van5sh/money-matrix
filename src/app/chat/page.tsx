"use client";

import { useEffect, useState } from "react";
import send from "../../../public/send.svg"
import Image from "next/image";
import { io } from "socket.io-client";

const socket = io("http://localhost:3001");

export default function Page() {
    const [messages, setMessages] = useState<string[]>([]);
    const [inputMessage, setInputMessage] = useState<string>("");

    useEffect(() => {
        socket.emit("client ready", "Hello, World!");
        socket.on("message", (message: string) => {
            setMessages((prev) => [...prev, message]);
        });
        return () => {
            socket.off("message");
        };
    }, []);

    const sendMessage = () => {
        setMessages([...messages, inputMessage]);
        setInputMessage("");
        socket.emit("send_message", inputMessage);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen w-full p-5 bg-gray-100">
            <div className="max-w-md w-full bg-white p-5 rounded-lg shadow-md h-96 overflow-y-auto">
                {messages.map((msg, index) => (
                    <div key={index} className="bg-green-800 text-white p-3 rounded-lg mb-2">
                        {msg}
                    </div>
                ))}
            </div>
            <div className="max-w-md w-full mt-5">
                <div className="flex">
                    <input
                        type="text"
                        value={inputMessage}
                        onChange={(e) => setInputMessage(e.target.value)}
                        className="flex-1 border border-gray-300 rounded-l-lg p-2 text-black"
                        placeholder="Type your message here..."
                    />
                    <button className="w-full py-2 px-3 bg-sky-400 text-white font-fold rounded-md text-xl gradient md:w-1/12 md:text-2xl"
                            onClick={sendMessage}
                    >
                        <Image src={send} className="w-6 md:w-12 mx-auto" alt="send" height={20} width={20}/>
                    </button>
                </div>
            </div>
        </div>
    );
}