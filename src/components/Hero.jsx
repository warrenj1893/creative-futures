import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero bg-orange">
      <div className="wave-overlay"></div>
      
      <div className="hero-content container">
        <motion.h1 
          className="hero-title"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          DESIGNED WITH YOU IN MIND.
        </motion.h1>
        
        <motion.div 
          className="hero-video-wrapper"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        >
          <img 
            src="https://video.squarespace-cdn.com/content/v1/6973ec3f715c52426367c228/e535bded-46b7-4201-950a-5613b5fd5164/thumbnail"
            alt="Creative Futures Hero"
            className="hero-image"
          />
        </motion.div>

        <motion.h3 
          className="hero-subtitle" 
          style={{ marginTop: '40px' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        >
          Creative Futures is a year-round creative economy initiative supporting artists, designers, and cultural entrepreneurs through hands-on training, mentorship, public platforms, and institutional partnerships.
        </motion.h3>
      </div>
    </section>
  );
};

export default Hero;
