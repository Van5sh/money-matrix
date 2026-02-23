"use client"
import "./globals.css"
import Page from "@/app/landingpage/page";
import { useRouter } from "next/navigation";
import { UserAuth } from "@/app/context/AuthContext";
import { useEffect } from "react";
// import Loading from "C:/Users/Aditya/Desktop/newload.json"
import { useState } from "react";


export default function Home() {
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => { setLoading(false) }, 5000);
  }, []);
  const { user } = UserAuth();
  const router = useRouter();
  useEffect(() => {
    if (user) {
      router.push("/main");
    }
  }, [user, router]);

  return <Page />;
}
