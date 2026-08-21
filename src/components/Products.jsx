import React from 'react';
import { productsList as products } from '../constants/productsData';
import './Products.css';

export default function Products() {

  return (
    <section className="section" id="products">
      <div className="container">
        <div style={{ textAlign: 'center' }}>
          <div className="section-label reveal" style={{ justifyContent: 'center' }}>Our Products</div>
          <h2 className="section-title reveal">
  Precision Automotive <span style={{ color: 'var(--orange)' }}>Seats and Components</span>
</h2>
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
