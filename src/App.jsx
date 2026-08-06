import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Plants from './components/Plants';
import Clients from './components/Clients';
import Products from './components/Products';
import Equipment from './components/Equipment';
import Gallery from './components/Gallery';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // 1. Scroll Reveal Animations (Legacy, for sections not yet using framer-motion)
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -40px 0px'
    });

    document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale, .stagger-1, .stagger-2, .stagger-3').forEach(el => {
      revealObserver.observe(el);
    });

    return () => {
      revealObserver.disconnect();
    };
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Plants />
      <Clients />
      <Products />
      <Equipment />
      <Gallery />
      <Certifications />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
