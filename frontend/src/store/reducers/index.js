import userReducer from "../slices/userSlice"
import { combineReducers } from "@reduxjs/toolkit"
import todosReducer from '../slices/todoSlice'
export default combineReducers( { 
    user : userReducer, 
    todos : todosReducer,
})
