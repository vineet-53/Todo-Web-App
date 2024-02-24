import React, { useState } from 'react'
import Select from 'react-select';
import { InputFieldStyles } from '../../../styles/FormStyles';
import { useForm } from 'react-hook-form';
const options = [
    { category: 'School', label: 'School' },
    { category: 'Work', label: 'Work' },
    { category: 'Personal', label: 'Personal' },
];
const TodoElem = ({todoData}) => {
    const [editTodo , setEditTodo] = useState(false)
    const {register ,formState : { errors } , setValue , setError , getValues , handleSubmit} = useForm({ 
        defaultValues : { 
            todo : "" , 
            date : "", 
            category : "" , 
            description : "", 
        }
    })
    const onSubmit = (data) => { 
        console.log(data) ;
    }
  return (
    <>
    {
        !editTodo ? <div className='bg-slate-600 px-4 rounded-lg max-w-full flex justify-between max-sm:flex-col items-center '>
        <div className='flex max-sm:justify-between w-full gap-3'>
        <p className='font-bold text-xl'>I want To go for run</p>
            <p className='font-semibold'>21-20-2004</p>
        </div>
        <div className='flex justify-between max-sm:w-full items-center sm:gap-4'>
            <span className='bg-blue-400 p-2 rounded-md px-3 my-2 block w-max text-white font-bold'>School</span>
            {!editTodo && <button onClick={() => setEditTodo(true)} className='bg-yellow-400 cursor-pointer p-2 rounded-md px-3 my-2 block w-max text-white font-bold'>Edit</button>}
        </div>
    </div>
    :
    <form onSubmit={handleSubmit(onSubmit)} className='bg-slate-600 px-4 rounded-lg max-w-full flex justify-between max-sm:flex-col items-center sm:gap-2 '>
        <input type="text" defaultValue ="I want" className={InputFieldStyles}/>
        <input type="date" className={InputFieldStyles + ' my-2'} 
        onChange={e=> console.log(e)}defaultValue="21-20-2004" />
        <div className='w-full text-black'>
                <Select
                    value={null}
                    onChange={(e) => {
                    }}
                    options={options}
                />
        </div>
        <button className='bg-green-600 ml-auto my-2 px-3 py-2 rounded-md' type='submit'>Save</button>
    </form>
    }</>
  )
}


export default TodoElem