import React from 'react';
import { motion } from 'framer-motion';
import Services from './Services';
import './Programs.css';

const Programs = () => {
  const programsData = [
    {
      title: "Civic Studios",
      subtitle: "Public Dialogue & Idea Labs",
      description: "Civic Studios is Creative Futures’ public forum platform that brings creatives, community leaders, and institutional partners together to examine issues shaping Milwaukee’s cultural and economic future.\n\nThrough moderated panels, community discussions, and public engagement, Civic Studios connects creative practice to civic impact and community leadership.",
      color: "text-orange"
    },
    {
      title: "Creative Clinics",
      subtitle: "Workshops & Professional Skill Development",
      description: "Creative Labs are hands-on workshops and short learning series designed to help creatives build essential business and professional skills. Topics include pricing & invoicing, brand marketing, grant writing, funding strategies, audience development and much more. Participants leave with practical tools, real-time guidance, and clear next steps they can apply immediately.",
      color: "text-mustard"
    },
    {
      title: "One-on-One Technical Assistance",
      subtitle: "Customized Business & Brand Support",
      description: "Creative Futures provides individualized consulting and coaching tailored to each participant’s goals.\n\nSupport includes business planning, brand storytelling, funding strategies, contracts, pricing, sponsorship decks, and professional systems that turn ideas into executable plans.",
      color: "text-red"
    },
    {
      title: "Creative Exchange",
      subtitle: "Showcases, Visibility & Market Access",
      description: "Creative Exchange is a quarterly public showcase series spotlighting new ventures, emerging projects, and creative leaders.\n\nThese events combine short presentations, facilitated conversation, and networking to help participants build audiences, attract partners, and prepare projects for market readiness.",
      color: "text-gold"
    }
  ];

  return (
    <main className="programs-page">
      {/* AI Hero Splash */}
      <section className="programs-hero">
        <div className="programs-hero-bg">
          <img src="https://images.squarespace-cdn.com/content/v1/6973ec3f715c52426367c228/2c4acb9b-2c82-4d4a-a588-2a20734d60e2/CF+Background+images-21.png?format=2500w" alt="Creative Futures AI City" />
        </div>
        <div className="wave-overlay" style={{ opacity: 0.8, mixBlendMode: 'normal' }}></div>
        
        <div className="container programs-hero-content">
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            OUR PROGRAMS
          </motion.h1>
          <motion.h3 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Creative Futures offers a range of programs designed to meet creatives at different stages of development.
          </motion.h3>
        </div>
      </section>

      {/* Program Detailed Layout */}
      <section className="programs-detailed-section bg-navy section-padding">
        <div className="container programs-split">
          
          {/* Left Column: Images */}
          <div className="programs-images">
            <motion.img 
              src="https://images.squarespace-cdn.com/content/v1/6973ec3f715c52426367c228/1771259079393-2TQHPZV3GGQ532PGE63R/Creative_Futures_events4.jpg?format=2500w" 
              alt="Creative Futures Event 1"
              className="prog-img img-top"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            />
            <motion.img 
              src="https://images.squarespace-cdn.com/content/v1/6973ec3f715c52426367c228/3dbb8e01-20cc-40e5-8f54-453ce8afb10b/Creative_Futures_events13.jpg?format=2500w" 
              alt="Creative Futures Event 2"
              className="prog-img img-bottom"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </div>

          {/* Right Column: Full Text */}
          <div className="programs-list">
            {programsData.map((prog, idx) => (
              <motion.div 
                className="program-row" 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
              >
                <div className={`prog-divider ${prog.color}`}></div>
                <h2 className={prog.color}>{prog.title}</h2>
                <h4>{prog.subtitle}</h4>
                <p style={{ whiteSpace: "pre-wrap" }}>{prog.description}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Client Intake Funnel */}
      <Services />

    </main>
  );
};

export default Programs;
