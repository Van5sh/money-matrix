import type { NextApiRequest, NextApiResponse } from "next";
import connectDB from "../../../lib";
import User from "../../../lib/mongo/models/user";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "GET") {
        try {
            await connectDB();

            const users = await User.find();

            res.status(200).json(users);
        } catch (error) {
            console.error("Error fetching users:", error);
            res.status(500).json({ message: "Something went wrong!", error: (error as Error).message });
        }
    } else {
        res.status(405).json({ message: "Method not allowed!" });
    }
}
