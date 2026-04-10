import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  return (
    <section className="about-section bg-mustard section-padding">
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        
        <motion.div 
          className="about-block"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>ABOUT CREATIVE FUTURES</h2>
          <p className="about-text-lead">
            Building better and more equitable futures for Milwaukee.
          </p>
          <div className="about-text-body">
            <p>Developed by Culture x Design, Creative Futures helps veteran and emerging creatives turn their ideas into sustainable ventures. Through workshops, labs, showcases, and one-on-one support, participants gain the tools, networks, and visibility needed to grow viable creative businesses.</p>
            <br/>
            <p>Rooted in Milwaukee’s cultural communities, Creative Futures centers equity, cultural fluency, and long-term impact—ensuring that creative talent is not only celebrated, but sustained.</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
