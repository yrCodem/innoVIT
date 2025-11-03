import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Login from './components/Login.jsx'
import Study from './components/Study.jsx'
import UniCollab from './components/UniCollab.jsx'
import Default from './components/StudyDefault.jsx'
import { Routes, Route } from 'react-router-dom'
import { React, useEffect } from 'react'
import { useAuth } from './utils/AuthContext.jsx'
import axios from 'axios'

import SubjectDetails from './components/SubjectDetails.jsx'
import Profile from './components/Profile.jsx'
import AboutCommunity from './components/unicollab/about-platform/AboutCommunity.jsx'
import CodeOfConduct from './components/unicollab/about-platform/CodeOfConduct.jsx'
import PrivacyPolicy from './components/unicollab/about-platform/PrivacyPolicy.jsx'
import TermsOfService from './components/unicollab/about-platform/TermsOfService.jsx'

const App = () => {
  const { login, logout, currentUser, isAuthenticated } = useAuth()

  const API_URL =
    import.meta.env.VITE_NODE_ENV === 'production'
      ? 'https://innovit-server.onrender.com'
      : 'http://localhost:5000'

  useEffect(() => {
    const validateToken = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/auth/validate-token`, {
          withCredentials: true,
        })

        if (response.data.valid) {
          login(response.data.username)
        } else {
          logout()
          console.warn(response.data.message)
        }
      } catch (error) {
        console.error('Error validating token', error.message)
      }
    }

    validateToken()
  }, [])

  return (
    <div>
      <Header />

      <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='/login' element={<Login />} />
        <Route path='/unicollab' element={<UniCollab />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/about' element={<AboutCommunity />} />
        <Route path='/code-of-conduct' element={<CodeOfConduct />} />
        <Route path='/privacy' element={<PrivacyPolicy />} />
        <Route path='/terms' element={<TermsOfService />} />
        <Route path='/study' element={<Study />}>
          <Route index element={<Default />} />
          <Route path=':subjectCode' element={<SubjectDetails />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
