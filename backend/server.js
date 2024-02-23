const express = require('express')
require('dotenv').config({ 
    path : '../.env'
})
const cors = require('cors')
const app = express()  ;
const PORT = process.env.PORT || 4000;
const v1Router = require('./routers/v1/index')
const cookieParser  = require('cookie-parser')
const mongoose = require('./configs/database')
// api version 
app.use(cookieParser())
app.use(express.json())
app.use("/api/v1/" , v1Router)
app.use(cors( { 
    origin : "http://127.0.0.1:5173", 
    credentials : true , 
    allowedHeaders : true ,
    methods : ["GET" , "PUT" , "POST" , "DELETE" ]
}))

app.get('/', (req ,res) => { 
    return res.json({ 
        message : "Server is Running"
    })
})
// database
mongoose.connect().then(res  => console.log("Database Connected")) ;
app.listen(PORT , err => { 
    if(err) console.error("------------ Server crashed -----------\n" , err.message)
    console.log("Server is Running PORT" , PORT)
})
