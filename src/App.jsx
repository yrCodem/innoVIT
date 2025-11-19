import Header from './components/innoVIT/Header.jsx'
import Hero from './components/innoVIT/Hero.jsx'
import Login from './components/Login.jsx'
import Signup from './components/Signup.jsx'
import Study from './components/study/Study.jsx'
import UniCollab from './components/unicollab/UniCollab.jsx'
import Default from './components/study/StudyDefault.jsx'
import { Routes, Route } from 'react-router-dom'
import { React } from 'react'
import { useAuth } from './utils/AuthContext.jsx'

import SubjectDetails from './components/study/SubjectDetails.jsx'
import Profile from './components/Profile.jsx'
import AboutCommunity from './components/unicollab/about-platform/AboutCommunity.jsx'
import CodeOfConduct from './components/unicollab/about-platform/CodeOfConduct.jsx'
import PrivacyPolicy from './components/unicollab/about-platform/PrivacyPolicy.jsx'
import TermsOfService from './components/unicollab/about-platform/TermsOfService.jsx'

const App = () => {
  const { loading } = useAuth()

  // Show loading while checking authentication
  if (loading) {
    return (
      <div className='min-h-screen flex items-center justify-center bg-[#080912]'>
        <div className='text-center'>
          <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto'></div>
          <p className='mt-4 text-gray-300'>Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <div className='relative min-h-screen bg-[#080912]'>
      <Header />

      {/* Main content area */}
      <main className='relative z-10'>
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
      </main>
    </div>
  )
}

export default App

// ? https://innovit-server.onrender.com
