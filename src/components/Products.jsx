import React from 'react';

export default function Products() {
  const products = [
    {
      title: "Seat Frames",
      tag: "Seating",
      img: "seat-frames.png",
      desc: "High-strength steel seat frames engineered for maximum occupant safety, comfort, and durability across passenger and commercial vehicles.",
      delay: "stagger-1"
    },
    {
      title: "SUV 2nd Row Frames",
      tag: "SUV",
      img: "suv-frames.png",
      desc: "Robust second-row seat frame assemblies designed specifically for SUV platforms, featuring fold-flat and recline mechanisms.",
      delay: "stagger-2"
    },
    {
      title: "Seat Cushion Pan",
      tag: "Seating",
      img: "cushion-pan.png",
      desc: "Precision-stamped seat cushion pans with optimized weight-to-strength ratio, supporting ergonomic seating designs for premium vehicles.",
      delay: "stagger-3"
    },
    {
      title: "Sheet Metal Parts",
      tag: "Components",
      img: "sheet-metal.png",
      desc: "Custom automotive sheet metal components manufactured through progressive die stamping, deep drawing, and multi-stage forming processes.",
      delay: "stagger-1"
    },
    {
      title: "Seat Frame Tools",
      tag: "Tooling",
      img: "seat-tools.png",
      desc: "In-house designed and manufactured press tools, jigs, and fixtures enabling cost-effective, high-volume automotive component production.",
      delay: "stagger-2"
    },
    {
      title: "Risers for Thar Roxx",
      tag: "New Launch",
      img: "risers.png",
      desc: "Specially engineered seat risers developed for the Mahindra Thar Roxx platform, meeting stringent off-road durability and safety requirements.",
      delay: "stagger-3"
    }
  ];

  return (
    <section className="section" id="products">
      <div className="container">
        <div style={{ textAlign: 'center' }}>
          <div className="section-label reveal" style={{ justifyContent: 'center' }}>Our Products</div>
          <h2 className="section-title reveal">Precision <span style={{ color: 'var(--orange)' }}>Automotive</span> Components</h2>
          <p className="section-subtitle reveal" style={{ margin: '0 auto' }}>Engineered for performance, manufactured to perfection. Every component meets the most stringent global automotive standards.</p>
        </div>

        <div className="products-grid">
          {products.map((product, idx) => (
            <div key={idx} className={`product-card reveal ${product.delay}`}>
              <div className="product-image">
                <img src={`/images/${product.img}`} alt={product.title} loading="lazy" />
              </div>
              <div className="product-content">
                <span className="product-tag">{product.tag}</span>
                <h4>{product.title}</h4>
                <p>{product.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
