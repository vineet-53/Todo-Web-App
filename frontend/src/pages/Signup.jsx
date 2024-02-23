import React, { useState } from 'react'
import SignupForm from '../components/main/signup/SignupForm'
import OTPForm from '../components/main/signup/OTPForm'

function Signup() {
  const [formFilled , setFormFilled] = useState(false)
  return (
    <>
        {!formFilled ? <SignupForm setFormFilled={setFormFilled}/>  : <OTPForm />}
    </>
  )
}

export default Signup
