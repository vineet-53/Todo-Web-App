import toast from "react-hot-toast"
import { apiConnector } from "../utils/apiConnector";
import {todoEndpoints} from "./apiRoutes"
import axios, { AxiosHeaders } from "axios";
import {setTodos} from "../store/slices/todoSlice"
const {GET_ALL_TODOS_URL , UPDATE_TODO_URL} = todoEndpoints
export const getAllTodos =  (token)  => async dispatch  => { 
    const toastId = toast.loading("Fetching Todos...."); 
    try { 
        const response = await axios({ 
            method : "GET",  
            url : GET_ALL_TODOS_URL , 
            headers : { 
                Authorization : `Bearer ${token}`
            }
        })
        toast.success("Fetched All Todos!")
        if(response?.data?.success) { 
            toast.dismiss(toastId)
            // localstoage 
            await localStorage.setItem('todos' , JSON.stringify(response.data.todos))
            dispatch(setTodos(response.data.todos))
            return response.data.todos
        }
    }catch(err) { 
        console.error("Error fetching todos")
        toast.error(err.message)
    }
    toast.dismiss(toastId)
}
// export const getAllTodos =  async(token)  => { 
//     const toastId = toast.loading("Fetching Todos...."); 
//     try { 
//         const response = await axios({ 
//             method : "GET",  
//             url : GET_ALL_TODOS_URL , 
//             headers : { 
//                 Authorization : `Bearer ${token}`
//             }
//         })
//         toast.success("Fetched All Todos!")
//         if(response?.data?.success) { 
//             toast.dismiss(toastId)
//             // localstoage 
//             await localStorage.setItem('todos' , JSON.stringify(response.data.todos))
//             return response.data.todos
//         }
//     }catch(err) { 
//         console.error("Error fetching todos")
//         toast.error(err.message)
//     }
//     toast.dismiss(toastId)
// }

export const updateTodo =  (data , todoId , token) => async dispatch  => { 
    const toastId = toast.loading("Updating Todo...."); 
    try { 
        const response = await axios.post(UPDATE_TODO_URL , {...data , todoId} , {headers : { 
            Authorization : "Bearer " + token
        }})
        console.log(response)
        toast.success("Updated Todo!")
        if(response?.data?.success) { 
            toast.dismiss(toastId)
            // localstoage 
            await localStorage.setItem('todos' , JSON.stringify(response.data.todos))
            dispatch(setTodos(response.data.todos))
            return response.data.todos
        }
    }catch(err) { 
        console.error("Error Updating Todo")
        toast.error(err.message)
    }
    toast.dismiss(toastId)
}

