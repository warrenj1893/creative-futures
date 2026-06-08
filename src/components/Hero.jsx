import React from 'react';
import { motion } from 'framer-motion';
import SEO from './SEO';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero bg-orange">
      <SEO 
        title="Home" 
        description="Culture x Design's Creative Futures program empowers creative entrepreneurs to build sustainable, scalable businesses."
      />
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
          {/* Standard HTML5 video tag handles HLS natively in Safari, and gracefully displays the high-quality poster thumbnail in Chrome/Firefox where HLS is blocked or unsupported. */}
          <video
            src="/Creative-Futures-Ad-FINAL-WEB.mp4"
            autoPlay
            loop
            muted
            playsInline
            controls
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '8px',
              border: 'none'
            }}
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
