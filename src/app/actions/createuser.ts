"use server";

import axios from "axios";
import { NextResponse } from "next/server";

interface User {
    id: string;
    name: string;
    email: string;
}

const createuser = async ({ id, name, email }: User) => {
    try {
        const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000"}/api/user`, {
            id,
            name,
            email,
        });

        return NextResponse.json(res.data, { status: 201 });
    } catch (err) {
        console.error("Error creating user:", err);
        throw new Error("Error creating user");
    }
};

export default createuser;
