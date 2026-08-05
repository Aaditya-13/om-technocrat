import React from 'react';
import './Equipment.css';

export default function Equipment() {
  return (
    <section className="section section-dark" id="equipment">
      <div className="container">
        <div className="equipment-header">
          <div className="section-label reveal" style={{ justifyContent: 'center' }}>Equipment &amp; Capacity</div>
          <h2 className="section-title reveal" style={{ color: 'var(--white)' }}>World-Class <span style={{ color: 'var(--orange)' }}>Infrastructure</span></h2>
          <p className="section-subtitle reveal" style={{ color: 'rgba(255,255,255,0.6)', margin: '0 auto' }}>State-of-the-art machinery and production capabilities driving precision manufacturing at scale.</p>
        </div>

        <div className="equipment-grid">
          <div className="equipment-card reveal stagger-1">
            <div className="equipment-icon">🏗️</div>
            <h4>Hydraulic Press Lines</h4>
            <p>High-tonnage hydraulic and mechanical presses (50T – 400T) for stamping, forming, and deep drawing operations.</p>
          </div>
          <div className="equipment-card reveal stagger-2">
            <div className="equipment-icon">🤖</div>
            <h4>Robotic Welding Cells</h4>
            <p>Automated MIG and spot welding robots ensuring consistent weld quality and high production throughput.</p>
          </div>
          <div className="equipment-card reveal stagger-3">
            <div className="equipment-icon">🔬</div>
            <h4>CNC Machining Centers</h4>
            <p>Precision CNC milling and turning centers for tool &amp; die manufacturing and critical component machining.</p>
          </div>
          <div className="equipment-card reveal stagger-1">
            <div className="equipment-icon">📐</div>
            <h4>CMM Inspection</h4>
            <p>Coordinate Measuring Machines for dimensional accuracy verification with micron-level precision.</p>
          </div>
          <div className="equipment-card reveal stagger-2">
            <div className="equipment-icon">🔧</div>
            <h4>SPM Assembly Lines</h4>
            <p>Special Purpose Machines and semi-automated assembly lines for sub-assembly and final assembly operations.</p>
          </div>
          <div className="equipment-card reveal stagger-3">
            <div className="equipment-icon">🧪</div>
            <h4>Quality Testing Lab</h4>
            <p>Fully equipped metallurgical and testing lab with hardness testers, profile projectors, and surface roughness testers.</p>
          </div>
        </div>

        <div className="capacity-bar">
          <div className="capacity-item reveal stagger-1">
            <div className="capacity-value">50,000+</div>
            <div className="capacity-label">Parts / Month</div>
          </div>
          <div className="capacity-item reveal stagger-2">
            <div className="capacity-value">400T</div>
            <div className="capacity-label">Max Press Capacity</div>
          </div>
          <div className="capacity-item reveal stagger-3">
            <div className="capacity-value">25,000+</div>
            <div className="capacity-label">Sq. Ft. Area</div>
          </div>
          <div className="capacity-item reveal stagger-4">
            <div className="capacity-value">150+</div>
            <div className="capacity-label">Skilled Workforce</div>
          </div>
        </div>
      </div>
    </section>
  );
}
