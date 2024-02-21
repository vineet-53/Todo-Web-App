const express = require('express')
require('dotenv').config()
const app = express()  ;
const PORT = process.env.PORT || 4000;
const v1Router = require('./routers/v1/index')

// api version 
app.use("/api/v1/" , v1Router)
app.get('/', (req ,res) => { 
    return res.json({ 
        message : "Server is Running"
    })
})

app.listen(PORT , err => { 
    if(err) console.error("------------ Server crashed -----------\n" , err.message)
    console.log("Server is Running PORT" , PORT)
})
