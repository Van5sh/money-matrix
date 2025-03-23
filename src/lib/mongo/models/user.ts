// import mongoose, { Schema, Document } from "mongoose";
//
// export interface User extends Document {
//     id: string;
//     name: string;
//     email: string;
// }
//
// const UserSchema = new Schema<User>({
//     id: {
//         type: String,
//         required: true,
//     },
//     name: {
//         type: String,
//         required: true,
//     },
//     email: {
//         type: String,
//         required: true,
//     }
// });
//
// export default mongoose.models.User || mongoose.model<User>("user", UserSchema);

import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
    name: string;
    email: string;
}

const UserSchema = new Schema<IUser>({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
});

export default mongoose.models.User || mongoose.model<IUser>("User", UserSchema);
