import React from 'react';
import './Certifications.css';

export default function Certifications() {
  return (
    <section className="section section-alt" id="certifications">
      <div className="container">
        <div style={{ textAlign: 'center' }}>
          <div className="section-label reveal" style={{ justifyContent: 'center' }}>Certifications</div>
          <h2 className="section-title reveal">Quality <span style={{ color: 'var(--orange)' }}>Accreditations</span></h2>
          <p className="section-subtitle reveal" style={{ margin: '0 auto' }}>Our certifications reflect our unwavering commitment to quality, safety, and environmental responsibility.</p>
        </div>

        <div className="cert-grid">
          <div className="cert-card reveal stagger-1">
            <img src="/images/iatf-16949-2016.jpg" alt="IATF 16949:2016" className="cert-img" />
            <h4>IATF 16949:2016</h4>
            <div className="cert-standard">Automotive Quality Management</div>
            <p>Internationally recognized quality management standard for the automotive industry, demonstrating our commitment to continual improvement, defect prevention, and reduction of variation and waste.</p>
            <div className="cert-status active">
              <span className="cert-status-dot"></span>
              Certified
            </div>
          </div>
          <div className="cert-card reveal stagger-2">
            <img src="/images/zed.png" alt="ZED Certification" className="cert-img" />
            <h4>ZED Certification</h4>
            <div className="cert-standard">Zero Defect Zero Effect</div>
            <p>Government of India's flagship program for manufacturing enterprises, promoting zero-defect production with zero environmental impact. Our commitment to sustainable manufacturing practices.</p>
            <div className="cert-status progress">
              <span className="cert-status-dot"></span>
              In Progress
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
