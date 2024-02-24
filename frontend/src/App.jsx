import React, { lazy } from 'react'
import { Route, Routes } from "react-router-dom"
import PrivateRoute from './authentication/PrivateRoute'
import OpenRoute from './authentication/OpenRoute'
import { BrowserRouter as Router } from 'react-router-dom'
const Signup = lazy(() => import("./pages/Signup"))
const Login = lazy(() => import("./pages/Login"))
const Todo = lazy(() => import("./pages/Todo"))
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<PrivateRoute>
          <Todo />
        </PrivateRoute>} />
        <Route path='/signup' element={<OpenRoute><Signup /></OpenRoute>} />
        <Route path='/login' element={<OpenRoute><Login /></OpenRoute>} />
      </Routes>
    </Router>
  )
}

export default App