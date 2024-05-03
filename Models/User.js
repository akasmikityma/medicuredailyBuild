import mongoose from "mongoose";

const userSChema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    slots:[
        {type:mongoose.Schema.Types.ObjectId,
        ref:'slot'}
    ]
})

export const userModel=new mongoose.model('user',userSChema);

