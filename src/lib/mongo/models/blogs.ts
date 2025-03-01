import mongoose, { Schema, Document } from "mongoose";
import User, { IUser } from "./user";

export interface IBlog extends Document {
    title: string;
    description: string;
    user: IUser["_id"];
    likes: number;
}

const BlogSchema = new Schema<IBlog>({
    title: { type: String, required: true },
    description: { type: String, required: true },
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    likes: { type: Number, default: 0 },
});

const Blog = mongoose.model<IBlog>("Blog", BlogSchema, "blogs");

export default Blog;
