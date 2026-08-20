import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { galleryCategories } from '../constants';
import './Gallery.css';

export default function Gallery() {
  const categoryNames = Object.keys(galleryCategories);
  const [activeCategory, setActiveCategory] = useState(categoryNames[0]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);

  const currentImages = galleryCategories[activeCategory];
  const slideDuration = 3000; // 3 seconds

  // Auto-play slideshow logic
  useEffect(() => {
    let startTime = Date.now();
    let animationFrame;

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const newProgress = (elapsed / slideDuration) * 100;

      if (newProgress >= 100) {
        // Time to change slide
        setCurrentSlide((prev) => (prev + 1) % currentImages.length);
        setProgress(0);
        startTime = Date.now(); // reset timer
      } else {
        setProgress(newProgress);
      }

      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [activeCategory, currentImages.length]);

  const handleCategoryClick = (category) => {
    if (category !== activeCategory) {
      setActiveCategory(category);
      setCurrentSlide(0);
      setProgress(0);
    }
  };

  return (
    <section className="section" id="gallery">
      <div className="container">
        <div style={{ textAlign: 'center' }}>
          <div className="section-label reveal" style={{ justifyContent: 'center' }}>Gallery</div>
          <h2 className="section-title reveal">Inside Our <span style={{ color: 'var(--orange)' }}>Facilities</span></h2>
          <p className="section-subtitle reveal" style={{ margin: '0 auto' }}>A glimpse into our state-of-the-art manufacturing plants, equipment, and quality processes.</p>
        </div>

        <div className="gallery-bento-container reveal">

          {/* Main Showcase (Large Box) */}
          <div className="gallery-main-showcase">

            <AnimatePresence>
              <motion.img
                key={`${activeCategory}-${currentSlide}`}
                src={`/images/${currentImages[currentSlide].src}`}
                alt={currentImages[currentSlide].label}
                className="gallery-main-img"
                style={{ position: 'absolute', top: 0, left: 0 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              />
            </AnimatePresence>

            <div className="gallery-main-overlay">
              <h3>{activeCategory}</h3>
              <p>{currentImages[currentSlide].label} ({currentSlide + 1} / {currentImages.length})</p>
            </div>
          </div>

          {/* Category Thumbnails (4 Small Boxes) */}
          {categoryNames.map((catName) => {
            const isCategoryActive = activeCategory === catName;
            // Get the first image of the category to use as the thumbnail cover
            const coverImage = galleryCategories[catName][0].src;

            return (
              <div
                key={catName}
                className={`gallery-category-box ${isCategoryActive ? 'active' : ''}`}
                onClick={() => handleCategoryClick(catName)}
              >
                <img
                  src={`/images/${coverImage}`}
                  alt={catName}
                  loading="lazy"
                  className="gallery-category-img"
                />
                <div className="gallery-category-overlay">
                  <span>{catName}</span>
                </div>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}
