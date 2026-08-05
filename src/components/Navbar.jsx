import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import './Navbar.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);

      // Active section scrollspy logic
      const sections = document.querySelectorAll('section[id]');
      let current = '';
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 100) {
          current = section.getAttribute('id');
        }
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Trigger once on mount
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <div 
        className={clsx("mobile-overlay", isMenuOpen && "show")} 
        onClick={closeMenu}
      ></div>

      <nav className={clsx("navbar", isScrolled && "scrolled")} id="navbar">
        <div className="container">
          <a href="#hero" className="nav-logo" onClick={closeMenu}>
            <img src="/images/om-technocrats-logo.jpeg" alt="OM Technocrat Logo" className="nav-logo-img" />
          </a>
          
          <div className={clsx("nav-links", isMenuOpen && "open")}>
            <a href="#about" className={activeSection === 'about' ? 'active' : ''} onClick={closeMenu}>About</a>
            <a href="#clients" className={activeSection === 'clients' ? 'active' : ''} onClick={closeMenu}>Clients</a>
            <a href="#products" className={activeSection === 'products' ? 'active' : ''} onClick={closeMenu}>Products</a>
            <a href="#equipment" className={activeSection === 'equipment' ? 'active' : ''} onClick={closeMenu}>Equipment</a>
            <a href="#gallery" className={activeSection === 'gallery' ? 'active' : ''} onClick={closeMenu}>Gallery</a>
            <a href="#certifications" className={activeSection === 'certifications' ? 'active' : ''} onClick={closeMenu}>Certifications</a>
            <a href="#contact" className="nav-cta" onClick={closeMenu}>Contact Us</a>
          </div>
          
          <div className={clsx("nav-toggle", isMenuOpen && "active")} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>
    </>
  );
}
