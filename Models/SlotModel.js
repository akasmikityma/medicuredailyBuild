import mongoose from "mongoose";

const slotSChema=new mongoose.Schema({
    patientID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    doctorID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Doctor'
    },
    time:{
        type:String,
        required:true
    },
    nh_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'nurshome'
    }
}) 

export const slotModel=new mongoose.model('slot',slotSChema);