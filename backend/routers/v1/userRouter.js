const express = require('express')
const router = express.Router(); 
const {signup , sendOTP , login ,destroyUserSession , createUserSession , logout } = require('../../controllers/userAuthController')
router.post('/signup' , signup )
router.post('/login' , login, createUserSession); 
router.get('/logout', logout , destroyUserSession);
router.post('/send-otp' , sendOTP);
router.get('/' , (req ,res)=> { 
    res.json({ 
        message : "user routes"
    })
})
module.exports = router