/* ═══════════════════════════════════════════════════
   ABH & CO. — SCRIPT.JS
   Functions: Language toggle · Navbar · Mobile menu
              Scroll reveal · Back to top · Active nav
   ═══════════════════════════════════════════════════ */

'use strict';

(function () {

  /* ── DOM refs ── */
  const html        = document.documentElement;
  const body        = document.body;
  const navbar      = document.getElementById('navbar');
  const langToggle  = document.getElementById('langToggle');
  const hamburger   = document.getElementById('navHamburger');
  const mobileMenu  = document.getElementById('navMobile');
  const backToTop   = document.getElementById('backToTop');
  const navLinks    = document.querySelectorAll('.nav-link');
  const sections    = document.querySelectorAll('main section[id]');
  const revealEls   = document.querySelectorAll('.reveal');

  /* ─────────────────────────────────────────────────
     1. LANGUAGE TOGGLE
     Arabic (RTL) ↔ English (LTR)
  ──────────────────────────────────────────────────*/
  if (langToggle) {
    langToggle.addEventListener('click', function () {
      const isArabic = body.classList.contains('lang-ar');

      if (isArabic) {
        /* Switch to English / LTR */
        html.setAttribute('lang', 'en');
        html.setAttribute('dir', 'ltr');
        body.classList.remove('lang-ar');
        body.classList.add('lang-en');
        langToggle.textContent = 'عربي';
        langToggle.setAttribute('aria-label', 'التبديل إلى العربية');
      } else {
        /* Switch to Arabic / RTL */
        html.setAttribute('lang', 'ar');
        html.setAttribute('dir', 'rtl');
        body.classList.remove('lang-en');
        body.classList.add('lang-ar');
        langToggle.textContent = 'EN';
        langToggle.setAttribute('aria-label', 'Switch to English');
      }

      /* Close mobile menu on language switch */
      closeMobileMenu();
    });
  }

  /* ─────────────────────────────────────────────────
     2. NAVBAR: scroll-based styling + active section
  ──────────────────────────────────────────────────*/
  let lastScrollY = 0;

  function handleScroll () {
    const scrollY = window.scrollY;

    /* Scrolled state */
    if (scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    /* Back-to-top visibility */
    if (scrollY > 400) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }

    /* Active nav link: highlight current section */
    let current = '';
    sections.forEach(function (section) {
      const top    = section.offsetTop - 100;
      const bottom = top + section.offsetHeight;
      if (scrollY >= top && scrollY < bottom) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(function (link) {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      }
    });

    lastScrollY = scrollY;
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); /* Initial run */

  /* ─────────────────────────────────────────────────
     3. MOBILE MENU TOGGLE
  ──────────────────────────────────────────────────*/
  function openMobileMenu () {
    hamburger.classList.add('open');
    hamburger.setAttribute('aria-expanded', 'true');
    hamburger.setAttribute('aria-label', 'إغلاق القائمة');
    mobileMenu.classList.add('open');
    mobileMenu.setAttribute('aria-hidden', 'false');
    body.style.overflow = 'hidden'; /* Prevent scroll */
  }

  function closeMobileMenu () {
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    hamburger.setAttribute('aria-label', 'فتح القائمة');
    mobileMenu.classList.remove('open');
    mobileMenu.setAttribute('aria-hidden', 'true');
    body.style.overflow = '';
  }

  if (hamburger) {
    hamburger.addEventListener('click', function () {
      const isOpen = hamburger.classList.contains('open');
      if (isOpen) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });
  }

  /* Close menu when any mobile link is clicked */
  if (mobileMenu) {
    mobileMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', closeMobileMenu);
    });
  }

  /* Close menu on Escape key */
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && mobileMenu && mobileMenu.classList.contains('open')) {
      closeMobileMenu();
      hamburger.focus();
    }
  });

  /* ─────────────────────────────────────────────────
     4. SCROLL REVEAL — Intersection Observer
  ──────────────────────────────────────────────────*/
  if ('IntersectionObserver' in window && revealEls.length > 0) {
    const revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target); /* Reveal once only */
        }
      });
    }, {
      threshold: 0.08,
      rootMargin: '0px 0px -40px 0px'
    });

    revealEls.forEach(function (el) {
      revealObserver.observe(el);
    });
  } else {
    /* Fallback: make everything visible if IntersectionObserver unavailable */
    revealEls.forEach(function (el) {
      el.classList.add('visible');
    });
  }

  /* ─────────────────────────────────────────────────
     5. BACK TO TOP
  ──────────────────────────────────────────────────*/
  if (backToTop) {
    backToTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ─────────────────────────────────────────────────
     6. SMOOTH SCROLL for anchor links
        (Fallback for browsers without CSS scroll-behavior)
  ──────────────────────────────────────────────────*/
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href').slice(1);
      if (!targetId) return;

      const target = document.getElementById(targetId);
      if (!target) return;

      e.preventDefault();
      const navH = navbar ? navbar.offsetHeight : 0;
      const targetTop = target.getBoundingClientRect().top + window.scrollY - navH;

      window.scrollTo({ top: targetTop, behavior: 'smooth' });

      /* Update URL hash without jumping */
      history.pushState(null, '', '#' + targetId);
    });
  });

  /* ─────────────────────────────────────────────────
     7. STAGGER DELAYS for service + why cards
        Applied via JS to keep CSS clean
  ──────────────────────────────────────────────────*/
  document.querySelectorAll('.services-grid .service-card').forEach(function (card, i) {
    const col = i % 4;
    card.style.transitionDelay = (col * 0.08) + 's';
  });

  document.querySelectorAll('.why-grid .why-item').forEach(function (item, i) {
    item.style.transitionDelay = (i * 0.08) + 's';
  });

})();
