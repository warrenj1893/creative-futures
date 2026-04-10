import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './Services.css';

const Services = () => {
  const navigate = useNavigate();
  return (
    <section className="services-section bg-red section-padding">
      <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
        <motion.h2 
          className="section-title services-title" 
          style={{ color: 'var(--text-primary)', marginBottom: '20px' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          WORK WITH US
        </motion.h2>
        
        <motion.div 
          className="intake-form"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <p style={{ fontSize: '1.2rem', marginBottom: '30px' }}>
            We're actively seeking independent creators, strategic brand partners, and dedicated institutional organizations to plug into the Creative Futures network. Build with us below.
          </p>
          <button className="primary submit-btn" onClick={() => navigate('/intake')} style={{ width: '100%', maxWidth: '400px', margin: '0 auto' }}>
            START YOUR INTAKE PROFILE
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
