import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import SignUp from './SignUp.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Login.tsx'
import Home from './home.tsx'
import HSCodeRecommendation from './recommendation.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path='/login' element={<Login />}/>
          <Route path='/signup' element={<SignUp />}/>
          <Route path='/home' element={<Home />}/>
          <Route path='/recommendation' element={<HSCodeRecommendation />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
