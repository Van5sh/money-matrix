"use client";

import { useEffect, useState } from "react";
import ChatMessage from "@/app/components/chatmessages";
import { io } from "socket.io-client";

const socket = io("http://localhost:3001");

export default function ChatPage({ params }: { params: { id: string } }) {
    const [messages, setMessages] = useState<{ id: string; text: string }[]>([]);
    const [input, setInput] = useState<string>("");
    const [id, setId] = useState<string | null>(null);

    useEffect(() => {
        socket.on("connect", () => {
            setId(socket.id!);
        });

        socket.on("receiveMessage", (msg: { id: string; text: string }) => {
            console.log("Received message:", msg);
            setMessages((prevMessages) => [...prevMessages, msg]);
        });

        return () => {
            socket.off("connect");
            socket.off("receiveMessage");
        };
    }, []);

    const onSubmit = () => {
        if (input.trim() !== "") {
            const newMessage = { id: id ?? "unknown", text: input };
            socket.emit("sendMessage", newMessage);
            setMessages((prevMessages) => [...prevMessages, newMessage]);
            setInput("");
        }
    };

    return (
        <div className="flex flex-col items-center min-h-screen bg-gray-100 p-4">
            <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-4 flex flex-col h-[70vh] overflow-y-auto">
                {messages.length > 0 ? (
                    messages.map((msg, index) => (
                        <ChatMessage
                            key={index}
                            sender={msg.id === id ? "You" : `User ${params.id}`}
                            message={msg.text}
                            isOwnMessage={msg.id === id}
                        />
                    ))
                ) : (
                    <p className="text-gray-400 text-center">No messages yet...</p>
                )}
            </div>
            <div className="flex w-full max-w-md mt-4 gap-2">
                <input
                    className="flex-1 border border-gray-300 rounded-full px-4 py-3 outline-none focus:border-blue-500"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type a message..."
                />
                <button
                    className="bg-blue-500 text-white px-6 py-3 rounded-full shadow-md hover:bg-blue-600"
                    onClick={onSubmit}
                >
                    Send
                </button>
            </div>
        </div>
    );
}
