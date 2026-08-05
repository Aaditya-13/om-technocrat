import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import './Stats.css';

function CountUp({ target }) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      const duration = 2000;
      const start = performance.now();

      const update = (currentTime) => {
        const elapsed = currentTime - start;
        const progress = Math.min(elapsed / duration, 1);
        const easeProgress = 1 - Math.pow(1 - progress, 4);
        const value = Math.floor(easeProgress * target);
        setCount(value);

        if (progress < 1) {
          requestAnimationFrame(update);
        } else {
          setCount(target);
        }
      };
      requestAnimationFrame(update);
    }
  }, [inView, target]);

  return <span ref={ref} className="count-up">{count.toLocaleString()}</span>;
}

export default function Stats() {
  return (
    <div className="company-stats-section">
      <div className="container">
        <div className="stats-grid">
          <div className="stat-item reveal stagger-1">
            <div className="stat-value"><CountUp target={30} />+</div>
            <div className="stat-text">YEARS OF EXCELLENCE</div>
          </div>
          <div className="stat-item reveal stagger-2">
            <div className="stat-value"><CountUp target={14} />+</div>
            <div className="stat-text">GLOBAL CLIENTS</div>
          </div>
          <div className="stat-item reveal stagger-3">
            <div className="stat-value"><CountUp target={3} /></div>
            <div className="stat-text">MANUFACTURING PLANTS</div>
          </div>
          <div className="stat-item reveal stagger-4">
            <div className="stat-value"><CountUp target={6} />+</div>
            <div className="stat-text">PRODUCT LINES</div>
          </div>
        </div>
      </div>
    </div>
  );
}
