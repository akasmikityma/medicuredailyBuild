import mongoose from "mongoose";

const doctorschema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    nh_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'nurshome'
    },
    spec:{
        type:[],
        required:true
    },
    reliability:{
        type:Number,
        min:0,
        max:5
    }
})

export const DoctorModel=new mongoose.model('Doctor',doctorschema);