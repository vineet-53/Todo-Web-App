const mongoose = require('mongoose')



const userSchema = mongoose.Schema( { 
    firstName  : { 
        type : String , 
        required : true , 
        trim : true, 

    }, 
    lastName : { 
        type : String,  
        required : true, 
        trim :true, 

    }, 
    email : { 
        type : String , 
        required :true, 
        trim : true,
    }, 
    password : { 
        type : String , 
        required : true, 
        trim : true,
    }, 
    token : {
        type : String ,
        
    }, 
    active : { 
        type : Boolean, 
    }
})

module.exports = mongoose.model("User" , userSchema) ;