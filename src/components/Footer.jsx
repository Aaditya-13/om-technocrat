import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import './Footer.css';

export default function Footer() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 600);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="footer" id="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <a href="#hero" className="nav-logo">
                <img src="/images/om-technocrats-logo.jpeg" alt="OM Technocrat Logo" className="nav-logo-img" />
              </a>
              <p>Precision engineered automotive sheet metal parts manufacturer serving global OEMs since 1994. IATF 16949:2016 certified.</p>
              <div className="footer-social">
                <a href="#" title="LinkedIn" aria-label="LinkedIn">in</a>
                <a href="#" title="Facebook" aria-label="Facebook">f</a>
                <a href="#" title="Twitter" aria-label="Twitter">𝕏</a>
              </div>
            </div>
            <div className="footer-col">
              <h5>Quick Links</h5>
              <ul>
                <li><a href="#about">About Us</a></li>
                <li><a href="#products">Products</a></li>
                <li><a href="#equipment">Equipment</a></li>
                <li><a href="#certifications">Certifications</a></li>
                <li><a href="#gallery">Gallery</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h5>Products</h5>
              <ul>
                <li><a href="#products">Seat Frames</a></li>
                <li><a href="#products">SUV 2nd Row Frames</a></li>
                <li><a href="#products">Seat Cushion Pan</a></li>
                <li><a href="#products">Sheet Metal Parts</a></li>
                <li><a href="#products">Seat Frame Tools</a></li>
                <li><a href="#products">Risers</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h5>Contact</h5>
              <ul>
                <li><a href="tel:+918888832302">+91 8888832302</a></li>
                <li><a href="mailto:psunil@omtechnocrat.com">psunil@omtechnocrat.com</a></li>
                <li><a href="#contact">D-44/1, MIDC Ambad, Nashik</a></li>
                <li><a href="#contact">Maharashtra – 422010</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© 2024 OM TECHNOCRAT PVT. LTD. All rights reserved.</span>
            <span>Precision • Engineering Excellence • Trust</span>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <button 
        className={clsx("scroll-top", showScroll && "show")} 
        onClick={scrollToTop} 
        aria-label="Scroll to top"
      >
        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </>
  );
}
