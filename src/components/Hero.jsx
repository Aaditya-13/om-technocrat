import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import Stats from './Stats';
import './Hero.css';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [particles, setParticles] = useState([]);
  const SLIDE_DURATION = 5000;
  const totalSlides = 4;

  useEffect(() => {
    const generatedParticles = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100 + '%',
      animationDuration: (Math.random() * 10 + 8) + 's',
      animationDelay: (Math.random() * 8) + 's',
      size: (Math.random() * 3 + 1) + 'px'
    }));
    setParticles(generatedParticles);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, SLIDE_DURATION);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="hero" id="hero">
      <div className="hero-slideshow">
        {[1, 2, 3, 4].map((num, idx) => (
          <div key={num} className={clsx("hero-slide", currentSlide === idx && "active")}>
            <img
              src={`/images/landing/landing-${num}.jpeg`}
              alt={`Slide ${num}`}
              loading={idx === 0 ? "eager" : "lazy"}
            />
          </div>
        ))}
      </div>

      <div className="hero-overlay"></div>

      <div className="hero-particles">
        {particles.map((p) => (
          <div
            key={p.id}
            className="hero-particle"
            style={{
              left: p.left,
              animationDuration: p.animationDuration,
              animationDelay: p.animationDelay,
              width: p.size,
              height: p.size
            }}
          />
        ))}
      </div>

      <div className="container hero-content">
        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          OM <span className="hero-title-accent">TECHNOCRAT</span><br />PVT. LTD.
        </motion.h1>
        <motion.p
          className="hero-tagline"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          Precision Engineered Automotive Sheet Metal Parts — Trusted by the World's Leading OEMs
        </motion.p>
        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        >
          <div className="hero-buttons">
            <a href="#products" className="btn btn-primary">
              <i className="ph ph-magnifying-glass" style={{ fontSize: '20px' }}></i>
              Explore Products
            </a>
            <a href="#contact" className="btn btn-outline">
              <i className="ph ph-envelope-simple" style={{ fontSize: '20px' }}></i>
              Contact Us
            </a>
          </div>
        </motion.div>
      </div>

      <div className="hero-slider-nav">
        {[0, 1, 2, 3].map((idx) => (
          <button
            key={idx}
            className={clsx("hero-dot", currentSlide === idx && "active")}
            onClick={() => goToSlide(idx)}
            aria-label={`Slide ${idx + 1}`}
          ></button>
        ))}
      </div>

      <Stats />
    </section>
  );
}
