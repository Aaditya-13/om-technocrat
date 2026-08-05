import React from 'react';

export default function Gallery() {
  const images = [
    { src: "gallery-factory.png", label: "Main Factory Floor", delay: "stagger-1" },
    { src: "gallery-press.png", label: "Press Shop", delay: "stagger-2" },
    { src: "gallery-welding.png", label: "Welding Cell", delay: "stagger-3" },
    { src: "gallery-quality.png", label: "Quality Lab", delay: "stagger-4" },
    { src: "gallery-finished.png", label: "Finished Products", delay: "stagger-5" },
    { src: "gallery-assembly.png", label: "Assembly Line", delay: "stagger-6" }
  ];

  return (
    <section className="section" id="gallery">
      <div className="container">
        <div style={{ textAlign: 'center' }}>
          <div className="section-label reveal" style={{ justifyContent: 'center' }}>Gallery</div>
          <h2 className="section-title reveal">Inside Our <span style={{ color: 'var(--orange)' }}>Facilities</span></h2>
          <p className="section-subtitle reveal" style={{ margin: '0 auto' }}>A glimpse into our state-of-the-art manufacturing plants, equipment, and quality processes.</p>
        </div>

        <div className="gallery-grid">
          {images.map((img, idx) => (
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
