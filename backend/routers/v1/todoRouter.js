const express = require('express')
const router = express.Router(); 
const {createTodo ,deletedTodo, updateTodo} = require('../../controllers/todoController')
const middleware = require('../../middlewares/userAuth')
router.post("/create-todo"  , middleware.authentication , createTodo);
router.delete('/delete-todo/:todoId' , middleware.authentication , deletedTodo )
router.put('/update-todo/:todoId'  , middleware.authentication , updateTodo)
router.get('/' , (req ,res)=> { 
    return res.json({ 
        message : "Todo routes"
    })
})
module.exports = router