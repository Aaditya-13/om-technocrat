import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Clients from './components/Clients';
import Products from './components/Products';
import Equipment from './components/Equipment';
import Gallery from './components/Gallery';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  // Global Scroll Reveal & Active Nav Link Observer
  useEffect(() => {
    // 1. Scroll Reveal Animations
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

    document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach(el => {
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
