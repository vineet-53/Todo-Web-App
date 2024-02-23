import userReducer from "../slices/userSlice"
import { combineReducers } from "@reduxjs/toolkit"

export default combineReducers( { 
    user : userReducer
})
