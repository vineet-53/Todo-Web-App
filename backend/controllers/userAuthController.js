const User = require('../models/User')
const utils = require('../utils/index')
const jwt = require('jsonwebtoken')
exports.createUserSession = async( req ,res )=> { 
    try {   
        const {email} =req.body; 
        if(!email) { 
            throw new Error("Email Not Found "); 
        }
        // find the user 
        const user = await User.findOne({email});
        // make token payload
        const tokenPayload ={ 
            userId : user._id, 
            email  : user.email , 
        }
        const token = jwt.sign(tokenPayload , process.env.JWT_SECRET )
        // save token to headers or cookies
        if(res.cookies.sessionToken) { 
            throw new Error("Session Token Already Existed");
        }
        req.headers.authorization = `Bearer ${token}`
        res.cookie('sessionToken', token , { maxAge: 900000, httpOnly: true });
        // udpate the user active session
        const updatedUserActive = await User.findOneAndUpdate({email} ,  {
            $set : { 
                active : true, 
                token  :token,
            }
        }, {new : true})
        return res.status(200).json({ 
            success : true, 
            message : "User Session Created Successfully", 
            user : updatedUserActive,
        })
    }catch(err) { 
        return res.status(500).json({ 
            success : false, 
            message : "Error Creating User Session"
        })
    }
}
exports.login = async( req ,res) => { 
    try { 
        const {email , password } = req.body; 
        if(!email || !password) { 
            throw new Error("Please Provide All Details");
        }
        //  verify user
        const isUserVerified = await User.findOne({email})
        if(!isUserVerified){  
            throw new Error("User not Exist");
        }
        // verfiy user password 
        await utils.compare(password,isUserVerified.password); 

        // create a session for user
        next()
    }catch(err) { 
        return res.status(400).json({ 
            success  : false, 
            message : err.message
        })
    }
}

exports.logout = async( req ,res) => { 
    try { 
        next()
    }catch(err) { 
        return res.status(400).json({ 
            success  : false, 
            message : err.message
        })
    }
}

exports.destroyUserSession = async(req, res)=> { 
    try { 
        const {userId} = req.user; 
        // find user and udpate active status 
        const user  = await User.findOneAndUpdate({_id : userId} , 
            { 
                $set : { 
                    active : false, 
                }, 
                $unset : { 
                    token : 1,
                }
            }, {new : true}); 
        res.status(200).json({ 
            success : true, 
            message : "Destroyed User Session", 
            user : user,
        })
    }catch(err) { 
        return res.status(400).json({ 
            success : false, 
            message : "User Session Destoryed Success", 

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
        const hashPassword = await utils.encrypt(password , 10); 
        // create user account 
        const newUser = await User.create({ 
            firstName,  
            lastName, 
            email , 
            password  :hashPassword
        })
        console.log("NEW USER CREATED"); 
        return res.status(200).json({  
            success : true , 
            message  : "User Signup Successfully ",
            user : newUser,
        })
    }catch(err) { 
        return res.status(400).json({ 
            success  : false, 
            message : err.message
        })
    }
}