import React from 'react';
import { clientsList as clients } from '../constants/clientsData';
import './Clients.css';

export default function Clients() {

  return (
    <section className="section section-alt" id="clients">
      <div className="container">
        <div style={{ textAlign: 'center' }}>
          <div className="section-label reveal" style={{ justifyContent: 'center' }}>Our Clients</div>
          <h2 className="section-title reveal">Trusted by <span style={{ color: 'var(--orange)' }}>Industry Leaders</span></h2>
          <p className="section-subtitle reveal" style={{ margin: '0 auto' }}>Partnering with the world's most prestigious automotive OEMs and Tier-1 suppliers across four continents.</p>
        </div>

        <div className="clients-marquee">
          <div className="clients-grid" id="clientsGrid">
            {clients.map((client, idx) => (
              <div key={idx} className={`client-card reveal ${client.delay}`}>
                <div className="client-card-inner">
                  {client.svg}
                  {client.name}
                </div>
              </div>
            ))}
            {/* Clone for infinite marquee effect */}
            {clients.map((client, idx) => (
              <div key={`clone-${idx}`} className={`client-card`} style={{ opacity: 1, transform: 'translateY(0)' }}>
                <div className="client-card-inner">
                  {client.svg}
                  {client.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
