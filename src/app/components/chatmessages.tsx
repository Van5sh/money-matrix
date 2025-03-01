import React from "react";

interface ChatMessageProps {
    sender: string;
    message: string;
    isOwnMessage: boolean;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ sender, message, isOwnMessage }) => {
    const isSystemMessage = sender === "System";

    return (
        <div className={`flex ${isSystemMessage ? "justify-center" : isOwnMessage ? "justify-end" : "justify-start"} gap-2`}>
            {!isSystemMessage && <p className="text-sm font-bold">{sender}</p>}
            <div className={`max-w-xs px-4 py-2 rounded-lg ${
                isSystemMessage
                    ? "bg-gray-800 text-white text-center text-xs"
                    : isOwnMessage
                        ? "bg-blue-500 text-white"
                        : "bg-white text-gray-800"
            }`}>
                <p>{message}</p>
            </div>
        </div>
    );
};

export default ChatMessage;
