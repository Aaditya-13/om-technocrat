import React from 'react';

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="section-label reveal">About Us</div>
        <h2 className="section-title reveal">Engineering Precision<br />Since <span style={{ color: 'var(--orange)' }}>1994</span></h2>
        <p className="section-subtitle reveal">Three decades of manufacturing excellence, delivering world-class automotive components to global OEMs.</p>

        <div className="about-grid">
          <div className="about-image reveal-left">
            <img src="/images/about-factory.png" alt="OM Technocrat Manufacturing Facility" loading="lazy" />
          </div>
          <div className="about-description reveal-right">
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
          </div>
        </div>

        {/* Group Plants */}
        <div className="plants-grid">
          <div className="plant-card reveal stagger-1">
            <div className="plant-icon">🏭</div>
            <h4>Plant 1 — Main Facility</h4>
            <p>D-44/1, MIDC Area, Ambad, Nashik. Our primary manufacturing hub equipped with stamping, welding, and assembly lines for high-volume production.</p>
          </div>
          <div className="plant-card reveal stagger-2">
            <div className="plant-icon">⚙️</div>
            <h4>Plant 2 — Tooling Unit</h4>
            <p>Dedicated tooling and die-making facility with precision CNC machining centers for designing and manufacturing press tools and fixtures.</p>
          </div>
          <div className="plant-card reveal stagger-3">
            <div className="plant-icon">📦</div>
            <h4>Plant 3 — Assembly Unit</h4>
            <p>Advanced sub-assembly and final assembly plant with automated welding cells, quality inspection bays, and integrated packaging lines.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
