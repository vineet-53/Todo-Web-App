const User = require('../models/User')

exports.login = async( req ,res) => { 
    try { 
        return res.status(200).json({  
            success : true , 
            message  : "User Login Successfully "
        })
    }catch(err) { 
        return res.status(400).json({ 
            success  : false, 
            message : err.message
        })
    }
}

exports.logout = async( req ,res) => { 
    try { 
        return res.status(200).json({  
            success : true , 
            message  : "User Logout Successfully "
        })
    }catch(err) { 
        return res.status(400).json({ 
            success  : false, 
            message : err.message
        })
    }
}

exports.singup = async( req ,res) => { 

    try { 
        // get the data
        const  {firstName ,lastName , email , password ,confirmPassword} = req.body; 
        if(!firstName || !lastName || !email || !password || !confirmPassword) { 
            throw new Error("Please Enter All Details"); 
        }
        if(password != confirmPassword)  { 
            throw new Error("Password not matched"); 
        }
        // find the user with user email 
        const isUserExisted = await User.findOne({email})
        if(isUserExisted) { 
            throw new Error("User Already Existed"); 
        }
        // hash the user password 
            
        // create user account 
        const newUser = await User.create({ 
            firstName,  
            lastName, 
            email , 

        })
        return res.status(200).json({  
            success : true , 
            message  : "User Signup Successfully "
        })
    }catch(err) { 
        return res.status(400).json({ 
            success  : false, 
            message : err.message
        })
    }
}