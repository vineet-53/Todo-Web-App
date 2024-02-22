const mongoose = require('mongoose')
require('dotenv').config({ 
    path : '../.env'
})
exports.connect =async ()=> { 
    try {   
        const DB_URL = process.env.DB_URL; 
        await mongoose.connect(DB_URL); 
    }catch(err){ 
        console.log(err.message)
    }
}