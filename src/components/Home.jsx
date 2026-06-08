import React from 'react';
import Hero from './Hero';
import FeaturedVideo from './FeaturedVideo';
import Events from './Events';
import About from './About';
import MoreAbout from './MoreAbout';
import Gallery from './Gallery';
import Services from './Services';

const Home = () => {
  return (
    <main>
      <Hero />
      <FeaturedVideo />
      <Events />
      <About />
      <MoreAbout />
      <Gallery />
      <Services />
    </main>
  );
};

export default Home;
