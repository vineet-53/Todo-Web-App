
import {createSlice} from "@reduxjs/toolkit"
const initialState = { 
    token : localStorage.getItem('sessionToken') ? JSON.parse(localStorage.getItem('sessionToken'))  : null, 
    loading : false, 
    user : localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null , 
}
const userSlice = createSlice({
    name : "User" , 
    initialState, 
    reducers : { 
        setToken : (state , action) => { 
            state.token  = action.payload
        }, 
        setLoading : (state , action) =>{ 
            state.loading = action.payload
        }, 
        setUser :  (state  ,action) => { 
            state.user =action.payload
        }
    }
})
export const { setToken , setLoading , setUser} = userSlice.actions; 
export default userSlice.reducer