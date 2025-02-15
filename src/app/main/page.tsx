"use client"

import {UserAuth} from "@/app/context/AuthContext";

export default function Page() {
    const {user} = UserAuth();
    return (
        <div>
            {user?.displayName}
        </div>
    );
}
