/**
 * ABH&Co. Website V2 — script.js
 * Language toggle · Navbar · Intake wizard · FAQ · Scroll reveal · Animations
 */

(function () {
  'use strict';

  /* ─────────────────────────────────────────────
     CONSTANTS
  ───────────────────────────────────────────── */
  const WA_NUMBER   = '971569605060';
  const EMAIL_ADDR  = 'Almheiri.Counsel@outlook.com';
  const EMAIL_SUBJ  = encodeURIComponent('طلب استشارة قانونية — ABH&Co.');

  /* ─────────────────────────────────────────────
     STATE
  ───────────────────────────────────────────── */
  let currentLang  = 'ar';  // 'ar' | 'en'
  let currentStep  = 1;
  const TOTAL_STEPS = 5;

  const intakeData = {
    matter:  { val: '', ar: '', en: '' },
    emirate: { val: '', ar: '', en: '' },
    urgency: { val: '', ar: '', en: '' },
    message: ''
  };

  /* ─────────────────────────────────────────────
     HELPERS
  ───────────────────────────────────────────── */
  function qs(sel, scope) { return (scope || document).querySelector(sel); }
  function qsa(sel, scope) { return Array.from((scope || document).querySelectorAll(sel)); }

  /* ─────────────────────────────────────────────
     1. LANGUAGE TOGGLE
  ───────────────────────────────────────────── */
  const htmlEl      = document.documentElement;
  const bodyEl      = document.body;
  const langToggle  = qs('#lang-toggle');
  const mctaLang    = qs('#mcta-lang-toggle');
  const navbar      = qs('#navbar');

  function setLanguage(lang) {
    // Brief transition flash
    bodyEl.classList.add('lang-switching');
    setTimeout(function () { bodyEl.classList.remove('lang-switching'); }, 320);

    currentLang = lang;

    if (lang === 'en') {
      bodyEl.classList.remove('lang-ar');
      bodyEl.classList.add('lang-en');
      htmlEl.setAttribute('lang', 'en');
      htmlEl.setAttribute('dir', 'ltr');
      if (langToggle) langToggle.textContent = 'عربي';
      if (mctaLang)   mctaLang.textContent   = 'عربي';
    } else {
      bodyEl.classList.remove('lang-en');
      bodyEl.classList.add('lang-ar');
      htmlEl.setAttribute('lang', 'ar');
      htmlEl.setAttribute('dir', 'rtl');
      if (langToggle) langToggle.textContent = 'EN';
      if (mctaLang)   mctaLang.textContent   = 'EN';
    }

    // Update textarea placeholder based on lang
    const textarea = qs('#intake-message');
    if (textarea) {
      textarea.placeholder = lang === 'ar'
        ? 'أضف أي تفاصيل تساعد في فهم طلبك...'
        : 'Add any details that would help us understand your matter...';
    }
  }

  if (langToggle) {
    langToggle.addEventListener('click', function () {
      setLanguage(currentLang === 'ar' ? 'en' : 'ar');
    });
  }
  if (mctaLang) {
    mctaLang.addEventListener('click', function () {
      setLanguage(currentLang === 'ar' ? 'en' : 'ar');
    });
  }

  /* ─────────────────────────────────────────────
     2. NAVBAR — scroll behaviour
  ───────────────────────────────────────────── */
  const draftBar = qs('#draft-bar');

  function handleNavbarScroll() {
    const offset = draftBar ? draftBar.offsetHeight : 0;
    if (window.scrollY > offset + 10) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', handleNavbarScroll, { passive: true });
  handleNavbarScroll(); // initialise on load

  /* ─────────────────────────────────────────────
     3. MOBILE NAV — hamburger
  ───────────────────────────────────────────── */
  const hamburger = qs('#hamburger');
  const navMobile = qs('#nav-mobile');

  function closeMobileNav() {
    if (!hamburger || !navMobile) return;
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    navMobile.classList.remove('open');
    navMobile.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (hamburger && navMobile) {
    hamburger.addEventListener('click', function () {
      const isOpen = navMobile.classList.contains('open');
      if (isOpen) {
        closeMobileNav();
      } else {
        hamburger.classList.add('open');
        hamburger.setAttribute('aria-expanded', 'true');
        navMobile.classList.add('open');
        navMobile.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
      }
    });

    // Close on mobile link click
    qsa('.mobile-nav-link, .mobile-nav-cta', navMobile).forEach(function (link) {
      link.addEventListener('click', function () {
        closeMobileNav();
      });
    });

    // Close on outside click
    document.addEventListener('click', function (e) {
      if (navMobile.classList.contains('open') &&
          !navMobile.contains(e.target) &&
          !hamburger.contains(e.target)) {
        closeMobileNav();
      }
    });
  }

  /* ─────────────────────────────────────────────
     4. SMOOTH SCROLL — nav links
  ───────────────────────────────────────────── */
  qsa('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const target = document.getElementById(this.getAttribute('href').slice(1));
      if (!target) return;
      e.preventDefault();
      const navHeight = navbar ? navbar.offsetHeight : 72;
      const draftH   = draftBar ? draftBar.offsetHeight : 0;
      const offset   = navHeight + draftH;
      const top      = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: top, behavior: 'smooth' });

      // Set active nav link
      qsa('.nav-link').forEach(function (l) { l.classList.remove('active'); });
      const matchingNavLink = qs(`.nav-link[href="#${target.id}"]`);
      if (matchingNavLink) matchingNavLink.classList.add('active');
    });
  });

  /* ─────────────────────────────────────────────
     5. SCROLL REVEAL (IntersectionObserver)
  ───────────────────────────────────────────── */
  const revealObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target); // fire once
      }
    });
  }, {
    threshold: 0.08,
    rootMargin: '0px 0px -40px 0px'
  });

  qsa('.reveal').forEach(function (el) {
    revealObserver.observe(el);
  });

  /* ─────────────────────────────────────────────
     6. UAE EMIRATE CHIPS — staggered entrance
  ───────────────────────────────────────────── */
  const chipsSection = qs('#coverage');
  const chips = qsa('.emirate-chip');

  const chipsObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        chips.forEach(function (chip, i) {
          setTimeout(function () {
            chip.classList.add('visible');
          }, i * 80);
        });
        chipsObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  if (chipsSection) chipsObserver.observe(chipsSection);

  /* ─────────────────────────────────────────────
     7. STICKY MOBILE CTA — entrance after hero
  ───────────────────────────────────────────── */
  const mobileCta = qs('#mobile-cta');
  const heroSection = qs('#hero');

  if (mobileCta && heroSection) {
    const ctaObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          mobileCta.classList.remove('visible');
        } else {
          mobileCta.classList.add('visible');
        }
      });
    }, { threshold: 0.2 });

    ctaObserver.observe(heroSection);
  }

  /* ─────────────────────────────────────────────
     8. INTAKE WIZARD
  ───────────────────────────────────────────── */
  const wizardNext      = qs('#wizard-next');
  const wizardBack      = qs('#wizard-back');
  const stepCount       = qs('#step-count');
  const progressSteps   = qsa('.progress-step[data-step]');
  const stepPanels      = qsa('.step-panel');
  const optionBtns      = qsa('.option-btn');
  const intakeTextarea  = qs('#intake-message');

  // Option button selection
  optionBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      const field = this.getAttribute('data-field');
      // Deselect others in same group
      qsa(`.option-btn[data-field="${field}"]`).forEach(function (b) {
        b.classList.remove('selected');
        b.setAttribute('aria-pressed', 'false');
      });
      this.classList.add('selected');
      this.setAttribute('aria-pressed', 'true');

      // Store data
      intakeData[field].val = this.getAttribute('data-val');
      intakeData[field].ar  = this.getAttribute('data-ar');
      intakeData[field].en  = this.getAttribute('data-en');

      // Enable next button
      validateCurrentStep();
    });
  });

  // Textarea input
  if (intakeTextarea) {
    intakeTextarea.addEventListener('input', function () {
      intakeData.message = this.value.trim();
      // Step 4 message is optional — next is always enabled
      if (wizardNext) wizardNext.disabled = false;
    });
  }

  function validateCurrentStep() {
    if (!wizardNext) return;
    switch (currentStep) {
      case 1: wizardNext.disabled = !intakeData.matter.val;  break;
      case 2: wizardNext.disabled = !intakeData.emirate.val; break;
      case 3: wizardNext.disabled = !intakeData.urgency.val; break;
      case 4: wizardNext.disabled = false; break; // optional
      case 5: wizardNext.disabled = true; break;
      default: wizardNext.disabled = true;
    }
  }

  function goToStep(step) {
    if (step < 1 || step > TOTAL_STEPS) return;

    // Hide all panels
    stepPanels.forEach(function (p) { p.classList.remove('active'); });

    // Show target panel
    const target = qs(`#step-${step}`);
    if (target) target.classList.add('active');

    // Update progress indicators
    progressSteps.forEach(function (dot, idx) {
      const dotStep = parseInt(dot.getAttribute('data-step'), 10);
      dot.classList.remove('active', 'done');
      if (dotStep === step) dot.classList.add('active');
      if (dotStep < step)  dot.classList.add('done');
    });

    // Update aria-valuenow on progress bar
    const progressBar = qs('#wizard-progress');
    if (progressBar) progressBar.setAttribute('aria-valuenow', step);

    // Update step count text
    if (stepCount) {
      stepCount.textContent = `${step} / ${TOTAL_STEPS}`;
    }

    // Back button
    if (wizardBack) wizardBack.disabled = (step === 1);

    // Next button label on last step
    if (wizardNext) {
      if (step === TOTAL_STEPS) {
        wizardNext.disabled = true;
        wizardNext.style.display = 'none';
      } else {
        wizardNext.style.display = '';
      }
    }

    // On step 5: populate summary + build send links
    if (step === TOTAL_STEPS) {
      populateSummary();
    }

    currentStep = step;
    validateCurrentStep();
  }

  function populateSummary() {
    const isEn = (currentLang === 'en');

    // Set summary values
    const elMatter  = qs('#summary-matter');
    const elEmirate = qs('#summary-emirate');
    const elUrgency = qs('#summary-urgency');
    const elMsg     = qs('#summary-message');
    const elMsgRow  = qs('#summary-message-row');

    if (elMatter) {
      elMatter.textContent = isEn
        ? (intakeData.matter.en || '—')
        : (intakeData.matter.ar || '—');
    }
    if (elEmirate) {
      elEmirate.textContent = isEn
        ? (intakeData.emirate.en || '—')
        : (intakeData.emirate.ar || '—');
    }
    if (elUrgency) {
      elUrgency.textContent = isEn
        ? (intakeData.urgency.en || '—')
        : (intakeData.urgency.ar || '—');
    }
    if (elMsgRow && elMsg) {
      if (intakeData.message) {
        elMsgRow.style.display = '';
        elMsg.textContent = intakeData.message;
      } else {
        elMsgRow.style.display = 'none';
      }
    }

    // Build WhatsApp message (Arabic-first)
    const waMsg = buildWhatsAppMessage();
    const waUrl = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(waMsg)}`;

    const sendWA = qs('#send-whatsapp');
    if (sendWA) sendWA.href = waUrl;

    // Build email mailto
    const emailBody = buildEmailBody();
    const emailUrl  = `mailto:${EMAIL_ADDR}?subject=${EMAIL_SUBJ}&body=${encodeURIComponent(emailBody)}`;
    const sendEmail = qs('#send-email');
    if (sendEmail) sendEmail.href = emailUrl;
  }

  function buildWhatsAppMessage() {
    const lines = [];
    lines.push('السلام عليكم،');
    lines.push('أرغب في طلب استشارة قانونية من مكتب عبدالله بن حارب ومشاركوه.');
    lines.push('');
    lines.push('• نوع القضية: ' + (intakeData.matter.ar || intakeData.matter.en || '—'));
    lines.push('• الإمارة: '    + (intakeData.emirate.ar || intakeData.emirate.en || '—'));
    lines.push('• الأولوية: '   + (intakeData.urgency.ar || intakeData.urgency.en || '—'));

    // English equivalent
    lines.push('');
    lines.push('(EN) Matter: '   + (intakeData.matter.en || '—'));
    lines.push('(EN) Emirate: '  + (intakeData.emirate.en || '—'));
    lines.push('(EN) Urgency: '  + (intakeData.urgency.en || '—'));

    if (intakeData.message) {
      lines.push('');
      lines.push('ملاحظات / Notes:');
      lines.push(intakeData.message);
    }

    lines.push('');
    lines.push('شكراً — ABH&Co. Website');
    return lines.join('\n');
  }

  function buildEmailBody() {
    const lines = [];
    lines.push('Dear ABH&Co.,');
    lines.push('');
    lines.push('I would like to request a legal consultation.');
    lines.push('');
    lines.push('Matter type: ' + (intakeData.matter.en || intakeData.matter.ar || '—'));
    lines.push('Emirate: '     + (intakeData.emirate.en || intakeData.emirate.ar || '—'));
    lines.push('Urgency: '     + (intakeData.urgency.en || intakeData.urgency.ar || '—'));
    if (intakeData.message) {
      lines.push('');
      lines.push('Additional notes:');
      lines.push(intakeData.message);
    }
    lines.push('');
    lines.push('--- Arabic ---');
    lines.push('نوع القضية: '  + (intakeData.matter.ar || '—'));
    lines.push('الإمارة: '     + (intakeData.emirate.ar || '—'));
    lines.push('الأولوية: '    + (intakeData.urgency.ar || '—'));
    lines.push('');
    lines.push('Sent via ABH&Co. website contact form.');
    return lines.join('\n');
  }

  // Wizard navigation events
  if (wizardNext) {
    wizardNext.addEventListener('click', function () {
      if (currentStep < TOTAL_STEPS) {
        goToStep(currentStep + 1);
      }
    });
  }

  if (wizardBack) {
    wizardBack.addEventListener('click', function () {
      if (currentStep > 1) {
        goToStep(currentStep - 1);
      }
    });
  }

  // Keyboard nav inside wizard
  document.addEventListener('keydown', function (e) {
    const wizardEl = qs('.wizard-wrap');
    if (!wizardEl || !wizardEl.contains(document.activeElement)) return;
    if (e.key === 'Enter' && wizardNext && !wizardNext.disabled) {
      wizardNext.click();
    }
  });

  // Initialise wizard state
  goToStep(1);

  /* ─────────────────────────────────────────────
     9. FAQ ACCORDION
  ───────────────────────────────────────────── */
  qsa('.faq-question').forEach(function (question) {
    question.addEventListener('click', function () {
      const item     = this.closest('.faq-item');
      const isOpen   = item.classList.contains('open');
      const answer   = item.querySelector('.faq-answer');

      // Close all other items
      qsa('.faq-item.open').forEach(function (openItem) {
        if (openItem !== item) {
          openItem.classList.remove('open');
          openItem.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
          openItem.querySelector('.faq-answer').style.maxHeight = '0';
        }
      });

      // Toggle this item
      if (isOpen) {
        item.classList.remove('open');
        this.setAttribute('aria-expanded', 'false');
        if (answer) answer.style.maxHeight = '0';
      } else {
        item.classList.add('open');
        this.setAttribute('aria-expanded', 'true');
        if (answer) {
          // Set explicit pixel max-height for smooth transition
          answer.style.maxHeight = answer.scrollHeight + 'px';
        }
      }
    });

    // Keyboard accessibility
    question.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        this.click();
      }
    });
  });

  /* ─────────────────────────────────────────────
     10. ACTIVE NAV LINK — scroll spy
  ───────────────────────────────────────────── */
  const sections = qsa('section[id], footer[id]');

  const navObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        qsa('.nav-link').forEach(function (link) {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, {
    rootMargin: '-40% 0px -40% 0px',
    threshold: 0
  });

  sections.forEach(function (s) { navObserver.observe(s); });

  /* ─────────────────────────────────────────────
     11. HERO ARABESQUE — subtle parallax
  ───────────────────────────────────────────── */
  const hero = qs('#hero');
  if (hero && window.matchMedia('(min-width: 769px)').matches) {
    window.addEventListener('scroll', function () {
      if (window.scrollY < window.innerHeight) {
        hero.style.backgroundPositionY = (window.scrollY * 0.25) + 'px';
      }
    }, { passive: true });
  }

  /* ─────────────────────────────────────────────
     12. SERVICE CARD — icon hover pulse
  ───────────────────────────────────────────── */
  qsa('.service-card').forEach(function (card) {
    const icon = card.querySelector('.service-icon svg');
    if (!icon) return;
    card.addEventListener('mouseenter', function () {
      icon.style.transform = 'scale(1.08)';
      icon.style.transition = 'transform 0.28s cubic-bezier(0.4,0,0.2,1)';
    });
    card.addEventListener('mouseleave', function () {
      icon.style.transform = 'scale(1)';
    });
  });

  /* ─────────────────────────────────────────────
     13. TESTIMONIAL CARD — subtle interactive tilt
        (desktop only, opt-in luxury feel)
  ───────────────────────────────────────────── */
  if (window.matchMedia('(min-width: 769px) and (hover: hover)').matches) {
    qsa('.testimonial-card').forEach(function (card) {
      card.addEventListener('mousemove', function (e) {
        const rect   = card.getBoundingClientRect();
        const x      = (e.clientX - rect.left) / rect.width  - 0.5;
        const y      = (e.clientY - rect.top)  / rect.height - 0.5;
        card.style.transform = `translateY(-3px) rotateX(${-y * 3}deg) rotateY(${x * 3}deg)`;
      });
      card.addEventListener('mouseleave', function () {
        card.style.transform = '';
        card.style.transition = 'transform 0.5s cubic-bezier(0.4,0,0.2,1)';
      });
    });
  }

  /* ─────────────────────────────────────────────
     14. MOBILE MENU — close on Escape key
  ───────────────────────────────────────────── */
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      closeMobileNav();
    }
  });

  /* ─────────────────────────────────────────────
     15. GOLD RULE ANIMATION — hero divider stagger
  ───────────────────────────────────────────── */
  const heroDivider = qs('.hero-divider');
  if (heroDivider) {
    // Already handled by CSS animation
    // Re-trigger if user navigates back to hero
  }

  /* ─────────────────────────────────────────────
     16. TEAM CARD — portrait entrance
  ───────────────────────────────────────────── */
  qsa('.team-card').forEach(function (card, idx) {
    card.style.transitionDelay = (idx * 0.08) + 's';
  });

  /* ─────────────────────────────────────────────
     17. FAQ — re-calculate maxHeight on resize
  ───────────────────────────────────────────── */
  window.addEventListener('resize', function () {
    qsa('.faq-item.open .faq-answer').forEach(function (answer) {
      answer.style.maxHeight = answer.scrollHeight + 'px';
    });
  });

  /* ─────────────────────────────────────────────
     18. FOOTER DRAFT NOTICE — lang switch
  ───────────────────────────────────────────── */
  const footerDraftEn = qs('.footer-bottom .footer-draft.en-text');
  if (footerDraftEn) {
    // Already controlled by .lang-en CSS rules
    // No additional JS needed — CSS handles it
  }

  /* ─────────────────────────────────────────────
     19. INTAKE WIZARD — re-populate summary on lang change
  ───────────────────────────────────────────── */
  if (langToggle) {
    langToggle.addEventListener('click', function () {
      if (currentStep === TOTAL_STEPS) {
        // Re-populate summary in new language
        populateSummary();
      }
    });
  }

  /* ─────────────────────────────────────────────
     20. PAGE INIT — set initial textarea placeholder
  ───────────────────────────────────────────── */
  const initTextarea = qs('#intake-message');
  if (initTextarea) {
    initTextarea.placeholder = 'أضف أي تفاصيل تساعد في فهم طلبك...';
  }

  /* ─────────────────────────────────────────────
     21. LOGO MARK — hero entrance stagger done via CSS
         No JS needed — animation is CSS @keyframes
  ───────────────────────────────────────────── */

  /* ─────────────────────────────────────────────
     22. PERFORMANCE — prefetch key links on hover
  ───────────────────────────────────────────── */
  qsa('a[href^="https://wa.me"], a[href^="https://maps"]').forEach(function (link) {
    link.addEventListener('mouseenter', function () {
      if (!this._prefetched) {
        const hint = document.createElement('link');
        hint.rel  = 'prefetch';
        hint.href = this.href;
        document.head.appendChild(hint);
        this._prefetched = true;
      }
    });
  });

  /* ─────────────────────────────────────────────
     DONE
  ───────────────────────────────────────────── */
  console.info('[ABH&Co. V2] Script loaded. Lang: ' + currentLang);

}());
