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
        const response = await axios.post(SENDOTP_URL , {email : data.email})
        // if success 
        console.log(response)
        if(response?.data?.success){ 
            await dispatch(setUser({...data}))
            // set user data to localstorage
            toast.success(response?.data?.message)
        }
        toast.dismiss(toastId); 
        return response?.data?.success
    }catch(err) { 
        console.error(err ,"\n Error Message : ", err.message); 
        toast.error(err.message)
    }
    toast.dismiss(toastId)
}

export const signup = async (user , otp , navigate) => { 
    const toastId = toast.loading("Verifying OTP....")
    try { 
        const response = await axios.post(SIGNUP_URL , {...user , otp})
        if(!response?.data?.success) { 
            throw new Error(response?.data?.message)
        }
        // set user to local storage
        // localStorage.setItem("user" , JSON.stringify(user))
        toast.success(response?.data?.message)
        navigate('/login')
    }catch(err) { 
        console.error(err ,"\n Error Message : ", err.message); 
        toast.error(err.message)
    }
    toast.dismiss(toastId)
    
}

export const login = async (email , password , navigate) => { 
    const toastId =toast.loading("Logging In....")
    try { 
        const response = await axios.post(LOGIN_URL , {email , password})
        if(!response?.data?.success) { 
            throw new Error(response?.data?.message)
        }
        const { firstName , lastName , active ,} = response?.data?.user
        // set user to local storage
        localStorage.setItem("user" , JSON.stringify({ 
            email : response?.data?.user.email , firstName, lastName ,active
        }))
        // set token 
        localStorage.setItem("sessionToken" , JSON.stringify(response?.data?.user?.token));
        console.log(response)
        toast.success(response?.data?.message)
    }catch(err) { 
        console.error(err ,"\n Error Message : ", err.message); 
        toast.error(err.message)
    }
    toast.dismiss(toastId)
}