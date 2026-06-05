import React from 'react';
import { motion } from 'framer-motion';
import './Events.css';

const Events = () => {
  const workshopsData = [
    {
      src: "/images/brand-milwaukee-3.png",
      title: "Brand Milwaukee III: Milwaukee Transplants",
      subtitle: "Why People Come, Why People Stay, and Why People Leave",
      date: "Tue, Jun 9, 2026",
      time: "6:30 PM Doors | 7:00 PM Program",
      location: "Arts @ Large (1100 S. 5th St.)",
      desc: "Explore Milwaukee's evolving reputation, identity, and story through the lens of transplants, returnees, and leavers. Moderated by Kim Shine and featuring panels with Elmer Moore, Aaron Price, CK Ledesma, and Gevonchai Hudnall.",
      rsvp: "https://www.eventbrite.com/e/brand-milwaukee-iii-milwaukee-transplants-tickets-1990205315674"
    },
    {
      src: "/images/canva-101.png",
      title: "Canva 101: A Creative’s Guide to Getting Started",
      subtitle: "Professional Graphics for Beginners",
      date: "Thu, Jul 9, 2026",
      time: "6:30 PM Doors | 7:00 PM Program",
      location: "Fruition MKE (Concordia 27 - 819 N. 27th St.)",
      desc: "No design degree required. A hands-on, practical workshop walking emerging creatives through Canva basics. Learn layout principles, typography, assets, and branding kits to establish your startup's visual voice. Bring a laptop or tablet.",
      rsvp: "https://www.eventbrite.com/e/canva-101-a-creatives-guide-to-getting-started-tickets-1990734592756"
    },
    {
      src: "/images/more-than-maker.png",
      title: "More Than a Maker: Building a Brand That Speaks for Your Art",
      subtitle: "Strategic Branding Workshop",
      date: "Sat, Jul 18, 2026",
      time: "1:00 PM Program",
      location: "Fruition MKE (Concordia 27 - 819 N. 27th St.)",
      desc: "Root your creative practice in solid brand strategy. Facilitator Lily Dysart walks you through defining your brand's purpose, personality, market positioning, and audience perception to align your craft with sustainable business operations.",
      rsvp: "https://www.eventbrite.com/e/more-than-a-maker-building-a-brand-that-speaks-for-your-art-tickets-1990730442342"
    },
    {
      src: "/images/canva-pro.png",
      title: "Canva Pro: A Creative’s Guide to Going Further",
      subtitle: "Advanced Design Tools & Systems",
      date: "Thu, Jul 23, 2026",
      time: "6:30 PM Doors | 7:00 PM Program",
      location: "Fruition MKE (Concordia 27 - 819 N. 27th St.)",
      desc: "Unlock the professional design suite. Go beyond templates with hands-on training in Canva Pro's Brand Kits, custom video animation, background removals, smart resizing, batch file generation, and dynamic publishing workflows.",
      rsvp: "https://www.eventbrite.com/e/canva-pro-a-creatives-guide-to-going-further-tickets-1990731306928?aff=oddtdtcreator"
    }
  ];

  return (
    <section className="events-section bg-navy section-padding-y">
      <div className="wave-overlay"></div>
      
      <div className="events-container container">
        <div className="events-header">
          <motion.h1 
            className="events-page-title"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Upcoming Workshops
          </motion.h1>
          <motion.p
            className="events-page-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Hands-on technical assistance, pricing workshops, and strategic marketing clinics designed to help Milwaukee creatives build sustainable ventures.
          </motion.p>
        </div>

        <div className="workshops-grid">
          {workshopsData.map((evt, idx) => (
            <motion.div 
              className="event-card" 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
            >
              <div className="event-card-img-wrapper">
                <img src={evt.src} alt={evt.title} />
              </div>
              <div className="event-card-info">
                <div className="card-header-group">
                  <div className="card-badge-row">
                    <span className="card-badge">Workshop</span>
                  </div>
                  <h3 className="card-title">{evt.title}</h3>
                  <h4 className="card-subtitle text-gold">{evt.subtitle}</h4>
                </div>
                
                <div className="card-meta">
                  <p><strong>📅 {evt.date}</strong></p>
                  {evt.time && <p>🕒 {evt.time}</p>}
                  <p>📍 {evt.location}</p>
                </div>
                
                <p className="card-desc">{evt.desc}</p>
                
                <a href={evt.rsvp} target="_blank" rel="noreferrer" className="card-rsvp-link">
                  <button className="primary card-rsvp-btn">REGISTER ON EVENTBRITE</button>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
