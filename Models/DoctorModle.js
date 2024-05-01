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