"use client"
import "./globals.css"
import Page from "@/app/landingpage/page";
import { useRouter } from "next/navigation";
import {UserAuth} from "@/app/context/AuthContext";
import {useEffect} from "react";

export default function Home() {
  const {user} = UserAuth();
  const router = useRouter();
  useEffect(() => {
    if (user) {
      router.push("/main");
    }
  }, [user, router]);

  return <Page />;
}
