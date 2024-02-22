const express = require('express')
const router = express.Router(); 
const {signup , sendOTP , login , logout } = require('../../controllers/userAuthController');
const middleware = require('../../middlewares/UserAuth');
router.post('/signup' , signup )
router.post('/login' , login); 
router.get('/logout' , middleware.authentication , logout);
router.post('/send-otp' , sendOTP);
router.get('/' , (req ,res)=> { 
    res.json({ 
        message : "user routes"
    })
})
module.exports = router