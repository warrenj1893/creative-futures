import React from 'react';
import Hero from './Hero';
import Events from './Events';
import About from './About';
import MoreAbout from './MoreAbout';
import Gallery from './Gallery';
import Services from './Services';

const Home = () => {
  return (
    <main>
      <Hero />
      <Events />
      <About />
      <MoreAbout />
      <Gallery />
      <Services />
    </main>
  );
};

export default Home;
