"use client";

import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="relative min-h-screen flex justify-center items-center">
            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 z-[-10] w-full h-full object-cover"
            >
                <source src="/use.mp4" type="video/mp4" />
            </video>
            <div className="flex justify-center items-center ">{children}</div>
        </div>
    );
}
