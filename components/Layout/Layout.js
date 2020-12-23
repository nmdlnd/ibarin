import React from 'react';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="max-w-screen-sm sm:max-w-screen-md mx-auto">
        {children}
      </div>
      <Footer />
    </>
  );
};

export default Layout;
