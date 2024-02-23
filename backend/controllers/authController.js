const User = require('../models/User')
const utils = require('../utils/index')
const jwt = require('jsonwebtoken')
const OTP = require('../models/OTP')
const OTPGenerator = require('../utils/OTP/OTPGenerator')
const Todo = require('../models/Todo')
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            throw new Error("Please Provide All Details");
        }
        //  verify user
        const isUserVerified = await User.findOne({ email })
        if (!isUserVerified) {
            throw new Error("User not Exist");
        }
        // verfiy user password 
        let user = isUserVerified;
        await utils.compare(password, user.password);
        // create a session for user
        const tokenPayload = {
            userId: user._id,
            email: user.email,
        }
        const token = await jwt.sign(tokenPayload, process.env.JWT_SECRET)
        // save token to headers or cookies
        if (res?.cookies?.sessionToken) {
            throw new Error("Session Token Already Existed");
        }
        // req.headers.authorization = `Bearer ${token}`
        res.cookie('sessionToken', token, { maxAge: 5 * 3600, httpOnly: true });
        // udpate the user active session
        await User.findOneAndUpdate({ email }, {
            $set: {
                active: true,
                token: token,
            }
        }, { new: true })
        return res.status(200).json({
            success: true,
            message: "User Session Created Successfully",
            user
        })
    } catch (err) {
        return res.status(400).json({
            success: false,
            message: err.message
        })
    }
}


exports.logout = async (req, res) => {
    try {
        const { userId } = req.user;
        // find user and udpate active status 
        // update user active state and token
        await User.findOneAndUpdate({ _id: userId },
            {
                $set: {
                    active: false,
                },
                $unset: {
                    token: 1,
                }
            }, { new: true });
        // delete cookies and header tokens
        // req.headers.authorization = "";
        res.clearCookie('sessionToken');
        return res.status(200).json({
            success: true,
            message: "Destroyed User Session",
        })
    } catch (err) {
        return res.status(400).json({
            success: false,
            message: err.message
        })
    }
}

exports.signup = async (req, res) => {

    try {
        // get the data
        const { firstName, lastName, email, password, confirmPassword, otp } = req.body;
        if (!firstName || !lastName || !email || !password || !confirmPassword || !otp) {
            throw new Error("Please Enter All Details");
        }
        if (password != confirmPassword) {
            throw new Error("Password not matched");
        }
        // find the user with user email 
        const isUserExisted = await User.findOne({ email })
        if (isUserExisted) {
            throw new Error("User Already Existed");
        }
        // find the latest otp with the email 
        const latestOtp = await OTP.findOne({ email }).sort({ createdAt: -1 }).limit(1)
        if (!latestOtp) {
            throw new Error("OTP Not exist")
        }
        // compare otp
        if (latestOtp.otp !== otp) {
            throw new Error("Otp Not Matched");
        }
        // hash the user password 
        const hashPassword = await utils.encrypt(password, 10);
        // create user account 
        const newUser = await User.create({
            firstName,
            lastName,
            email,
            password: hashPassword
        })
        console.log("NEW USER CREATED");
        return res.status(200).json({
            success: true,
            message: "User Signup Successfully ",
            user: newUser,
        })
    } catch (err) {
        return res.status(400).json({
            success: false,
            message: err.message
        })
    }
}
exports.sendOTP = async (req, res) => {
    try {
        // validate input
        const { email } = req.body;
        if (!email) {
            throw new Error("Please Send Email ....");
        }
        // create otp 
        const otp = await OTPGenerator.generate(4)
        // create otp data base 
        const otpDoc = await OTP.create({
            email,
            otp
        })
        // 
        return res.status(200).json({
            success: true,
            message: "OTP Sended Successfully",
            otpDoc,
        })
    } catch (err) {
        return res.status(400).json({
            success: false,
            message: err.message,
        })
    }
}

exports.deleteAccount = async (req ,res)=> { 
    try { 
        const {userId , email} = req.user; 
        // find the user 
        const deletedUser = await User.findByIdAndDelete(userId); 
        // delete all the todos with that id 
        const deletedTodos = await Todo.deleteMany({user : userId})
        console.log(deletedTodos)
        return res.status(200).json({
            success: true,
            message: "Deleted Account Successfully",
        })
    }catch(err) { 
        return res.status(400).json({
            success: false,
            message: err.message,
        })
    }
}