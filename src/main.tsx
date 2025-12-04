import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Login from './Login.tsx'
import SignUp from './SignUp.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path='/login' element={<Login />}/>
          <Route path='/signup' element={<SignUp />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
