require('dotenv').config()
const jwt = require('jsonwebtoken')

exports.authentication = async(req ,res , next) => { 
    try { 
        const token = req.cookies.token  || req.headers.authorization.split(" ")[1]; 
        const user = jwt.decode(token , process.env.JWT_SECRET)
        // save to request to the user 
        req.user = user;
        next()
    }catch(err){  
        return res.status(401).json({ 
            sucess : false, 
            message : "User Unauthorized", 
        })
    }
}


