
import { Geist, Geist_Mono, Anton, Bebas_Neue, Oswald, Bangers } from "next/font/google";
import type {Metadata} from "next";
import {AuthContextProvider} from "@/app/context/AuthContext";
import Navbar from "@/app/components/navbar";



const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

const anton = Anton({
    variable: "--font-anton",
    weight: "400", // Anton only has 400 weight
    subsets: ["latin"],
});

const bebasNeue = Bebas_Neue({
    variable: "--font-bebas-neue",
    weight: "400", // Bebas Neue only has 400
    subsets: ["latin"],
});

const oswald = Oswald({
    variable: "--font-oswald",
    weight: ["400", "700"], // Oswald supports multiple weights
    subsets: ["latin"],
});

const bangers = Bangers({
    variable: "--font-bangers",
    weight: "400", // Bangers only has 400
    subsets: ["latin"],
});


export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (

        <html lang="en">
        <body
            className={`${geistSans.variable} ${geistMono.variable}  ${anton.variable} 
                    ${bebasNeue.variable} 
                    ${oswald.variable} 
                    ${bangers.variable} antialiased min-h-screen  `}
        >
        <AuthContextProvider>
            <Navbar/>
            {children}
        </AuthContextProvider>
        </body>
        </html>
    );
}

