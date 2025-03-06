"use client";

import React, { useEffect, useState } from "react";
import send from "../../../public/send.svg";
import Image from "next/image";
import { io } from "socket.io-client";
import { UserAuth } from "@/app/context/AuthContext";

const socket = io("http://localhost:3001");

interface Message {
    text: string;
    sender: string;
}

export default function Page() {
    const { user } = UserAuth();
    const [messages, setMessages] = useState<Message[]>([]);
    const [inputMessage, setInputMessage] = useState<string>("");

    useEffect(() => {
        socket.emit("client ready", "Hello, World!");

        socket.on("message", (message: Message) => {
            setMessages((prev) => [...prev, message]);
        });

        return () => {
            socket.off("message");
        };
    }, []);

    const sendMessage = () => {
        if (inputMessage.trim() === "") return;

        const newMessage: Message = {
            text: inputMessage,
            sender: user?.displayName || "Me",
        };

        setMessages([...messages, newMessage]);
        setInputMessage("");

        socket.emit("send_message", newMessage);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen w-full p-5">
            <div className="max-w-md w-full bg-white p-5 rounded-lg shadow-md h-96 overflow-y-auto">
                {messages.map((msg, index) => (
                    <div key={index} className={`flex flex-col mb-2 ${msg.sender === (user?.displayName || "Me") ? "items-end" : "items-start"}`}>
                        <span className="text-sm text-gray-600">{msg.sender}</span>
                        <div className={`p-3 rounded-lg max-w-xs break-words ${msg.sender === (user?.displayName || "Me") ? "bg-green-800 text-white self-end" : "bg-gray-300 text-black self-start"}`}>
                            {msg.text}
                        </div>
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
                    <button
                        className="py-2 px-3 bg-green-800 text-white font-bold rounded-r-md text-xl md:w-1/12 md:text-2xl"
                        onClick={sendMessage}
                    >
                        <Image src={send} className="w-6 md:w-12 mx-auto" alt="send" height={20} width={20} />
                    </button>
                </div>
            </div>
        </div>
    );
}
