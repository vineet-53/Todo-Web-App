import React, { useEffect, useState } from 'react'
import TodoElem from './TodoElem'
import { useDispatch, useSelector } from 'react-redux'
import {getAllTodos} from "../../../services/todoService.js"
const ListAllTodos = ({ createTodo, setCreateTodo }) => {
    const [todos, setTodos] = useState([])
    const {token } = useSelector(state => state.user);
    useEffect(() => {
        // get all todos
        const allTodos = getAllTodos(token);
        if (allTodos) {
            setTodos(allTodos)
        }
    }, [])
    return (
        <div className='grid gap-y-4 px-2'>
            {/* todo , date , description , category */}
            <div className=' grid gap-y-3'>
                {<TodoElem />}
            </div>
            {
                !createTodo ? <button className='rounded-md px-4 py-2 bg-green-600 font-bold hover:bg-green-700 w-max mx-auto' onClick={() => {
                    setCreateTodo(true);
                }}>Show Create Todo Form</button> : <button className='rounded-md px-4 py-2 bg-green-600 font-bold hover:bg-green-700  mx-auto' onClick={() => setCreateTodo(false)}>Hide Create Todo Form</button>
            }
        </div>
    )
}

export default ListAllTodos