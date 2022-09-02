import React from 'react';
import Layout from '../components/Layout/layout';
import Hero from '../components/Homepage/Hero';
import About from '../components/Homepage/About';
import Support from '../components/Homepage/Support';
import AllInOne from '../components/Homepage/AllInOne';
import GetStarted from '../components/Homepage/GetStarted';

const Homepage = () => {
  return (
    <>
      <Layout>
        <Hero />
        <About />
        <Support />
        <AllInOne />
        <GetStarted />
      </Layout>
    </>
  );
};

export default Homepage;
