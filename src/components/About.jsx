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
            <img src="/images/about-factory.jpeg" alt="OM Technocrat Manufacturing Facility" loading="lazy" />
          </motion.div>
          <motion.div
            className="about-description"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          >
            <h3>Built on Experience. Driven by Precision.</h3>

            <p>Founded in 1994 by Mr. Dineshsingh Raghunathsingh Patil and Mr. Ranjeetsingh Dhangar Rajput, OM TECHNOCRAT PVT. LTD. has grown into a trusted automotive sheet metal manufacturing company serving leading OEMs and Tier-1 suppliers.</p>

            <p>Operating from five manufacturing facilities in Nashik and two facilities in Chakan, Pune, with a combined manufacturing area of approximately 197,000 sq. ft., we deliver precision-engineered sheet metal components, seat frame assemblies, tooling, and fabrication solutions backed by advanced manufacturing capabilities.</p>

            <p>Supported by 400+ skilled professionals and an IATF 16949:2016-certified quality management system, we remain committed to engineering excellence, precision, reliability, and continuous improvement—building long-term partnerships through quality manufacturing.</p>

          </motion.div>
        </div>

        <motion.div
          className="about-features"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
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
        </motion.div>
      </div>
    </section>
  );
}
