import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Services from './Services';
import './Contact.css';

const Contact = () => {
  const [status, setStatus] = useState('');
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', message: '' });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      const response = await fetch("https://formsubmit.co/ajax/johnmccannwarren@gmail.com", {
        method: "POST",
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({ _subject: "New General Contact Message", ...formData })
      });
      if(response.ok) {
        setStatus('Message received. We will be in touch!');
        setFormData({ firstName: '', lastName: '', email: '', message: '' });
      } else setStatus('Network Error.');
    } catch { setStatus('Network Error.'); }
  };
  return (
    <main className="contact-page bg-navy">
      <section className="contact-hero section-padding" style={{ paddingTop: '150px' }}>
        <div className="container contact-split">
          
          <div className="contact-content">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Contact Us
            </motion.h1>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              Connect and Collaborate Today
            </motion.h3>

            <motion.div 
              className="team-bios"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <div className="bio-card">
                <h2>Geraud Blanks</h2>
                <h4>Co-Founder, Culture x Design | Program Director</h4>
                <a href="mailto:geraud@culturexdesign.com" className="email-link">geraud@culturexdesign.com</a>
                <p>Cultural strategist and community builder with over a decade of experience supporting Milwaukee artists and creative entrepreneurs.</p>
              </div>

              <div className="bio-card">
                <h2>Maureen Post</h2>
                <h4>Co-Founder, Culture x Design | Director of Strategic Partnerships</h4>
                <a href="mailto:maureen@culturexdesign.com" className="email-link">maureen@culturexdesign.com</a>
                <p>Relationship-driven leader specializing in partnership development and cross-sector collaboration in the creative economy.</p>
              </div>
            </motion.div>

            <motion.div 
              className="contact-socials"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <h4>Follow Our Network</h4>
              <div className="social-grid">
                <a href="https://www.youtube.com/@culture-x-design" target="_blank" rel="noreferrer">YouTube</a>
                <a href="https://www.facebook.com/culturexdesign" target="_blank" rel="noreferrer">Facebook</a>
                <a href="https://www.instagram.com/culturebydesignllc" target="_blank" rel="noreferrer">Instagram</a>
                <a href="https://www.linkedin.com/company/culture-x-design" target="_blank" rel="noreferrer">LinkedIn</a>
                <a href="https://www.tiktok.com/@culturexdesign" target="_blank" rel="noreferrer">TikTok</a>
              </div>
            </motion.div>

            <motion.div 
              className="quick-contact-form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              style={{ marginTop: '50px' }}
            >
              <h4 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '20px' }}>Send us a message</h4>
              <form onSubmit={handleSubmit} className="basic-contact-form">
                <div className="form-row">
                  <input type="text" name="firstName" placeholder="First Name *" value={formData.firstName} onChange={handleChange} required />
                  <input type="text" name="lastName" placeholder="Last Name *" value={formData.lastName} onChange={handleChange} required />
                </div>
                <input type="email" name="email" placeholder="Email *" value={formData.email} onChange={handleChange} required />
                <textarea name="message" rows="4" placeholder="Message *" value={formData.message} onChange={handleChange} required></textarea>
                <button type="submit" className="primary submit-btn" disabled={status === 'Sending...'}>
                  {status === 'Sending...' ? 'SENDING...' : 'SEND MESSAGE'}
                </button>
                {status && <p style={{ color: 'var(--cf-gold)', marginTop: '10px', fontWeight: 600 }}>{status}</p>}
              </form>
            </motion.div>
          </div>

          <motion.div 
            className="contact-image-wrapper"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img src="https://images.squarespace-cdn.com/content/v1/6973ec3f715c52426367c228/8e6ada72-a67b-4c73-a4a7-287622c2ee52/CF+Background+images-22.png?format=2500w" alt="Creative Futures Connect" />
          </motion.div>

        </div>
      </section>

      {/* Funnel user back to Intake form natively via the Services CTA module */}
      <Services />

    </main>
  );
};

export default Contact;
