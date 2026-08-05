import React from 'react';
import { galleryImages } from '../constants';
import './Gallery.css';

export default function Gallery() {

  return (
    <section className="section" id="gallery">
      <div className="container">
        <div style={{ textAlign: 'center' }}>
          <div className="section-label reveal" style={{ justifyContent: 'center' }}>Gallery</div>
          <h2 className="section-title reveal">Inside Our <span style={{ color: 'var(--orange)' }}>Facilities</span></h2>
          <p className="section-subtitle reveal" style={{ margin: '0 auto' }}>A glimpse into our state-of-the-art manufacturing plants, equipment, and quality processes.</p>
        </div>

        <div className="gallery-grid">
          {galleryImages.map((img, idx) => (
            <div key={idx} className={`gallery-item reveal-scale ${img.delay}`}>
              <img 
                src={`/images/${img.src}`} 
                alt={img.label} 
                loading="lazy" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              />
              <div className="gallery-overlay">{img.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
