import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
    id: string;
    name: string;
    email: string;
}

const UserSchema = new Schema<IUser>({
    id: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    }
});

export default mongoose.models.User || mongoose.model<IUser>("User", UserSchema);
