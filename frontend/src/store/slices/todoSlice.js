import { createSlice } from "@reduxjs/toolkit";



const initialState =  { 
    todos : localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [],  
    loading :false ,

}

const todoSlice = createSlice( { 
    name : "Todos" , 
    initialState,  
    reducers : { 
        setTodos : (state , action)=> { 
            state.todos = action.payload
        } ,
        setLoading : (state , action) => { 
            state.loading  = action.payload
        }
    }
})
export const {setLoading , setTodos} = todoSlice.actions
export default todoSlice.reducer