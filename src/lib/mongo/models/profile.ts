import mongoose, { Schema, Document } from "mongoose";

export interface IProfile extends Document {
    name: string;
    email: string;
    phone: string;
    age: number;
    married: boolean;
    address: string;
}

const ProfileSchema = new Schema<IProfile>({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    age: { type: Number, required: true },
    married: { type: Boolean, required: true },
    address: { type: String, required: true }
});

const ProfileModel = mongoose.model<IProfile>("Profile", ProfileSchema);

export default ProfileModel;
