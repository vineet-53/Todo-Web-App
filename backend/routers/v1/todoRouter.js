const express = require('express')
const router = express.Router(); 
const {createTodo ,deletedTodo, updateTodo, getAllTodos} = require('../../controllers/todoController')
const middleware = require('../../middlewares/userAuth')
router.post("/create-todo"  , middleware.authentication , createTodo);
router.delete('/delete-todo' , middleware.authentication , deletedTodo )
router.post('/update-todo'   , updateTodo)
router.get('/get-all-todos' , middleware.authentication , getAllTodos)
router.get('/' , (req ,res)=> { 
    return res.json({ 
        message : "Todo routes"
    })
})
module.exports = router