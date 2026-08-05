import React from 'react';

export default function Clients() {
  const clients = [
    {
      name: "Mahindra & Mahindra",
      svg: (
        <svg width="44" height="44" viewBox="0 0 100 100" fill="none" style={{ marginBottom: '12px' }}>
          <path d="M15 80 L35 20 L50 60 L65 20 L85 80 L75 80 L65 40 L50 80 L35 40 L25 80 Z" fill="#E31837" />
        </svg>
      ),
      delay: ""
    },
    {
      name: "Tata Motors",
      svg: (
        <svg width="44" height="44" viewBox="0 0 100 100" fill="none" style={{ marginBottom: '12px' }}>
          <path d="M50 15 C30 15 15 30 15 50 C15 52 16 54 17 56 C22 40 35 30 50 30 C65 30 78 40 83 56 C84 54 85 52 85 50 C85 30 70 15 50 15 Z" fill="#005A9C" />
          <path d="M42 38 L58 38 L50 62 Z" fill="#005A9C" />
        </svg>
      ),
      delay: "stagger-2"
    },
    {
      name: "General Motors",
      svg: (
        <svg width="44" height="44" viewBox="0 0 100 100" fill="none" style={{ marginBottom: '12px' }}>
          <rect width="90" height="90" x="5" y="5" rx="16" fill="#005A9C" />
          <text x="50" y="55" fontFamily="'Inter', sans-serif" fontWeight="900" fontSize="34" fill="#FFFFFF" textAnchor="middle">gm</text>
          <line x1="25" y1="68" x2="75" y2="68" stroke="#FFFFFF" strokeWidth="6" strokeLinecap="round" />
        </svg>
      ),
      delay: "stagger-3"
    },
    {
      name: "L&T",
      svg: (
        <svg width="44" height="44" viewBox="0 0 100 100" fill="none" style={{ marginBottom: '12px' }}>
          <rect width="90" height="90" x="5" y="5" rx="8" fill="#F2A900" />
          <text x="50" y="58" fontFamily="'Outfit', sans-serif" fontWeight="900" fontSize="36" fill="#003366" textAnchor="middle">L&amp;T</text>
        </svg>
      ),
      delay: "stagger-1"
    },
    {
      name: "Navistar USA",
      svg: (
        <svg width="44" height="44" viewBox="0 0 100 100" fill="none" style={{ marginBottom: '12px' }}>
          <path d="M50 10 L85 50 L50 90 L15 50 Z" fill="#111111" />
          <path d="M50 25 L73 50 L50 75 L27 50 Z" fill="#FF6B00" />
        </svg>
      ),
      delay: "stagger-2"
    },
    {
      name: "ABB Global",
      svg: (
        <svg width="44" height="44" viewBox="0 0 120 80" fill="none" style={{ marginBottom: '12px' }}>
          <text x="60" y="55" fontFamily="'Outfit', sans-serif" fontWeight="900" fontSize="44" fill="#FF0000" letterSpacing="-3" textAnchor="middle">ABB</text>
        </svg>
      ),
      delay: "stagger-3"
    },
    {
      name: "Lear Automotive",
      svg: (
        <svg width="44" height="44" viewBox="0 0 100 100" fill="none" style={{ marginBottom: '12px' }}>
          <path d="M10 50 C30 30 70 30 90 50 C70 70 30 70 10 50 Z" fill="#D22630" />
          <circle cx="50" cy="50" r="16" fill="#FFFFFF" />
          <circle cx="50" cy="50" r="8" fill="#111111" />
        </svg>
      ),
      delay: "stagger-1"
    },
    {
      name: "Atlas Copco",
      svg: (
        <svg width="44" height="44" viewBox="0 0 100 100" fill="none" style={{ marginBottom: '12px' }}>
          <circle cx="50" cy="50" r="40" fill="#0072C6" />
          <path d="M35 50 L65 50 M50 35 L50 65" stroke="#FFFFFF" strokeWidth="8" strokeLinecap="round" />
        </svg>
      ),
      delay: "stagger-2"
    },
    {
      name: "JBM Auto",
      svg: (
        <svg width="44" height="44" viewBox="0 0 100 100" fill="none" style={{ marginBottom: '12px' }}>
          <rect width="80" height="45" x="10" y="27" rx="6" fill="#1A3B8B" />
          <text x="50" y="60" fontFamily="'Outfit', sans-serif" fontWeight="900" fontSize="28" fill="#FFFFFF" textAnchor="middle">JBM</text>
        </svg>
      ),
      delay: "stagger-3"
    },
    {
      name: "Long Range Automotive",
      svg: (
        <svg width="44" height="44" viewBox="0 0 100 100" fill="none" style={{ marginBottom: '12px' }}>
          <circle cx="50" cy="50" r="42" stroke="#111111" strokeWidth="4" />
          <path d="M50 15 L58 42 L85 50 L58 58 L50 85 L42 58 L15 50 L42 42 Z" fill="#FF6B00" />
        </svg>
      ),
      delay: "stagger-1"
    },
    {
      name: "CVG",
      svg: (
        <svg width="44" height="44" viewBox="0 0 100 100" fill="none" style={{ marginBottom: '12px' }}>
          <rect width="90" height="90" x="5" y="5" rx="10" fill="#E5E7EB" />
          <text x="50" y="58" fontFamily="'Outfit', sans-serif" fontWeight="800" fontSize="32" fill="#111111" textAnchor="middle">CVG</text>
        </svg>
      ),
      delay: "stagger-2"
    },
    {
      name: "DSC",
      svg: (
        <svg width="44" height="44" viewBox="0 0 100 100" fill="none" style={{ marginBottom: '12px' }}>
          <path d="M50 10 L85 25 L85 60 C85 80 50 90 50 90 C50 90 15 80 15 60 L15 25 Z" fill="#000000" />
          <circle cx="50" cy="48" r="16" stroke="#FFFFFF" strokeWidth="4" strokeDasharray="6,4" fill="none" />
        </svg>
      ),
      delay: "stagger-3"
    },
    {
      name: "Tata AutoComp",
      svg: (
        <svg width="44" height="44" viewBox="0 0 100 100" fill="none" style={{ marginBottom: '12px' }}>
          <circle cx="35" cy="50" r="25" fill="#005A9C" opacity="0.8" />
          <circle cx="65" cy="50" r="25" fill="#FF6B00" opacity="0.8" />
        </svg>
      ),
      delay: "stagger-1"
    }
  ];

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
