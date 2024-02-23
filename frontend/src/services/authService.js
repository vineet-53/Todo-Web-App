import toast from 'react-hot-toast';
import {apiConnector} from "../utils/apiConnector"
import {userEndpoints} from "../services/apiRoutes"
const {LOGIN ,DELETE_ACCOUNT , LOGOUT ,SENDOTP, SIGNUP} = userEndpoints;
export const signup = (data )=> async (dispatch) => { 

    // show loading 
    const toastId = toast.loading("Sending OTP to mail....")
    try { 
        const response = await apiConnector("POST" , SIGNUP , data )
        // if success 
        console.log(response)
    }catch(err) { 
        console.error(err ,"\n Error Message : ", err.message); 
        toast.error(err.message)
    }
    // end loading
    
    toast.dismiss(toastId)
}