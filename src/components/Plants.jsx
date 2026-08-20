import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { plantData } from '../constants/plantData';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './Plants.css';

export default function Plants() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Calculate how many slides we can show based on screen width
  const [visibleCards, setVisibleCards] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, plantData.length - visibleCards);

  const nextSlide = () => {
    setCurrentIndex(prev => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex(prev => (prev <= 0 ? maxIndex : prev - 1));
  };

  // Auto-scrolling logic
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(timer);
  }, [isPaused, maxIndex]);

  return (
    <section className="section" id="plants">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <motion.div
            className="section-label" style={{ justifyContent: 'center' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Plants
          </motion.div>
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            World-Class <span style={{ color: 'var(--orange)' }}>Facilities</span>
          </motion.h2>
        </div>

        <div
          className="plants-carousel-wrapper"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          <button className="carousel-btn prev" onClick={prevSlide} aria-label="Previous plant">
            <ChevronLeft size={24} />
          </button>

          <div className="plants-carousel-viewport">
            <div
              className="plants-track"
              style={{
                transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`
              }}
            >
              {plantData.map((plant) => (
                <div
                  key={plant.id}
                  className="plant-carousel-card"
                  style={{ flex: `0 0 ${100 / visibleCards}%` }}
                >
                  <div className="plant-card-inner">
                    <div className="plant-image-banner">
                      <img src={plant.image} alt={plant.title} loading="lazy" />
                    </div>
                    {/* <div className="plant-content">
                      <h4>{plant.title}</h4>
                    </div> */}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button className="carousel-btn next" onClick={nextSlide} aria-label="Next plant">
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="carousel-dots" style={{ marginTop: '30px' }}>
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <div
              key={idx}
              className={`carousel-dot ${currentIndex === idx ? 'active' : ''}`}
              onClick={() => setCurrentIndex(idx)}
            ></div>
          ))}
        </div>

      </div>
    </section>
  );
}
