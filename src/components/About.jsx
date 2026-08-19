import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">

        {/* Section Heading */}
        <motion.div
          className="section-label about-section-label"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About Us
        </motion.div>

        {/* Main About Heading */}
        <motion.h2
          className="section-title about-section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Growing Through Manufacturing Excellence<br />
          Since <span style={{ color: 'var(--orange)' }}>1994</span>
        </motion.h2>

        {/* Introductory Text */}
        <motion.p
          className="section-subtitle about-section-subtitle"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Three decades of manufacturing excellence, delivering world-class
          automotive components to global OEMs.
        </motion.p>

        {/* About Content */}
        <div className="about-grid">
          <motion.div
            className="about-description"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              ease: 'easeOut',
              delay: 0.3
            }}
          >
            <h3>Built on Experience. Driven by Precision.</h3>

            <p>
              Founded in 1994 by Mr. Dineshsingh Raghunathsingh Patil and Mr.
              Ranjeetsingh Dhangar Rajput, OM TECHNOCRAT PVT. LTD. has grown
              into a trusted automotive sheet metal manufacturing company
              serving leading OEMs and Tier-1 suppliers. Operating from five
              manufacturing facilities in Nashik and two facilities in Chakan,
              Pune, with a combined manufacturing area of approximately 197,000
              sq. ft., we deliver precision-engineered sheet metal components,
              seat frame assemblies, tooling, and fabrication solutions backed
              by advanced manufacturing capabilities.
            </p>

            <p>
              Supported by 400+ skilled professionals and an IATF
              16949:2016-certified quality management system, we remain
              committed to engineering excellence, precision, reliability,
              and continuous improvement—building long-term partnerships
              through quality manufacturing.
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
}