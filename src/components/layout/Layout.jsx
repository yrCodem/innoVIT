import React from 'react'
// import Header from '../Header';
import Header from '../Header.jsx'
import Sidebar from './Sidebar.jsx'
import RightSidebar from './RightSidebar.jsx'
import Footer from '../Footer.jsx'

const Layout = ({ children }) => {
  return (
    // <div className='min-h-screen bg-dark-bg text-white'>
    //   <Header />
    //   <main>{children}</main>
    //   <Footer />
    // </div>
    <div className='min-h-screen bg-inherit'>
      {/* <Header /> */}
      <Sidebar />
      <main className='lg:pl-72 xl:pr-80'>
        <div className='px-4 py-4 sm:px-6 lg:px-8'>{children}</div>
      </main>
      <RightSidebar />
      {/* <Footer /> */}
    </div>
  )
}

export default Layout
