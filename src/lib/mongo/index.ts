import mongoose from "mongoose";


const connectDB = async () => {
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/money");
    }catch (error){
        console.error("DB Error:",error)
    }
}

export default connectDB;