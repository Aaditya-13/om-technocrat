# Architecture & Styles Guide

This document provides a map of the modularized component structure. Use this to quickly find exactly where to make changes in the future without hunting through massive files.

## Project Structure
The project is built using React (Vite) and all styling is now modularized.
Each visual section of the website corresponds to a single React component `.jsx` file and a matching CSS `.css` file in `src/components/`.

---

## 🗺️ Component Map

| Visual Section | React Component | CSS Styling File | Responsibilities |
| --- | --- | --- | --- |
| **Global Setup** | `src/App.jsx`, `src/main.jsx` | `src/index.css` | Handles global variables (`:root`), font imports, CSS resets, and global utility classes like `.container`, `.section`, and scroll animations. |
| **Navigation Bar** | `Navbar.jsx` | `Navbar.css` | Logo, navigation links, mobile hamburger menu, and overlay. |
| **Hero (Top Banner)** | `Hero.jsx` | `Hero.css` | Full-screen slideshow, animated background particles, hero text, and call-to-action buttons. |
| **Stats / Banner** | `Stats.jsx` | `Stats.css` | The dark glassmorphism banner showing "30+ YEARS OF EXCELLENCE", etc. |
| **About Us** | `About.jsx` | `About.css` | Company description, mission, and the Group Plants info cards. |
| **Clients Marquee** | `Clients.jsx` | `Clients.css` | The infinite scrolling carousel of client logos. |
| **Products** | `Products.jsx` | `Products.css` | Product category cards (e.g., Engine Parts, Chassis Parts) with hover effects. |
| **Equipment & Capacity** | `Equipment.jsx` | `Equipment.css` | List of manufacturing machinery and the visual capacity progression bars. |
| **Image Gallery** | `Gallery.jsx` | `Gallery.css` | The masonry-style grid of factory and product photos with hover overlays. |
| **Certifications** | `Certifications.jsx` | `Certifications.css` | IATF and ISO certification cards with active/progress status tags. |
| **Contact Us** | `Contact.jsx` | `Contact.css` | Contact details, embedded Google Map, and the contact form logic. |
| **Footer** | `Footer.jsx` | `Footer.css` | Bottom section containing branding, quick links, and social media icons. |

## 🛠️ How to make changes in the future:

**1. "I need to change a color or font used everywhere."**
Go to `src/index.css` and modify the variables in the `:root` block (e.g., `--orange: #FF6B00;`).

**2. "I need to fix how the mobile menu looks on phones."**
Go to `src/components/Navbar.css` and scroll to the bottom where the `@media (max-width: 768px)` block is located.

**3. "I want to add a new product category."**
Go to `src/components/Products.jsx` to add the HTML/React code. If you need to style the new card differently, add the CSS to `src/components/Products.css`.

**4. "The Hero slideshow images are too dark."**
Go to `src/components/Hero.css` and adjust the `background: linear-gradient(...)` inside the `.hero-overlay` class.

**5. "I need to change the contact email address."**
Go to `src/components/Contact.jsx` and edit the text directly.

---
*Note: All components automatically import their respective CSS files. If you create a new component, remember to create a matching CSS file and import it at the top of the `.jsx` file.*
