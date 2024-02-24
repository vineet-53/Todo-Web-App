const Todo = require('../models/Todo')
exports.createTodo = async (req ,res)=> { 
    // verify the inputs
    try { 
        const {todo , category , date } = req.body; 
        // check if the user is present
        if(!req.user ) { 
            throw new Error("Unauthorized To do this operation");
        }
        if(!todo || !category || !date) { 
            throw new Error("Please Provide All Details")
        }
        // find the todo already exist ? 
        const isTodoExited  = await Todo.findOne({ todo })
        if(isTodoExited) { 
            throw new Error("Todo Already Existed....")
        }
        // create todo 
        const todoDoc = await Todo.create({ 
            todo , category , date , user : req.user.userId
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
        const {todoId } = req.body; 
        if(!req.user ) { 
            throw new Error("Unauthorized To do this operation");
        }
        if(!todoId) { 
            throw new Error("Please Provide User Id")
        }
        // delete todo from database
        const deletedTodo = await Todo.findOneAndDelete({_id : todoId})
        if(!deletedTodo) { 
            throw new Error("Please Provide Valid Todo Id!")
        }
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
        const { todo , category , date , description , todoId} = req.body; 
        console.log(req.body)
        if(!todoId) { 
            return res.status(404).json({ 
                success : false ,
                message : "Todo ID not found!", 
            })
        }
        // find todo is existed or not
        const isTodoExited = await Todo.findById(todoId); 
        if(!isTodoExited){ 
            throw new Error("Please Provide Valid Todo Id!");
        }

        const todoDoc = await Todo.findOneAndUpdate({ _id : todoId} , { 
            $set : { 
                todo : todo || isTodoExited.todo , 
                category : category || isTodoExited.category, 
                date : date || isTodoExited.date, 
                description:  description || isTodoExited.description
            }, 
        },{new : true}) 
        const todos  = await Todo.find({})
        return res.status(200).json( {
            success : true, 
            message : "Todo Updated Successfully" , 
            todo : todoDoc,
            todos,
        })
        
    }catch(err) { 
        return res.status(400).json({ 
            success : false, 
            message : err.message
        })
    }
}
exports.getAllTodos = async (req ,res) => { 
    try { 
        const allTodos = await Todo.find({}); 
        return res.status(200).json( {
            success : true, 
            message : "All Todos" , 
            todos : allTodos,
        })
    }catch(err) { 
        return res.status(400).json({ 
            success : false, 
            message : err.message
        })
    }
}