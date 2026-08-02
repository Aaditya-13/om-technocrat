// ═══════════════════════════════════════════
// NAVBAR SCROLL EFFECT
// ═══════════════════════════════════════════
const navbar = document.getElementById('navbar');
const scrollTopBtn = document.getElementById('scrollTopBtn');

function handleNavScroll() {
  if (window.scrollY > 80) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }

  if (window.scrollY > 600) {
    scrollTopBtn.classList.add('show');
  } else {
    scrollTopBtn.classList.remove('show');
  }
}

window.addEventListener('scroll', handleNavScroll, { passive: true });

// Scroll to top
scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ═══════════════════════════════════════════
// MOBILE MENU
// ═══════════════════════════════════════════
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
const mobileOverlay = document.getElementById('mobileOverlay');

function toggleMenu() {
  navToggle.classList.toggle('active');
  navLinks.classList.toggle('open');
  mobileOverlay.classList.toggle('show');
  document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
}

navToggle.addEventListener('click', toggleMenu);
mobileOverlay.addEventListener('click', toggleMenu);

// Close menu on link click
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    if (navLinks.classList.contains('open')) {
      toggleMenu();
    }
  });
});

// ═══════════════════════════════════════════
// SCROLL REVEAL ANIMATIONS
// ═══════════════════════════════════════════
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

// ═══════════════════════════════════════════
// COUNT UP ANIMATION
// ═══════════════════════════════════════════
function animateCount(el) {
  const target = parseInt(el.getAttribute('data-target'));
  const duration = 2000;
  const start = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - start;
    const progress = Math.min(elapsed / duration, 1);
    // easeOutQuart
    const easeProgress = 1 - Math.pow(1 - progress, 4);
    const value = Math.floor(easeProgress * target);
    el.textContent = value.toLocaleString();

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      el.textContent = target.toLocaleString();
    }
  }

  requestAnimationFrame(update);
}

const countObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCount(entry.target);
      countObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.count-up').forEach(el => {
  countObserver.observe(el);
});

// ═══════════════════════════════════════════
// HERO PARTICLES
// ═══════════════════════════════════════════
const particlesContainer = document.getElementById('heroParticles');
for (let i = 0; i < 20; i++) {
  const particle = document.createElement('div');
  particle.classList.add('hero-particle');
  particle.style.left = Math.random() * 100 + '%';
  particle.style.animationDuration = (Math.random() * 10 + 8) + 's';
  particle.style.animationDelay = (Math.random() * 8) + 's';
  particle.style.width = (Math.random() * 3 + 1) + 'px';
  particle.style.height = particle.style.width;
  particlesContainer.appendChild(particle);
}

// ═══════════════════════════════════════════
// HERO IMAGE SLIDESHOW
// ═══════════════════════════════════════════
const heroSlides = document.querySelectorAll('.hero-slide');
const heroDots = document.querySelectorAll('.hero-dot');
let currentSlide = 0;
let slideInterval;
const SLIDE_DURATION = 5000; // 5 seconds per slide

function goToSlide(index) {
  // Remove active from all
  heroSlides.forEach(s => s.classList.remove('active'));
  heroDots.forEach(d => d.classList.remove('active'));

  // Set new active
  currentSlide = index;
  heroSlides[currentSlide].classList.add('active');
  heroDots[currentSlide].classList.add('active');
}

function nextSlide() {
  goToSlide((currentSlide + 1) % heroSlides.length);
}

function startSlideshow() {
  clearInterval(slideInterval);
  slideInterval = setInterval(nextSlide, SLIDE_DURATION);
}

// Click handlers for dots
heroDots.forEach(dot => {
  dot.addEventListener('click', () => {
    const idx = parseInt(dot.getAttribute('data-slide'));
    goToSlide(idx);
    startSlideshow(); // restart timer on manual nav
  });
});

// Start auto-slideshow
startSlideshow();

// ═══════════════════════════════════════════
// CONTACT FORM
// ═══════════════════════════════════════════
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

contactForm.addEventListener('submit', function (e) {
  e.preventDefault();

  // Get form data
  const formData = new FormData(contactForm);
  const data = Object.fromEntries(formData.entries());

  // Simulate form submission
  const submitBtn = document.getElementById('contactSubmitBtn');
  submitBtn.disabled = true;
  submitBtn.innerHTML = `
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="animation: spin 1s linear infinite">
                    <path d="M12 2v4m0 12v4m-7.071-5.071l2.828-2.828m8.486-8.486l2.828-2.828M2 12h4m12 0h4M4.929 4.929l2.828 2.828m8.486 8.486l2.828 2.828"/>
                </svg>
                Sending...
            `;

  setTimeout(() => {
    contactForm.style.display = 'none';
    formSuccess.classList.add('show');

    // Reset after 5 seconds
    setTimeout(() => {
      contactForm.style.display = 'block';
      formSuccess.classList.remove('show');
      contactForm.reset();
      submitBtn.disabled = false;
      submitBtn.innerHTML = `
                        <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"/></svg>
                        Send Message
                    `;
    }, 5000);
  }, 1500);
});

// ═══════════════════════════════════════════
// SMOOTH SCROLL FOR NAV LINKS
// ═══════════════════════════════════════════
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ═══════════════════════════════════════════
// ACTIVE NAV LINK HIGHLIGHT
// ═══════════════════════════════════════════
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-links a:not(.nav-cta)');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navItems.forEach(item => {
        item.style.color = '';
        if (item.getAttribute('href') === `#${id}`) {
          if (navbar.classList.contains('scrolled')) {
            item.style.color = 'var(--orange)';
          } else {
            item.style.color = 'var(--orange)';
          }
        }
      });
    }
  });
}, {
  threshold: 0.3,
  rootMargin: '-80px 0px -50% 0px'
});

sections.forEach(section => {
  sectionObserver.observe(section);
});

// ═══════════════════════════════════════════
// CSS ANIMATION KEYFRAME (Spin for loading)
// ═══════════════════════════════════════════
const styleSheet = document.createElement('style');
styleSheet.textContent = `@keyframes spin { to { transform: rotate(360deg); } }`;
document.head.appendChild(styleSheet);

// ═══════════════════════════════════════════
// CLIENTS MARQUEE CLONE
// ═══════════════════════════════════════════
const clientsGrid = document.getElementById('clientsGrid');
if (clientsGrid) {
  const cards = Array.from(clientsGrid.children);
  cards.forEach(card => {
    const clone = card.cloneNode(true);
    // Remove scroll reveal classes from clones so they don't pop in weirdly during animation
    clone.classList.remove('reveal', 'active');
    clone.style.opacity = '1';
    clone.style.transform = 'translateY(0)';
    clientsGrid.appendChild(clone);
  });
}
