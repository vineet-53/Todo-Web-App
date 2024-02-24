import React, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form"
import Select from "react-select"
import { ErrorInputField, InputFieldContainer, InputFieldStyles, LabelFieldStyle } from '../../../styles/FormStyles';
const options = [
  { category: 'School', label: 'School' },
  { category: 'Work', label: 'Work' },
  { category: 'Personal', label: 'Personal' },
];
function CreateTodoForm() {
  const [category , setCategory]  = useState("Select Categories...")
  const { register, handleSubmit, formState: { errors } , setError  , setValue , getValues } = useForm({ 
    defaultValues : { 
      todo : "", 
      date : "", 
      category : "",
      description : "",
    }
  })
  const onSubmit = data => {
    const {category} = data; 
    if(!category) { 
      setError("root" , { 
        type : "value", 
        message : "Please Select Category! ",
      })
      return ;
    }
    console.log(data)
  }
  useEffect(()=> { 

  }, [category])
  return (
    <div className='flex items-center justify-center flex-col gap-y-4 min-h-screen bg-slate-900 px-2'>
      <div>
        <h1 className="text-white text-4xl py-0">Create Todo:  </h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='sm:flex gap-4'>
          <div className='grid gapy-2'>
            <label htmlFor="todo" className={LabelFieldStyle}>Title:</label>
            <input type="text" className={InputFieldStyles} placeholder='Enter Todo Description' id='todo' {...register("todo", { required: "Please Enter Todo" })} />
            {errors?.todo && <p className={ErrorInputField}>{errors?.todo?.message}</p>}
          </div>
          <div className='grid gapy-2'>
            <label htmlFor="date" className={LabelFieldStyle}>Date:</label>
            <input type="date" className={InputFieldStyles} id='date' placeholder='Todo to be completed'  {...register("date", { required: "Please Enter Date" })} />
            {errors?.todo && <p className={ErrorInputField}>{errors?.todo?.message}</p>}
          </div>
        </div>
        <div className={InputFieldContainer + " my-2"} >
          <label htmlFor="category" className={LabelFieldStyle}>Category:</label>
          <Select
            value={null}
            placeholder={category}
            onChange={(e) => {
              setValue("category", e.category)
              setCategory(e.category)
            }}
            options={options}
          />
           {errors?.root?.type && <p className={ErrorInputField}>{errors?.root?.message}</p>}
        </div>
        <div className={InputFieldContainer}>
          <label htmlFor="description" className={LabelFieldStyle}>Description:</label>
          <textarea name="" id="" cols="30" rows="10" { ...register("description" )} className='rounded-md mb-2 p-2 outline-2 outline-slate-600 ' placeholder='Enter Todo Description'></textarea>
        </div>
        <button type='submit' className='bg-blue-600 text-white py-2 my-2 px-4 w-full border-2 border-black rounded-md hover:bg-blue-800 hover:text-white font-bold'>Add Todo</button>
      </form>
    </div>
  )
}

export default CreateTodoForm
