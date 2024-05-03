import { DoctorModel } from "../Models/DoctorModle.js";
import { slotModel } from "../Models/SlotModel.js";
import { userModel } from "../Models/User.js";
export class allUserControllers{
    static bookSlot=async(req,res)=>{
        try{
            const { userID, doctorID } = req.query;
            const doctor=await DoctorModel.findOne({_id:doctorID})
           if(doctor){
            const newSlot=await slotModel.create({
                patientID:userID,
                doctorID:doctorID,
                time:"6-7",
                nh_id:doctor.nh_id
            })
            const result = await userModel.updateOne({ _id:userID}, { $addToSet: { slots: newSlot } });
            if(result){
                res.send({
                    msg:"slot has been created and the slot has been added to the array ",
                    doctor:doctor,
                    slot:newSlot
                })
            }
           }else{
            res.send({
                msg:"there are some errors in fetching the doctor ..sorry"
            })
           }
        }catch(err){
            console.log(err);
        }
    }
    static signUP=async(req,res)=>{
        try{
            const {name,age}=req.body;
            console.log(`${name} and age ${age}`);
            const newUser=await userModel.create({
                name,age
            })
            res.send({
                msg:"you are a legit user now",
                user:newUser
            })
        }catch(err){
            console.log(err);
        }
    }
    static cancelSlot = async (req, res) => {
        try {
            const { userID, slotID } = req.params;
            console.log(`${userID} and ${slotID}`);
    
            // Remove the slot from the user's slots array
            const user = await userModel.findByIdAndUpdate(userID, { $pull: { slots: slotID } }, { new: true });
            console.log(user);
    
            // Delete the slot document from the slot collection
            const slotfound=await slotModel.findOne({_id:slotID});
            console.log(slotfound)
            const deletedSlot = await slotModel.findByIdAndDelete(slotID);
            console.log(deletedSlot);
    
            if (!user || !deletedSlot) {
                return res.status(404).send({
                    msg: "Slot cancellation failed. Please check the provided IDs."
                });
            } else {
                res.send({
                    msg: "Slot has been cancelled successfully."
                });
            }
        } catch (err) {
            console.error(err);
            res.status(500).send({
                msg: "Internal server error"
            });
        }
    };
    
    // static getAllslots=async(req,res)=>{
    //     try{

    //     }catch(err){
    //         console.log(err)
    //     }
    // }
    // static signIn=async(req,res)=>{
    //     try{

    //     }catch(err){
    //         console.log(err)
    //     }
    // }
    // static getDoctors=async(req,res)=>{
    //     try{

    //     }catch(err){
    //         console.log(err)
    //     }
    // }
}

