/**
 * main.js — Північна Дивізія
 * All interactive behaviour: cursor, navbar, mobile menu, animations
 * Requires GSAP + ScrollTrigger (loaded via CDN in HTML)
 */

'use strict';

/* ============================================================
   1. INIT GSAP PLUGINS
   ============================================================ */
gsap.registerPlugin(ScrollTrigger);

/* ============================================================
   2. NAVBAR — scroll-aware class toggle
   ============================================================ */
function initNavbar() {
  const navbar    = document.getElementById('navbar');
  const threshold = 60;

  if (!navbar) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      navbar.classList.toggle('is-scrolled', !entry.isIntersecting);
    },
    { rootMargin: `-${threshold}px 0px 0px 0px` }
  );

  // Observe a sentinel element at top of page
  const sentinel = document.getElementById('nav-sentinel');
  if (sentinel) observer.observe(sentinel);
}

/* ============================================================
   4. MOBILE MENU
   ============================================================ */
function initMobileMenu() {
  const hamburger  = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  const body       = document.body;

  if (!hamburger || !mobileMenu) return;

  let isOpen = false;

  function open() {
    isOpen = true;
    hamburger.classList.add('is-open');
    hamburger.setAttribute('aria-expanded', 'true');
    mobileMenu.classList.add('is-open');
    body.style.overflow = 'hidden';
  }

  function close() {
    isOpen = false;
    hamburger.classList.remove('is-open');
    hamburger.setAttribute('aria-expanded', 'false');
    mobileMenu.classList.remove('is-open');
    body.style.overflow = '';
  }

  hamburger.addEventListener('click', () => isOpen ? close() : open());

  // Close on link click
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', close);
  });

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isOpen) close();
  });
}

/* ============================================================
   5. HERO ANIMATION
   ============================================================ */
function initHeroAnimation() {
  const lines = document.querySelectorAll('.hero__title-line');
  if (!lines.length) return;

  const tl = gsap.timeline({ delay: 0.15 });

  tl
    .to(lines, {
      y: '0%',
      duration: 1.1,
      ease: 'power3.out',
      stagger: 0.12
    })
    .to('.hero__eyebrow', {
      opacity: 1,
      y: 0,
      duration: 0.7,
      ease: 'power2.out'
    }, '-=0.6')
    .to('.hero__subtitle', {
      opacity: 1,
      duration: 0.6,
      ease: 'power2.out'
    }, '-=0.4')
    .to('.hero__divider', {
      opacity: 1,
      duration: 0.5
    }, '-=0.3')
    .to('.hero__actions', {
      opacity: 1,
      duration: 0.5
    }, '-=0.25')
    .to('.hero__scroll', {
      opacity: 1,
      duration: 0.5
    }, '-=0.2');
}

/* ============================================================
   6. PARALLAX — Hero background
   ============================================================ */
function initParallax() {
  const heroBg = document.querySelector('.hero__bg');
  if (!heroBg) return;

  gsap.to(heroBg, {
    yPercent: 28,
    ease: 'none',
    scrollTrigger: {
      trigger: '.hero',
      start: 'top top',
      end: 'bottom top',
      scrub: true
    }
  });

  // Manifesto watermark slow pan
  const watermark = document.querySelector('.manifesto__watermark');
  if (watermark) {
    gsap.to(watermark, {
      xPercent: -18,
      ease: 'none',
      scrollTrigger: {
        trigger: '.manifesto',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    });
  }
}

/* ============================================================
   7. SCROLL REVEAL — Generic .reveal elements
   ============================================================ */
function initScrollReveal() {
  const items = gsap.utils.toArray('.reveal');
  if (!items.length) return;

  items.forEach((el, index) => {
    gsap.fromTo(el,
      { opacity: 0, y: 44 },
      {
        opacity: 1,
        y: 0,
        duration: 0.85,
        ease: 'power2.out',
        delay: (index % 3) * 0.08,
        scrollTrigger: {
          trigger: el,
          start: 'top 88%',
          toggleActions: 'play none none none'
        }
      }
    );
  });
}

/* ============================================================
   8. STAT COUNTERS
   ============================================================ */
function initCounters() {
  const counters = document.querySelectorAll('[data-counter]');
  if (!counters.length) return;

  counters.forEach(el => {
    const target   = parseInt(el.dataset.counter, 10);
    const suffix   = el.dataset.suffix || '';
    const duration = 1.85;

    ScrollTrigger.create({
      trigger: el,
      start: 'top 85%',
      once: true,
      onEnter: () => {
        gsap.to({ val: 0 }, {
          val: target,
          duration,
          ease: 'power2.out',
          onUpdate: function () {
            el.textContent = Math.round(this.targets()[0].val) + suffix;
          }
        });
      }
    });
  });
}

/* ============================================================
   9. GALLERY STAGGER
   ============================================================ */
function initGallery() {
  const items = document.querySelectorAll('.gallery__item');
  if (!items.length) return;

  gsap.from(items, {
    opacity: 0,
    scale: 0.95,
    duration: 0.65,
    ease: 'power2.out',
    stagger: 0.07,
    scrollTrigger: {
      trigger: '.gallery__grid',
      start: 'top 87%',
      toggleActions: 'play none none none'
    }
  });
}

/* ============================================================
   10. BOOT
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initMobileMenu();
  initHeroAnimation();
  initParallax();
  initScrollReveal();
  initCounters();
  initGallery();

  // Dev signature
  console.log(
    '%c Північна Дивізія 🛡️ ',
    'font-size:14px; font-weight:600; color:#fff; background:#000; padding:6px 14px; border:1px solid #2e2e2e;'
  );
});
