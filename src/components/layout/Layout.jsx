import React from 'react';
// import Header from '../Header';
import Footer from '../Footer';
import Header from '../Header';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-dark-bg text-white">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;