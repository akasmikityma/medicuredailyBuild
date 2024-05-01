import mogoose from 'mongoose';
import { nhModel } from '../Models/NhModel.js';
import { DoctorModel } from '../Models/DoctorModle.js';
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
            const {name,age,spec,reli}=req.body;
            const newDoctor=await DoctorModel.create({
                name,age,spec,reli
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
      try{
        const {doctor_id}=req.body;

      const nhID=req.param.id;
      const result=await nhModel.updateOne({id:nhID},{$set:{doctors:[doctor_id]}});
      if(result){
        res.send({
            msg:"the doctor is listed in your list"
        })
      }else{
        res.send({
            msg:"there is some sort or error "
        })
      }
      }catch(err){
        console.log(err)
      }
    }
} 
//lets not add the functionality of listing the doctor in their doctor list while creating a doc profile>>

//puttingDocintheList+>> the system gets the id of the specific doctor from the req.body and then just an update 
//method gets run and the doctor_id is added to the doctors>>