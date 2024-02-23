import React from 'react'
import Signup from './pages/Signup'
import Home from './pages/Home'
import {Route , Routes} from "react-router-dom"
function App() {
  return (
    <>
      <Routes> 
        <Route path='/' element={<Home />}/>
        <Route path='/signup' element={<Signup/>} />
      </Routes>
    
    </>
  )
}

export default App