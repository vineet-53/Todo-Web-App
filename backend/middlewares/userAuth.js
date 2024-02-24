require('dotenv').config()
const jwt = require('jsonwebtoken')
const User = require("../models/User")
exports.authentication = async(req ,res , next) => { 
    try { 
        const token = req?.headers?.authorization?.split(" ")[1] || req?.cookies?.sessionToken; 
        if(!token) { 
            throw new Error("User is Not Authorized!")
        }
        const userPayload = jwt.decode(token , process.env.JWT_SECRET)
        req.user = userPayload; 
        next()
    }catch(err){  
        return res.status(401).json({ 
            success : false, 
            message : err.message
        })
        // res.redirect('/login')
    }
}


