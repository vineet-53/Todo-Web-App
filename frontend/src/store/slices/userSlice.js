
import {createSlice} from "@reduxjs/toolkit"
const initialState = { 
    token : localStorage.getItem('sessionToken') ? JSON.parse(localStorage.getItem('sessionToken'))  : null
}
const userSlice = createSlice({
    name : "User" , 
    initialState, 
    reducers : { 
        setToken : (state , action) => { 
            state.token  = action.payload
        }
    }
})
export const { setToken } = userSlice.actions; 
export default userSlice.reducer