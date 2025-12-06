import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import SignUp from './pages/SignUp'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Home from './home'
import HSCodeRecommendation from './recommendation'
import Onboarding from './pages/onboarding'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path='/login' element={<Login />}/>
          <Route path='/signup' element={<SignUp />}/>
          <Route path='/home' element={<Home />}/>
          <Route path='/recommendation' element={<HSCodeRecommendation />}/>
          <Route path='/onboarding' element={<Onboarding />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
