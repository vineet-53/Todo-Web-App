const express = require('express')
const router = express.Router(); 
const {createTodo} = require('../../controllers/todoController')

// create todo
router.post("/create-todo" , createTodo);
router.get('/' , (req ,res)=> { 
    return res.json({ 
        message : "Todo routes"
    })
})
module.exports = router