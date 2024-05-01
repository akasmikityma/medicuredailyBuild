import mogoose from 'mongoose';
import { nhModel } from '../Models/NhModel.js';

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
} 