import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section bg-navy section-padding">
      <div className="container">
        <div className="footer-grid">
          
          <div className="footer-column">
             <img className="sunburst-logo" src="https://images.squarespace-cdn.com/content/v1/6973ec3f715c52426367c228/a5e9b1f5-b51a-49aa-958b-202cfba2ef8c/Creative+Futures_CF+LOGO+Straight.png?format=1500w" alt="Creative Futures" />
          </div>

          <div className="footer-column center-column">
            <p className="powered-by">POWERED BY</p>
            <a href="https://www.culturexdesign.com/" target="_blank" rel="noreferrer">
              <img className="cxd-logo" src="https://static.wixstatic.com/media/bdb71e_0874bbbee59242beb5032d04d0f88bbb~mv2.png/v1/crop/x_78,y_0,w_1844,h_285/fill/w_850,h_132,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Culture%20x%20Design%20Logo-%20orange.png" alt="Culture X Design" />
            </a>
            <p className="domain"><a href="https://www.culturexdesign.com/">www.culturexdesign.com</a></p>
          </div>

          <div className="footer-column right-column">
            <h3>CONTACT</h3>
            <p><a href="mailto:info@culturexdesign.com">info@culturexdesign.com</a></p>
            <div className="footer-socials">
              <a href="https://www.youtube.com/@culture-x-design" target="_blank" rel="noreferrer"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg></a>
              <a href="https://www.facebook.com/culturexdesign" target="_blank" rel="noreferrer"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
              <a href="https://www.instagram.com/culturebydesignllc" target="_blank" rel="noreferrer"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a>
              <a href="https://www.linkedin.com/company/culture-x-design" target="_blank" rel="noreferrer"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
