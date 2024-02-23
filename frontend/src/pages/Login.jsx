import React from 'react'
import SubmitButton from '../components/common/SubmitButton'
import { useForm } from 'react-hook-form'
import ErrorInputField from '../components/common/ErrorInputField'
import { InputFieldContainer, InputFieldStyles } from '../styles/FormStyles'
import { useDispatch } from 'react-redux'
import { login } from '../services/authService'
import { useNavigate } from 'react-router-dom'

function Login() {
  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors } } = useForm({

    defaultValues: {
      email: "",
      password: "",
    }
  })
  const onSubmit = data => {
    login(data.email , data.password , navigate);
  }
  return (
    <section className='flex flex-col justify-center lg:px-0 px-6 sm:items-center h-[100vh]'>
      <div>
        <h1 className='text-3xl text-center w-full font-bold my-2 text-slate-700'>Login Form</h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className='sm:w-[400px] flex flex-col gap-2 py-2'>
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
        <SubmitButton />
      </form>
    </section>
  )
}

export default Login