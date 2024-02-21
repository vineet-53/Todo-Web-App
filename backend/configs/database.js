const mongoose = require('mongoose')

exports.connect =async ()=> { 
    try {   
        const DB_URL = process.env.DB_URL; 
        await mongoose.connect(DB_URL); 
    }catch(err){ 
        console.log(err.message)
    }
}