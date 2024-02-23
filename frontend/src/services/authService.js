import toast from 'react-hot-toast';
import {apiConnector} from "../utils/apiConnector"
import {userEndpoints} from "../services/apiRoutes"
import {setUser} from "../store/slices/userSlice"
import axios from 'axios';
const {DELETE_ACCOUNT_URL, LOGIN_URL ,LOGOUT_URL ,SENDOTP_URL , SIGNUP_URL} = userEndpoints;
export const sendOTP = (data) => async (dispatch) => { 
    // show loading 
    const toastId = toast.loading("Sending OTP to mail....")
    try { 
        // const response = await apiConnector("POST" , SENDOTP , {email : data.email} )
        const response = await axios.post(SENDOTP_URL , {email : data.email})
        // if success 
        console.log(response)
        if(!response.response.success){ 
            toast.error(response?.response?.message)
        }
        await dispatch(setUser(...data))
        // set user data to localstorage
        toast.success(response?.response?.message)
    }catch(err) { 
        console.error(err ,"\n Error Message : ", err.message); 
        toast.error(err.message)
    }
    // end loading
    
    toast.dismiss(toastId)
}

export const signup = async () => { 
    
}