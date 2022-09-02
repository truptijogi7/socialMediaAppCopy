import React from 'react';
import Footer from './footer';
import Header from './header';
import Header1 from './Header1';

const Layout = ({ children }) => {
  return (
    <>
      <Header1 />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
