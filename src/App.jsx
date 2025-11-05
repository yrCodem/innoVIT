// import Header from './components/innoVIT/Header.jsx'
// import Hero from './components/innoVIT/Hero.jsx'
// import Login from './components/Login.jsx'
// import Study from './components/study/Study.jsx'
// import UniCollab from './components/unicollab/UniCollab.jsx'
// import Default from './components/study/StudyDefault.jsx'
// import { Routes, Route } from 'react-router-dom'
// import { React, useEffect } from 'react'
// import { useAuth } from './utils/AuthContext.jsx'
// import axios from 'axios'

// import SubjectDetails from './components/study/SubjectDetails.jsx'
// import Profile from './components/Profile.jsx'
// import AboutCommunity from './components/unicollab/about-platform/AboutCommunity.jsx'
// import CodeOfConduct from './components/unicollab/about-platform/CodeOfConduct.jsx'
// import PrivacyPolicy from './components/unicollab/about-platform/PrivacyPolicy.jsx'
// import TermsOfService from './components/unicollab/about-platform/TermsOfService.jsx'

// const App = () => {
//   const { login, logout, currentUser, isAuthenticated } = useAuth()

//   const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000'

//   useEffect(() => {
//     const validateToken = async () => {
//       try {
//         const response = await axios.get(`${API_URL}/api/auth/validate-token`, {
//           withCredentials: true,
//         })

//         if (response.data.valid) {
//           login(response.data.username)
//         } else {
//           logout()
//           console.warn(response.data.message)
//         }
//       } catch (error) {
//         console.error('Error validating token', error.message)
//         // Don't logout on network errors, just keep current state
//       }
//     }

//     validateToken()
//   }, [])

//   return (
//     <div>
//       <Header />

//       <Routes>
//         <Route path='/' element={<Hero />} />
//         <Route path='/login' element={<Login />} />
//         <Route path='/unicollab' element={<UniCollab />} />
//         <Route path='/profile' element={<Profile />} />
//         <Route path='/about' element={<AboutCommunity />} />
//         <Route path='/code-of-conduct' element={<CodeOfConduct />} />
//         <Route path='/privacy' element={<PrivacyPolicy />} />
//         <Route path='/terms' element={<TermsOfService />} />
//         <Route path='/study' element={<Study />}>
//           <Route index element={<Default />} />
//           <Route path=':subjectCode' element={<SubjectDetails />} />
//         </Route>
//       </Routes>
//     </div>
//   )
// }

// export default App

import Header from './components/innoVIT/Header.jsx'
import Hero from './components/innoVIT/Hero.jsx'
import Login from './components/Login.jsx'
import Signup from './components/Signup.jsx'
import Study from './components/study/Study.jsx'
import UniCollab from './components/unicollab/UniCollab.jsx'
import Default from './components/study/StudyDefault.jsx'
import { Routes, Route } from 'react-router-dom'
import { React, useEffect, useState } from 'react'
import { useAuth } from './utils/AuthContext.jsx'
import axios from 'axios'

import SubjectDetails from './components/study/SubjectDetails.jsx'
import Profile from './components/Profile.jsx'
import AboutCommunity from './components/unicollab/about-platform/AboutCommunity.jsx'
import CodeOfConduct from './components/unicollab/about-platform/CodeOfConduct.jsx'
import PrivacyPolicy from './components/unicollab/about-platform/PrivacyPolicy.jsx'
import TermsOfService from './components/unicollab/about-platform/TermsOfService.jsx'

const App = () => {
  const { login, logout, currentUser, isAuthenticated, isLoading } = useAuth()
  const [isCheckingAuth, setIsCheckingAuth] = useState(true)

  const API_URL = 'https://innovit-backend.onrender.com'


useEffect(() => {
  const validateToken = async () => {
    try {
      const token = localStorage.getItem('token')

      if (token) {
        const response = await axios.get(`${API_URL}/api/auth/validate-token`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        })

        if (response.data.valid) {
          login(response.data.username)
        } else {
          logout()
        }
      } else {
        logout()
      }
    } catch (error) {
      console.error('Error validating token:', error)
      logout()
    } finally {
      setIsCheckingAuth(false)
    }
  }

  validateToken()
}, [])

//   useEffect(() => {
//     const validateToken = async () => {
//       try {
//         console.log('Validating token on app load...')
//         const response = await axios.get(`${API_URL}/api/auth/validate-token`, {
//           withCredentials: true,
//         })

//         console.log('Token validation response:', response.data)

//         if (response.data.valid) {
//           // Update both AuthContext and localStorage
//           login(response.data.username)
//           localStorage.setItem('currentUser', response.data.username)
//           console.log('User authenticated:', response.data.username)
//         } else {
//           logout()
//           localStorage.removeItem('currentUser')
//           console.warn('Token invalid:', response.data.message)
//         }
//       } catch (error) {
//         console.error('Error validating token:', error.message)
//         // On network errors, check localStorage as fallback
//         const storedUser = localStorage.getItem('currentUser')
//         if (storedUser) {
//           console.log('Using stored user as fallback:', storedUser)
//           login(storedUser)
//         } else {
//           logout()
//         }
//       } finally {
//         setIsCheckingAuth(false)
//       }
//     }

//     validateToken()
//   }, [])

  // Show loading while checking authentication
if (isLoading || isCheckingAuth) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
        <p className="mt-4 text-gray-600">Loading...</p>
      </div>
    </div>
  )
}

  return (
    <div>
      <Header />

      <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
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

// ? https://innovit-server.onrender.com
