
import {createSlice} from "@reduxjs/toolkit"
const initialState = { 
    token : localStorage.getItem('sessionToken') ? JSON.parse(localStorage.getItem('sessionToken'))  : null, 
    loading : false, 
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
        }
    }
})
export const { setToken , setLoading } = userSlice.actions; 
export default userSlice.reducer