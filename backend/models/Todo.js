const mongoose = require('mongoose')
const todoSchema = mongoose.Schema({ 
    user : { 
        type : mongoose.Schema.Types.ObjectId , 
        ref : "User"
    }, 
    todo :  { 
        type : String , 
        required : true, 
    }, 
    category : { 
        type : String ,
        required : true, 
    },
    date : { 
        type : String , 
        required : true, 
    },
    checked : { 
        type : Boolean,  
        default : false,
    },  
    createdAt : { 
        type :Date , 
        default : Date.now(), 
    }, 
    description : { 
        type : String,
    }
})
module.exports =  mongoose.model("Todo" , todoSchema); 