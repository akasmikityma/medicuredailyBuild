import mongoose from "mongoose";

const nhschema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    doctors:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Doctor'
        }
    ]
})

export const nhModel=new mongoose.model('nurshome',nhschema);