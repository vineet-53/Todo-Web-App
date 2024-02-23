import React from 'react'
import {useSelector} from "react-redux"
import {Navigate} from "react-router-dom"
function OpenRoute({children}) {
  const {token } = useSelector(state => state.user)
  return !token ? children : <Navigate to="/" /> 
}

export default OpenRoute