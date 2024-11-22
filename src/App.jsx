import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Login from './components/Login.jsx'
import Study from './components/Study.jsx'
import UniCollab from './components/UniCollab.jsx'
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Header/>
      
      <Routes>
        <Route path='/' element={<Hero/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/study/*' element={<Study/>} />
        <Route path='/unicollab' element={<UniCollab/>} />
      </Routes>

    </div>
  )
}

export default App
