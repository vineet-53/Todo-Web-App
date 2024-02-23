import React from 'react'
import Signup from './pages/Signup'
import Todo from './pages/Todo'
import Login from './pages/Login'
import {Route , Routes} from "react-router-dom"
import PrivateRoute from './authentication/PrivateRoute'
import OpenRoute from './authentication/OpenRoute'
function App() {
  return (
    <>
      <Routes> 
        <Route path='/' element={<PrivateRoute> 
          <Todo />
        </PrivateRoute>}/>
        <Route path='/signup' element={<OpenRoute><Signup/></OpenRoute>} />
        <Route path='/login' element={<OpenRoute><Login/></OpenRoute>} />
      </Routes>
    </>
  )
}

export default App