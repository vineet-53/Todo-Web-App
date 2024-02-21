const Todo = require('../models/Todo')
exports.createTodo = async (req ,res)=> { 
    // verify the inputs
    try { 
        const {todo , category , date } = req.body; 
        if(!todo || !category || !date) { 
            return res.status(404).json({ 
                success : false, 
                message : "Please Enter All Details"
            })
        }
        // verify user cookie 
        const user = req.user
        if(!user) { 
            throw new Error("User Not Exist")
        }
        // create todo 
        const todoDoc = Todo.create({ 
            todo , category , date , 
        })
        // return response
        return res.status(200).json( {
            success : true ,
            message : "Todo Created Successfully", 
            todo : todoDoc,
        })
    }
    catch(err) {
        return res.status(404).json({ 
            success : false, 
            message : err.message, 
        })
    }
}


exports.deletedTodo = async (req ,res) => { 
    try {
        // fetch the id from params 
        const {todoId} = req.params; 
        if(!todoId) { 
            throw new Error("Please Provide User Id")
        }
        // delete todo from database
        const deletedTodo = await Todo.findOneAndDelete({_id : todoId})
        // return response
        return res.status(200).json( {
            success : true ,
            message : "Todo Deleted Successfully", 
            deletedTodo,
        })
    }catch(err) { 
        return res.status(404).json({ 
            success : false, 
            message : err.message, 
        })
    }
}


exports.updateTodo = async (req ,res) => { 
    // update the todo 
    try {
            
        const {todoId} = req.params; 
        const { todo , category , date} = req.body; 
        if(!todo || !category || !date) { 
            throw new Error("Please Enter All Details");
        }
        if(!todoId) { 
            return res.status(404).json({ 
                message : "Todo Id not found", 
            })
        }
        // find todo 
        const todoDoc = await Todo.findOneAndUpdate({ _id : todoId} , { 
            $set : { 
                todo , 
                category, 
                date , 
            }, 
        },{new : true}) 
        // 
        return res.status(200).json( {
            success : true, 
            message : "Todo Updated Successfully" , 
            todo : todoDoc,
        })
        
    }catch(err) { 
        return res.status(400).json({ 
            success : false, 
            message : err.message
        })
    }
}

// exports.updateTodoTitle = async(req ,res)=> { 
//     try { 
//         const {todoId} = req.params; 
//         const { todo}  = req.body; 
//         if(!todo) { 
//             throw new Error("Please Enter All Details"); 

//         }
//         if(!todoId)  { 
//             return res.status(404).json({ 
//                 success : false , 
//                 message : "Todo Id not valid", 
//             })
//         }
//         // 
//         return res.status(200).json( {
//             success : true, 
//             message : "Todo Updated Successfully" , 
//             todo : todoDoc,
//         })
//     }catch(err){ 
//         return res.status(400).json({ 
//             success : false, 
//             message : err.message
//         })
//     }
// }
