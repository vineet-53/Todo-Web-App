import React, { useState } from 'react'
import OtpInput from 'react-otp-input';
import { signup } from '../../../services/authService';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import SubmitButton from '../../common/SubmitButton';
import {useNavigate} from "react-router-dom"
function OTPForm() {
  const [otp , setOtp]  = useState('')
  const navigate = useNavigate()
  const {user} = useSelector(state => state.user)

  const {handleSubmit , formState : {errors}  ,setError , setValue , getValues , register} = useForm({ 
    defaultValues : { 
      otp  : ""
    }
  })
  const onSubmit = () => { 
    // validate the data
    if(!otp) { 
      setError("root", { 
        type : "value" , 
        message : "Please Enter OTP", 
      })
      return;
    }
    // send the otp to api service 
    setValue("otp" , otp.toString())
    signup(user , otp  , navigate);
  }
  return (
    <section className='px-2 sm:px-0 flex justify-center items-center h-[100vh] flex-col gap-7'>
      <div className='flex flex-col gap-2'>
        <h1 className='text-3xl font-bold '>Verify email</h1>
        <p className='px-1'>
          A verification code has been sent to you. Enter the code below
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className='w-full'><OtpInput
          value={otp}
          onChange={setOtp}
          numInputs={4}
          renderInput={(props) => <input {...props} />}
          inputStyle="!w-[57px] h-[48px] flex-1 outline-none bg-slate-400 bg-opacity-70 rounded-lg"
          shouldAutoFocus={true}
          containerStyle="flex gap-2 bg-transparent h-max py-4 !text-orange-600 font-bold w-max rounded-md"
        />
          <SubmitButton />
        </form>
      </div>

    </section>
  )
}

export default OTPForm