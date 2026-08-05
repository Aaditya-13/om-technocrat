import React from 'react';
import { equipmentList, capacityMetrics } from '../constants/equipmentData';
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
          {equipmentList.map((item, idx) => (
            <div key={idx} className={`equipment-card reveal ${item.delay}`}>
              <div className="equipment-icon">{item.icon}</div>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          ))}
        </div>

        <div className="capacity-bar">
          {capacityMetrics.map((metric, idx) => (
            <div key={idx} className={`capacity-item reveal ${metric.delay}`}>
              <div className="capacity-value">{metric.value}</div>
              <div className="capacity-label">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
