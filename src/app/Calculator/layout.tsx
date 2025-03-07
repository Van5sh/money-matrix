"use client";

import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-green-700 via-green-300 via-green-200 to-sky-300">
                {children}
        </div>
    );
}
