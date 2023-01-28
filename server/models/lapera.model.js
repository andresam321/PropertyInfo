const mongoose = require("mongoose")

const LaPera = new mongoose.Schema(
    {
        propertyApplyingFor:{
            type:String,
            enum:["34 La Pera Ct, Sacramento, CA 95823"],
            required:[true,"Property Must be Selected"]
        },
        firstName:{
            type:String,
            required:[true,"First Name required"]
        },
        lastName:{
            type:String,
            required:[true,"Last Name required"]
        },
        phoneNumber:{
            type:Number,
            required:[true,"Contact Number Required"],
            
           
        },
        email:{
            type:String,
            required:[true,"Email Required"],
            validate: {
                validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
                message: "Please enter a valid email"
              }
        },
        age:{
            type:String,
            enum:["18-25","26-35","36-49","50+"],
            required:[true,"Option Required"]
        },
        unitInterestedIn:{
            type:String,
            enum:["Unit Unavailable"],
            required:[true,"Option Required"]
        },
        howManyAdults:{
            type:String,
            enum:["1","2","3","4","5"],
            required:[true,"Option Required"]
        },
        howManyKids:{
            type:String,
            enum:["1","2","3","4","5"],
            required:[true,"Option Required"]
        },
        creditScoreRange:{
            type:String,
            enum:["100-199","200-299","300-399","400-499","500-599","600-699",
        "700+","Rather Not Answer"],
        required:[true,"Option Required"]
        },
        work:{
            type:String,
            enum:["Full Time", "Part Time", "Self Employed","Unemployed","Rather Not Answer"],
            required:[true,"Option Required"]
        },
        proofOfIncome:{
            type:String,
            enum:["Cash", "Check", "PayStubs", "Electronically","Rather Not Answer"],
            required:[true,"Option Required"]

        },
        evictionOnRecord:{
            type:String, 
            enum:["No","Yes","Rather Not Answer"],
            required:[true,"Option Required"]

        },
        timeOnPreviousResidence:{
            type:String,
            enum:["Less Then 1 Year", "Between 1 and 2 years","3 Years or more"],
            required:[true,"Option Required"]
        },
        reasonForMoving:{
            type:String,

        },
        typeOfPet:{
            type:String,
            enum:["Dog","Cat","Other","None"],
            required:[true,"Option Required"]
        },
        additionalInformation:{
            type:String,

        }

    }, {timestamps:true}
)
const laPera = mongoose.model("LaPera", LaPera)
module.exports = laPera