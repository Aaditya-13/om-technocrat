# Vite Migration Reference

This document tracks the mapping of the legacy static HTML/CSS/JS files to their new Vite + React counterparts.

## Legacy Files (Preserved for reference)
- `old_index.html`: The original monolithic HTML file.
- `old_css/style.css`: The original 2000-line monolithic CSS file.
- `old_js/script.js`: The original Vanilla JavaScript file containing all interactive logic.

## New Architecture

### HTML & Entry
- `index.html`: The new Vite entry point.
- `src/main.jsx`: The React rendering setup.
- `src/App.jsx`: The root application component holding the layout.

### Styles
- `src/index.css`: The new global stylesheet with Tailwind directives.
- `tailwind.config.js`: Tailwind configuration for fonts and colors.

### React Components (from `old_index.html`)
| Legacy Section | React Component | Notes |
| :--- | :--- | :--- |
| `<nav id="navbar">` | `src/components/Navbar.jsx` | Includes scroll state logic. |
| `<section id="hero">` | `src/components/Hero.jsx` | Includes slider state and particle gen. |
| `<section id="about">` | `src/components/About.jsx` | |
| `<section id="clients">` | `src/components/Clients.jsx` | Marquee clone logic removed. |
| `<section id="products">` | `src/components/Products.jsx` | |
| `.company-stats-section` | `src/components/Stats.jsx` | Includes IntersectionObserver logic. |
| `<section id="equipment">` | `src/components/Equipment.jsx` | |
| `<section id="gallery">` | `src/components/Gallery.jsx` | |
| `<section id="certifications">` | `src/components/Certifications.jsx`| |
| `<section id="contact">` | `src/components/Contact.jsx` | Includes React state form handling. |
| `<footer id="footer">` | `src/components/Footer.jsx` | |

### Asset Management
- `images/`: Migrating to `public/images/`.

*Note: This file is kept here to keep the migration organized and easy to reference during the transition.*
