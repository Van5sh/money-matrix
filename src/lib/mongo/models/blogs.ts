import mongoose from "mongoose";

const blogschema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    content:{
        type:String,
        required:true,
    },
    date:{
        type:Date,
        default:Date.now,
    },
    user:{
        type:String,
    }
})

export default mongoose.models.Blog || mongoose.model("Blog",blogschema)