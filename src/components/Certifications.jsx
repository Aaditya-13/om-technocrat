import React from 'react';
import './Certifications.css';

export default function Certifications() {
  return (
    <section className="section" id="certifications" style={{ paddingTop: '20px' }}>
      <div className="container">
        <div style={{ textAlign: 'center' }}>
          <div className="section-label reveal" style={{ justifyContent: 'center' }}>Certifications</div>
          <h3 className="section-title reveal" style={{ fontSize: '32px' }}>Quality <span style={{ color: 'var(--orange)' }}>Accreditations</span></h3>
          <p className="section-subtitle reveal" style={{ margin: '0 auto' }}>Our certifications reflect our unwavering commitment to quality, safety, and environmental responsibility.</p>
        </div>

        <div className="cert-list">
          <div className="cert-row reveal stagger-1">
            <div className="cert-img-wrapper">
              <img src="/images/iatf-16949-2016.jpg" alt="IATF 16949:2016" className="cert-img" />
            </div>
            <div className="cert-content">
              <h4>IATF 16949:2016</h4>
              <div className="cert-standard">Automotive Quality Management</div>
              <p>Internationally recognized quality management standard for the automotive industry, demonstrating our commitment to continual improvement, defect prevention, and reduction of variation and waste.</p>
              <div className="cert-status active">
                <span className="cert-status-dot"></span>
                Certified
              </div>
            </div>
          </div>
          
          <div className="cert-row reveal stagger-2">
            <div className="cert-img-wrapper">
              <img src="/images/zed.png" alt="ZED Certification" className="cert-img" />
            </div>
            <div className="cert-content">
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
      </div>
    </section>
  );
}
