//////   doctors can be added to the doctors list or to the nursing_home's team by only the registered nursing_homes
        or the doctors .. 

        ..i cant let the change or update the doctor's list anyway >>


        <<<>>>------


        write the endpoints for the normal people .. that are the main customers ideally  >> 

        >>if i can make a collection named slot{
                userid:String,
                doctorID:String,
                time:8-9,
                nh_id:
        }
        
        inside the users collection there would be an array called slots:[{}]

        ultimately ..whenever the user is booking a slot it will go through clicking the doctor either inside a nh or in a list that is given for the user > so the doctor id is provided .. i need to handle the nh_id .... [THINK --1]

        and the user books a slot .. that means its not only get pushed to the slot collection but also put inthe slots key of the uesr itself .. that way i can handle both the user's slots and also can make it easier to fetch the slots for the nhs >>  [THINK --2]

        ==> so first login as a nursing_Home and then first create a doctor then list that doctor >> 

        ==> user logs in --> goes to book a slot --> choose from the listed docs 


        ++can i do listed:Yes /False


        >>>> middlewares >> 