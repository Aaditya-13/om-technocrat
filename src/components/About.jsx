import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <motion.div 
          className="section-label"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >About Us</motion.div>
        
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Engineering Precision<br />Since <span style={{ color: 'var(--orange)' }}>1994</span>
        </motion.h2>
        
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Three decades of manufacturing excellence, delivering world-class automotive components to global OEMs.
        </motion.p>

        <div className="about-grid">
          <motion.div 
            className="about-image"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          >
            <img src="/images/about-factory.png" alt="OM Technocrat Manufacturing Facility" loading="lazy" />
          </motion.div>
          <motion.div 
            className="about-description"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          >
            <h3>A Legacy of Manufacturing Excellence</h3>
            <p>Founded in 1994, OM TECHNOCRAT PVT. LTD. has grown from a modest operation in Nashik, India to a globally recognized manufacturer of automotive sheet metal parts. With over three decades of expertise, we serve some of the world's most prestigious automotive OEMs and Tier-1 suppliers.</p>
            <p>Our commitment to quality, precision engineering, and continuous innovation has earned us the trust of clients across India, USA, Australia, and Europe. We hold the prestigious IATF 16949:2016 certification, reflecting our dedication to automotive quality management systems.</p>

            <div className="about-features">
              <div className="about-feature">
                <span className="about-feature-icon">✓</span>
                IATF Certified
              </div>
              <div className="about-feature">
                <span className="about-feature-icon">⚙</span>
                CNC Precision
              </div>
              <div className="about-feature">
                <span className="about-feature-icon">🌐</span>
                Global Reach
              </div>
              <div className="about-feature">
                <span className="about-feature-icon">🔧</span>
                In-house Tooling
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
