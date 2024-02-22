const mongoose = require('mongoose')
const mailSender = require('../utils/mailSender')
const templates = require('../templates/OTPtemplate')
const otpSchema = mongoose.Schema({ 
    otp : { 
        type : String , 
    }, 
    email : { 
        type : String,  
        required : true ,

    },
    createdAt : { 
        type : Date , 
        default  : Date.now()
    }
})
const sendOTP = async (email , otp) => { 
    try { 
        await mailSender.send("Todo App" , email , "OTP For Vineet Todo App" , templates.OTPTemplate(otp) )
    }catch(err)  { 
        throw new Error("Error Sending OTP...."); 

    }
}
otpSchema.pre("save" , function(next) { 
    // send otp to the user 
    sendOTP(this.email , this.otp)
    // run next
    next()
})
module.exports = mongoose.model("Otp" , otpSchema) ;