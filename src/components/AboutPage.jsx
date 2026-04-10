import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Services from './Services';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <main className="about-page bg-navy">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-bg">
          <img src="/images/milwaukee-hero.png" alt="About Creative Futures Milwaukee" />
        </div>
        <div className="wave-overlay" style={{ opacity: 0.6, zIndex: 0 }}></div>
        <div className="container about-hero-content">
          <motion.img 
            src="https://images.squarespace-cdn.com/content/v1/6973ec3f715c52426367c228/4268e772-7dc5-4a9d-81fd-6f9b2ed331b6/Creative+Futures_CF+LOGO+Stacked-30.png?format=500w"
            alt="Creative Futures Logo Stacked"
            className="about-hero-logo"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          />
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Turning Ideas Into Sustainable Ventures
          </motion.h1>
        </div>
      </section>

      {/* About Section */}
      <section className="about-intro-section section-padding">
        <div className="container narrative-split">
          <div className="about-single-column narrative-text">
            <h2 className="text-gold">About Creative Futures</h2>
            <p>Creative Futures is a year-round creative economy initiative designed to help artists, designers, and cultural entrepreneurs turn their ideas into sustainable ventures. Developed by Culture x Design, the program responds to a persistent gap in the creative economy: many talented creatives lack access to capital, professional networks, technical training, and institutional platforms needed to sustain their work.</p>
            <p>Rather than offering isolated workshops, Creative Futures operates as an integrated ecosystem of support. We combine business development, brand strategy, cultural competency, and community engagement into a cohesive, long-term pathway.</p>
            <p>Our model recognizes that creative success is not determined by talent alone. Access, relationships, infrastructure, and opportunity shape it. Creative Futures exists to close those gaps.</p>
          </div>
          <motion.div 
            className="narrative-media mosaic"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img src="/images/milwaukee-secondary.png" alt="Milwaukee Creative Growth" className="mosaic-img-1" />
            <div className="mosaic-accent bg-gold"></div>
            <div className="mosaic-accent bg-red"></div>
          </motion.div>
        </div>
      </section>

      {/* How it works */}
      <section className="about-how-it-works section-padding bg-light-navy">
        <div className="container">
          <div className="about-single-column">
            <h2 className="text-orange" style={{marginBottom: '40px'}}>How Creative Future Works</h2>
            <p style={{marginBottom: '40px', fontSize: '1.2rem'}}>Creative Futures is a flexible network of programs, events, and support designed to meet creatives where they are and connect them to the resources they need.</p>
            
            <div className="how-grid">
              <div className="how-card">
                <h3>Ways to Connect</h3>
                <p>Participants can engage through multiple entry points:</p>
                <ul>
                  <li>Attending public forums, workshops, and showcases</li>
                  <li>Exploring current programs listed on our website</li>
                  <li>Reaching out directly by email</li>
                </ul>
              </div>

              <div className="how-card">
                <h3>The Intake Form</h3>
                <p>To join the Creative Futures network and receive follow-up support, participants are encouraged to complete our intake form, available online or by direct link. Intake forms and surveys are also available at select events.</p>
                <p>This helps our team understand your goals and connect you with the most relevant opportunities.</p>
              </div>

              <div className="how-card">
                <h3>Ongoing Support</h3>
                <p>After reviewing your intake, our team follows up to help match you with programs, one-on-one support, or partner resources. Even when a specific offering is not publicly available, we work to help you access appropriate pathways through our network.</p>
                <p><strong>Creative Futures is designed as an ongoing support system, not a one-time program.</strong></p>
              </div>
            </div>

            <div className="intake-cta-block">
              <h3>Interested in joining?</h3>
              <p>Complete our Intake Form to get started.</p>
              <Link to="/intake" className="btn primary intake-btn">INTAKE FORM</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="about-leadership section-padding">
        <div className="container">
          <div className="about-single-column" style={{textAlign: 'center', marginBottom: '60px'}}>
            <h2 className="text-gold">Leadership</h2>
            <p>A collaborative leadership team leads Creative Futures with deep experience in cultural strategy, creative economy development, and community-centered systems-building.</p>
          </div>

          <div className="leadership-split">
            <div className="leader-profile">
              <div className="leader-img-wrapper">
                <img src="https://images.squarespace-cdn.com/content/v1/6973ec3f715c52426367c228/cf92667a-36fd-435d-ad52-2b402040decf/GeraudBlanks2.JPG?format=2500w" alt="Geraud Blanks" />
              </div>
              <div className="leader-info">
                <h3>Geraud Blanks</h3>
                <p className="leader-title text-mustard">Co-Founder, Culture x Design | Program Director</p>
                <p>Geraud Blanks is a cultural strategist, researcher, and community builder with more than a decade of experience supporting artists, media makers, and creative entrepreneurs across Milwaukee.</p>
                <p>Before founding Culture x Design, he led nationally recognized arts and community engagement initiatives, including the Cultures & Communities program at Milwaukee Film, and has produced major platforms such as the Summer of Soul Concert Series and the Black Birth Symposium. His work integrates storytelling, experiential design, and technical assistance to help creatives translate talent into sustainable practice.</p>
                <p>Through Creative Futures, Geraud brings together public agencies, philanthropic partners, and cultural networks to strengthen long-term creative infrastructure.</p>
              </div>
            </div>

            <div className="leader-profile">
              <div className="leader-img-wrapper">
                <img src="https://images.squarespace-cdn.com/content/v1/6973ec3f715c52426367c228/22fdd029-5f07-4412-9c31-2eb05e197f3b/maureenpostwoi2023011.jpg?format=2500w" alt="Maureen Post" />
              </div>
              <div className="leader-info">
                <h3>Maureen Post</h3>
                <p className="leader-title text-mustard">Co-Founder, Culture x Design | Director of Strategic Partnerships</p>
                <p>Maureen Post is a relationship-driven leader specializing in partnership development, sponsorship strategy, and cross-sector collaboration in the arts and creative economy.</p>
                <p>Before co-founding Culture x Design, she built extensive experience working with cultural institutions, media organizations, and community-based initiatives to expand access, visibility, and resources for underrepresented creatives. She has played a central role in developing platforms, including Summer of Soul and Creative Futures’ public forums and showcases.</p>
                <p>At Creative Futures, Maureen leads institutional and corporate engagement, connecting participants to funding, platforms, and long-term opportunities while aligning community impact with organizational sustainability.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Powered By Culture X Design */}
      <section className="about-cxd section-padding bg-orange">
        <div className="container center-text">
          <motion.h2 
            style={{ color: 'var(--cf-navy)', fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', marginBottom: '20px' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            ABOUT CULTURE X DESIGN
          </motion.h2>
          <motion.p 
            style={{ color: 'var(--cf-navy)', fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto', fontWeight: 600, lineHeight: 1.6 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, delay: 0.2 }}
          >
            Culture x Design is a Milwaukee-based experiential marketing and cultural communications firm that connects brands, institutions, and communities through mission-driven campaigns and programs. Founded in 2023, the firm specializes in equity-centered event curation, creative economy development, public engagement, and strategic storytelling. Culture x Design serves as the backbone organization for Creative Futures.
          </motion.p>
        </div>
      </section>

      {/* Partners */}
      <section className="about-partners section-padding">
        <div className="container">
          <div className="about-single-column text-center" style={{textAlign: 'center', marginBottom: '50px'}}>
            <h2 className="text-red">Partners</h2>
            <p style={{fontSize: '1.2rem'}}>Creative Futures collaborates with public agencies, philanthropic institutions, cultural organizations, and private-sector partners to strengthen the creative economy.</p>
            <p style={{marginTop: '15px'}}>The initiative is supported by the Greater Milwaukee Foundation and the Wisconsin Economic Development Corporation’s Small Business Technical Assistance Program, alongside Milwaukee Mutual Aid Network Inc.</p>
          </div>
        </div>
      </section>

      {/* Services component universally resolves the final explicit "Partner With Us / Contact" prompt */}
      <Services />

    </main>
  );
};

export default AboutPage;
