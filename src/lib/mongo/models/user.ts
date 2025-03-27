import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    role: { type: String,enum:["financal advisor","user"]},
    phone:{type:String,required:true},
    age:{type:Number,required:true},
    income:{type:Number,required:true},
    address:{type:String,required:true},
    weight:{type:Number},
    height:{type:Number},
    occupation:{type:String},
    name: { type: String, required: true },
},{timestamps:true});

export default mongoose.models.User || mongoose.model("User", userSchema);
