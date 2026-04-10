import React from 'react';
import { motion } from 'framer-motion';
import './Events.css';

const Events = () => {
  const eventsData = [
    {
      src: "https://images.squarespace-cdn.com/content/v1/6973ec3f715c52426367c228/1773082827007-MVIV1FPFHF2PD3LU2425/Creative+Fututres-+Brand+2+Website+Image.jpg?format=750w",
      title: "Brand Milwaukee Part II: Is Our Sales Pitch Working for Everyone?",
      date: "Apr 21, 2026",
      desc: "An interactive session for makers and thinkers to collaborate, connect, and spark new ideas.",
      rsvp: "https://www.eventbrite.com/e/brand-milwaukee-pt-ii-is-our-sales-pitch-working-for-everyone-tickets-1984635470116?aff=oddtdtcreator"
    },
    {
      src: "https://images.squarespace-cdn.com/content/v1/6973ec3f715c52426367c228/1771340793320-HY24IRL43PO3NFJY49QT/Creative+Fututres-+Defining+the+Soul+Story+of+What+You+Do+.png?format=750w",
      title: "Civic Studios: Defining the Soul Story of What You Do",
      date: "May 19, 2026",
      desc: "Join us for an engaging presentation by marketing guru and Emmy Award–winning storyteller Greg Marshall, blending storytelling and neuroscience to help you clearly communicate the true value of your work to the people who need it most.",
      rsvp: null
    },
    {
      src: "https://images.squarespace-cdn.com/content/v1/6973ec3f715c52426367c228/1771291531584-BCNTYTPG7XAQN1JUQUCB/Creative-Fututres--Finding-the-Right-Words_Insta-%2B-Lkndin-Square.jpg?format=750w",
      title: "Creative Clinics: FindIng the Right Words",
      date: "Jun 4, 2026",
      desc: "Join us for a hands-on workshop with Greg Marshall and walk away with a powerful elevator pitch that connects with your audience and clearly communicates the true value of your work.",
      rsvp: null
    }
  ];

  return (
    <section className="events-section bg-navy section-padding">
      <div className="wave-overlay"></div>
      <div className="events-container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          UPCOMING EVENTS
        </motion.h2>
        
        <div className="events-gallery">
          {eventsData.map((evt, idx) => (
            <motion.div 
              className="event-item" 
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <img src={evt.src} alt={`Creative Future Event ${idx + 1}`} />
              <div className="event-info">
                <h3>{evt.title}</h3>
                <p style={{ color: "var(--cf-gold)", marginBottom: "15px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px" }}>{evt.date}</p>
                <p style={{ fontWeight: 400, color: "#ffffff", opacity: 0.9 }}>{evt.desc}</p>
                
                {evt.rsvp ? (
                  <a href={evt.rsvp} target="_blank" rel="noreferrer">
                    <button className="primary" style={{marginTop: '25px'}}>RSVP NOW</button>
                  </a>
                ) : (
                  <button className="primary" style={{marginTop: '25px', opacity: 0.5, cursor: 'not-allowed'}} disabled>COMING SOON</button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
