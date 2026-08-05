import React, { useState, useEffect } from 'react';
import clsx from 'clsx';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
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
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#clients" onClick={closeMenu}>Clients</a>
            <a href="#products" onClick={closeMenu}>Products</a>
            <a href="#equipment" onClick={closeMenu}>Equipment</a>
            <a href="#gallery" onClick={closeMenu}>Gallery</a>
            <a href="#certifications" onClick={closeMenu}>Certifications</a>
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
