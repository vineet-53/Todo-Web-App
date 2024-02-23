import React from 'react'
import { useForm } from "react-hook-form"
import ErrorInputField from "../components/common/ErrorInputField"
import { InputFieldContainer, InputFieldStyles } from "../styles/FormStyles"
import SubmitButton from '../components/common/SubmitButton'

function Signup() {
  const { register, handleSubmit, formState: { errors } } = useForm(
    {
      defaultValues: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      }
    }
  )
  const onSubmit = (data) => {
    // fetch the data from backend
    console.log(data)

  }
  return (
    <div className='flex justify-center items-center flex-col gap-6 h-[100vh]  '>
      <div>
        <h1 className='text-3xl font-bold py-2'>Sign Up Form</h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}   className='grid grid-col-1 gap-2 lg:w-[400px]'>
        <div className={InputFieldContainer}>
          <label htmlFor="firstName">First Name:</label>
          <input type="text" id='firstName' className={InputFieldStyles} placeholder='Enter First Name' {...register("firstName", { required: "Please Enter First Name" })} />
          {errors?.firstName && <ErrorInputField>{errors?.firstName.message}</ErrorInputField>}
        </div>
        <div className={InputFieldContainer}>
          <label htmlFor="lastName">Last Name:</label>
          <input type="text" id='lastName' className={InputFieldStyles} placeholder='Enter Last Name' {...register("lastName", { required: "Please Enter Last Name" })} />
          {errors?.lastName && <ErrorInputField>{errors?.lastName.message}</ErrorInputField>}
        </div>

        <div className={InputFieldContainer}>
          <label htmlFor="email">Email:</label>
          <input type="email" id='email' className={InputFieldStyles} placeholder='Enter Email' {...register("email", { required: "Please Enter Email" })} />
          {errors?.lastName && <ErrorInputField>{errors?.lastName.message}</ErrorInputField>}
        </div>
        <div className={InputFieldContainer}>
          <label htmlFor="password">Password :</label>
          <input type="password" id='password' className={InputFieldStyles} placeholder='Enter Password' {...register("password", { required: "Please Enter Password" })} />
          {errors?.password && <ErrorInputField>{errors?.password.message}</ErrorInputField>}

        </div>
        <div className={InputFieldContainer}>
          <label htmlFor="confirmPassword">Confirm Password :</label>
          <input type="password" id='confirmPassword' className={InputFieldStyles} placeholder='Enter confirm Password' {...register("confirmPassword", { required: "Please Enter Confirm Password" })} />
          {errors?.confirmPassword && <ErrorInputField>{errors?.confirmPassword.message}</ErrorInputField>}
        </div>
        <SubmitButton />
      </form>
    </div>
  )
}

export default Signup
