const express = require('express')
const router = express.Router() ; 
const todoRouter = require('./todoRouter')
const userRouter  = require('./userRouter')
// api routes
router.use('/todos' , todoRouter); 
router.use('/users' , userRouter); 
// show the homepage or dashboard after authenticating
router.get('/' , (req , res)=> { 
    return res.json({ 
        message : "Homepage"
    })
})

module.exports = router