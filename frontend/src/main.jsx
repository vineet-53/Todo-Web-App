import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter , } from "react-router-dom"
import store from './store/index.js'
import { Provider } from 'react-redux'
import toast, { Toaster } from 'react-hot-toast';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Provider store={store}>
    <BrowserRouter > 
        <App />
        <Toaster />
    </BrowserRouter>
   </Provider>
  </React.StrictMode>,
)
