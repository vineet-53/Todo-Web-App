import React, { useState } from 'react'
import {useForm} from "react-hook-form"
import Select from "react-select"
const options = [
  { category: 'School', label: 'School' },
  { category: 'Work', label: 'Work' },
  { category: 'Personal', label: 'Personal' },
];
function Todo() {
  const {register , handleSubmit  , formState: {errors}} = useForm()
  const onSubmit = data => { 
    console.log(data)
  }
  const[category , setCategory] = useState("Select Options");
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="todo">Todo:</label>
          <input type="text" id='todo' {...register("todo", { required: "Please Enter Todo" })} />
          {errors?.todo && <p className={ErrorInputField}>{errors?.todo?.message}</p>}
        </div>
        <div>
          <label htmlFor="date">Date:</label>
          <input type="date" id='date'  {...register("date", { required: "Please Enter Date" })} />
          {errors?.todo && <p className={ErrorInputField}>{errors?.todo?.message}</p>}
        
        </div>
        <div>
          <label htmlFor="category">Date:</label>
          <Select
            value={category}
            onChange={(e) =>{
              setValue( "category"  ,e.category)
              setCategory(e.category); 
            }}
            placeholder ={category}
            options={options}
          />
        </div>
        <button type='submit' className='px-2 py-1 border-2 border-black rounded-md hover:bg-black hover:text-white font-bold'>submit</button>
      </form>
    </div>
  )
}

export default Todo
