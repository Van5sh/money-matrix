import connectDB from "@/lib/index";
import User from "@/lib/mongo/models/user"
import {NextApiRequest, NextApiResponse} from "next";

export default async function(req:NextApiRequest, res:NextApiResponse) {
  await connectDB();
  // const {method}=req;
  switch(req.method){
    case 'GET':
      try {
        const users = await User.find({});
        res.status(200).json({success:true,data:users});
      }catch (error){
        res.status(400).json({success:false,data:error});
      }
      break;
    case 'POST':
        try {
            const user = await User.create(req.body);
            res.status(201).json({success:true,data:user});
        }catch (error){
            res.status(400).json({success:false,data:error});
        }
  }
}