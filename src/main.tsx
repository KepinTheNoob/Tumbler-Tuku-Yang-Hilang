import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import SignUp from './pages/SignUp'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AuthProvider } from './auth/AuthContext'
import Login from './pages/Login'
import Home from './home'
import HSCodeRecommendation from './pages/recommendation'
import Onboarding from './pages/onboarding'
import Dashboard from './pages/Dashboard'
import ProtectedRoute from './auth/ProtectedRoute'
import Profile from './pages/Profile'
import EditProfile from './pages/EditProfile'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
        <Route>
          <Route path='/login' element={<Login />}/>
          <Route path='/signup' element={<SignUp />}/>
          <Route path='/' element={<Home />}/>
          <Route path='/home' element={<Home />}/>
          <Route path='/recommendation' element={<HSCodeRecommendation />}/>
          <Route path='/onboarding' element={<Onboarding />}/>
          <Route path='/dashboard' element={<Dashboard />}/>
          <Route path='/onboarding' element={
            <ProtectedRoute>
              <Onboarding />
            </ProtectedRoute>
          }/>
          <Route path='/profile' element={<Profile />}/>
          <Route path='/profile/edit' element={<EditProfile />}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>,
)
