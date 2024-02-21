const mongoose = require('mongoose')


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
        default  : Date.now(); 
    }
})


module.exports = mongoose.model("Otp" , otpSchema) ;