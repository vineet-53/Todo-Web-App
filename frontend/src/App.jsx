import React from 'react'
import Signup from './pages/Signup'
import Todo from './pages/Todo'
import Login from './pages/Login'
import {Route , Routes} from "react-router-dom"
import PrivateRoute from './authentication/PrivateRoute'
function App() {
  return (
    <>
      <Routes> 
        <Route path='/' element={<PrivateRoute> 
          <Todo />
        </PrivateRoute>}/>
        <Route path='/signup' element={<Signup/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
    
    </>
  )
}

export default App