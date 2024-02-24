import toast from "react-hot-toast"
import { apiConnector } from "../utils/apiConnector";
import {todoEndpoints} from "./apiRoutes"
import axios from "axios";
const {GET_ALL_TODOS_URL} = todoEndpoints
export const getAllTodos = async (token) => { 
    const toastId = toast.loading("Fetching Todos...."); 
    try { 
        const response = await axios({ 
            method : "GET",  
            url : GET_ALL_TODOS_URL , 
            headers : { 
                Authorization : `Bearer ${token}`
            }
        })
        console.log(response);
        toast.success("Fetched All Todos!")
    }catch(err) { 
        console.error("Error fetching todos")
        toast.error(err.message)
    }
    toast.dismiss(toastId)
}