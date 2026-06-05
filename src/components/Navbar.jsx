import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMenu = () => setIsMobileMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="nav-logo">
            <Link to="/">
              <img src="https://images.squarespace-cdn.com/content/v1/6973ec3f715c52426367c228/a5e9b1f5-b51a-49aa-958b-202cfba2ef8c/Creative+Futures_CF+LOGO+Straight.png?format=1500w" alt="Creative Futures" />
            </Link>
          </div>
          <div className="mobile-menu-btn" onClick={toggleMenu}>
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </div>
          <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
            <li><Link to="/about" onClick={closeMenu}>ABOUT</Link></li>
            <li><Link to="/programs" onClick={closeMenu}>PROGRAMS</Link></li>
            <li><Link to="/events" onClick={closeMenu}>EVENTS</Link></li>
            <li><Link to="/intake" onClick={closeMenu}>INTAKE</Link></li>
            <li><Link to="/contact" onClick={closeMenu}>CONTACT</Link></li>
          </ul>
        </div>
      </nav>

      <div className="social-sidebar">
        <a href="https://www.facebook.com/culturexdesign" target="_blank" rel="noreferrer" title="Facebook">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
        </a>
        <a href="https://www.instagram.com/culturebydesignllc" target="_blank" rel="noreferrer" title="Instagram">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
        </a>
        <a href="https://www.linkedin.com/company/culture-x-design" target="_blank" rel="noreferrer" title="LinkedIn">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
        </a>
        <a href="https://www.youtube.com/@culture-x-design" target="_blank" rel="noreferrer" title="YouTube">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"></path><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"></polygon></svg>
        </a>
        <a href="https://www.tiktok.com/@culturexdesign" target="_blank" rel="noreferrer" title="TikTok">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path></svg>
        </a>
      </div>
    </>
  );
};

export default Navbar;
