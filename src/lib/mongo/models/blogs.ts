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
        type:String,
        default:Date.now,
    },
    author:{
        type:String,
    }
})

export default mongoose.models.Blog || mongoose.model("Blog",blogschema)