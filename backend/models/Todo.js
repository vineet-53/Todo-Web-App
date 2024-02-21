const mongoose = require('mongoose')


const todoSchema = mongoose.Schema({ 
    todo :  { 
        type : String , 
        required : true, 
    }, 
    category : { 
        type : String ,
        enum : ["School" , "Work" , "Personal"],
        required : true, 
    },
    date : { 
        type : String , 
        required : true, 
    },
    createdAt : { 
        type :Date , 
        default : Date.now(), 

    }
})
const todoModel = mongoose.model("Todo" , todoSchema); 
module.exports = todoModel