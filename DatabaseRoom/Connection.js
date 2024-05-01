import mongoose from "mongoose";

export const connect=async(url)=>{
    try{
        const dbOptions={
            dbname:"medicure"
        }
        const result=await mongoose.connect(url,dbOptions);
        if(result){
            console.log("the db is also connected");
        }else{
            console.log("no worries chck for the betterment u anyway getting a job ")
        }
    }catch(err){
        console.log(err)
    }
}