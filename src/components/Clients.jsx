import React, { useState, useRef, useEffect } from 'react';
import { clientsList as clients } from '../constants/clientsData.js';
import './Clients.css';

export default function Clients() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef(null);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const scrollPosition = scrollRef.current.scrollLeft;
    // client-card width is 200px + 20px margin = 220px
    const cardWidth = 220;
    const newIndex = Math.round(scrollPosition / cardWidth);
    if (newIndex !== activeIndex) {
      setActiveIndex(newIndex % clients.length);
    }
  };

  useEffect(() => {
    if (isPaused) return;
    let animationFrameId;

    const autoScroll = () => {
      if (scrollRef.current) {
        scrollRef.current.scrollLeft += 1; // 1px per frame

        // If we reach the end of the first set, seamlessly loop back
        const maxScroll = (clients.length * 220);
        if (scrollRef.current.scrollLeft >= maxScroll) {
          scrollRef.current.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(autoScroll);
    };

    animationFrameId = requestAnimationFrame(autoScroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, [clients.length, isPaused]);

  const scrollTo = (index) => {
    if (!scrollRef.current) return;
    const cardWidth = 220;
    scrollRef.current.scrollTo({
      left: index * cardWidth,
      behavior: 'smooth'
    });
  };

  return (
    <section className="section section-alt" id="clients">
      <div className="container">
        <div style={{ textAlign: 'center' }}>
          <div className="section-label reveal" style={{ justifyContent: 'center' }}>Our Clients</div>
          <h2 className="section-title reveal">Trusted by <span style={{ color: 'var(--orange)' }}>Industry Leaders</span></h2>
          <p className="section-subtitle reveal" style={{ margin: '0 auto' }}>Partnering with the world's most prestigious automotive OEMs and Tier-1 suppliers across four continents.</p>
        </div>

        <div className="clients-carousel-container">
          <div
            className="clients-grid"
            id="clientsGrid"
            ref={scrollRef}
            onScroll={handleScroll}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
            onFocus={() => setIsPaused(true)}
            onBlur={() => setIsPaused(false)}
            tabIndex="0"
            aria-label="Clients carousel"
            role="region"
          >
            {clients.map((client, idx) => (
              <div key={idx} className={`client-card reveal ${client.delay}`}>
                <div className="client-card-inner">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="client-logo"
                  />

                  <span>{client.name}</span>
                </div>
              </div>
            ))}
            {/* Clone for infinite loop */}
            {clients.map((client, idx) => (
              <div key={`clone-${idx}`} className={`client-card reveal ${client.delay}`} aria-hidden="true">
                <div className="client-card-inner">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="client-logo"
                  />
                  <span>{client.name}</span>
                </div>
              </div>
            ))}
            {/* Second clone to ensure smooth wrapping on ultra-wide screens */}
            {clients.map((client, idx) => (
              <div key={`clone2-${idx}`} className={`client-card reveal ${client.delay}`} aria-hidden="true">
                <div className="client-card-inner">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="client-logo"
                  />
                  <span>{client.name}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="carousel-dots">
            {clients.map((_, idx) => (
              <button
                key={idx}
                className={`carousel-dot ${activeIndex === idx ? 'active' : ''}`}
                onClick={() => scrollTo(idx)}
                aria-label={`Go to client slide ${idx + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
