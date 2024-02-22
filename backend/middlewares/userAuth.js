require('dotenv').config()
const jwt = require('jsonwebtoken')
const User = require("../models/User")
exports.authentication = async(req ,res , next) => { 
    try { 
        const token = req.cookies?.token  || req?.headers?.authorization.split(" ")[1]; 
        if(!token) { 
            throw new Error("User is Not Authorized!")
        }
        const userPayload = await jwt.decode(token , process.env.JWT_SECRET)
        // find the user with that user id 
        const user = await User.findById(userPayload.userId); 
        if(!user || user?.token !== token) { 
            throw new Error("User is Not Authorized!")
        }
        // save to request to the user 
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


