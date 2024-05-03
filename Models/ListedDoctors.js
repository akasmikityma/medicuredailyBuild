import mongoose, { MongooseError } from 'mongoose';

const listedDocsSChema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    doctorID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Doctor',
        required:true
    },
    nhId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'nurshome',
        required:true
    },
    time:{
        type:String,
        required:true
    }
})

export const listeDModel=new mongoose.model('listeddoc',listedDocsSChema);