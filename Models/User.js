import mongoose from "mongoose";

const userSChema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:String,
        required:true
    },
})

export const userModel=new mongoose.model('user',userSChema);