import React, { useState } from 'react'
import CreateTodoForm from '../components/main/todos/CreateTodoForm';
import ListAllTodos from '../components/main/todos/ListAllTodos';

const Todo = () => {
  const [createTodo, setCreateTodo] = useState(false);
  return (
    <div className={`bg-slate-900 text-white  ${createTodo ? " h-max" : "min-h-screen"}`}>
      <ListAllTodos createTodo={createTodo} setCreateTodo={setCreateTodo}/>
      
      {
        createTodo && <CreateTodoForm />
      }
    </div>
  )
}

export default Todo 