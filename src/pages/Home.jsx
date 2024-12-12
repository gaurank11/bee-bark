import React from 'react';

import { Categories } from '../components/Categories';
import { Professionals } from '../components/Professionals';
import HeroSection from '../components/Hero';
import AboutUs from '../components/aboutus';
import Hero1 from '../components/DreamHero';

const Home = () => {
  return (

    <>
      <HeroSection />
      <Hero1 />
      <AboutUs />
      <Categories />
      <Professionals />
     
     </>
  )
}

export default Home
