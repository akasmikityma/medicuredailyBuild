// import mogoose from 'mongoose';
import { nhModel } from '../Models/NhModel.js';
import { DoctorModel } from '../Models/DoctorModle.js';
import mongoose from 'mongoose';
export class allnhModelControllers{
    static signUp=async(req,res)=>{
            try{
                const { name, location, doctors } = req.body;

                if (!name || !location) {
                    res.status(400).send({ msg: "You have to fill the required fields." });
                    return; // Return to avoid executing the next part of the code
                }
        
                // Validate doctors array (optional, depending on your requirements)
                if (doctors && !Array.isArray(doctors)) {
                    res.status(400).send({ msg: "Doctors must be provided as an array." });
                    return;
                }
        
                // Assuming doctors array contains valid ObjectIDs
                const newNHS = await nhModel.create({ name, location, doctors });
                res.status(200).send({ msg: "Your nursing home account is created.", data: newNHS });
                
            }catch(err){
                console.log(err)
            }
    }
    static getall=async(req,res)=>{
         try{
            console.log("this is the getall")
            const alltheNursing_homes=await nhModel.find();
            if(alltheNursing_homes){
                res.send({
                    msg:"these are the nursing_homes",
                    nhs:alltheNursing_homes
                })
            }else{
                res.send({
                    msg:"there's some error "
                })
            }
         }catch(err){
            console.log(err)
         }
    }
    static addDoctor=async(req,res)=>{
        try{
            //i need to put 4 values there using the req.body;
            const nh_id=req.param.id;
            const {name,age,spec,reli}=req.body;
            const newDoctor=await DoctorModel.create({
                name,age,nh_id,spec,reli
            })
            if(newDoctor){
                res.send({
                    msg:"new doctor is created",
                    the_doctor:newDoctor
                })
            }else{
                res.send({
                    msg:"there is some error inthe creation"
                })
            } 
        }catch(err){
            console.log(err)
        }
    }
    static putDoctorINtheList=async(req,res)=>{
        try {
            let { doc_id, id } = req.query;
            id = id.trim(); // Remove leading and trailing whitespace, including newline characters
        
            const idExist = await nhModel.findOne({ _id: id });
            console.log(idExist);
        
            const result = await nhModel.updateOne({ _id: id }, { $addToSet: { doctors: doc_id } });
            console.log("MongoDB Update Result:", result);
            console.log("Modified Count:", result.modifiedCount);
        
            if (result && result.nModified > 0) {
                res.send({
                    msg: "The doctor is listed in your list"
                });
            } else if (idExist) {
                res.send({
                    msg: "The doctor is already in your list"
                });
            } else {
                res.status(400).send({
                    msg: "There was an error listing the doctor"
                });
            }
        } catch (err) {
            console.error(err);
            res.status(500).send({
                msg: "Internal server error"
            });
        }
        
        
    }
} 
//lets not add the functionality of listing the doctor in their doctor list while creating a doc profile>>

//puttingDocintheList+>> the system gets the id of the specific doctor from the req.body and then just an update 
//method gets run and the doctor_id is added to the doctors>>