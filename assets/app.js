/**
 * INSTA SKIN CLINIC - CORE JAVASCRIPT ENGINE
 * Skin, Laser & Hair Clinic | Kashmir Rd, Peoples Colony, Gujranwala
 * Phone / WhatsApp: +92 300 9353482
 */

(function () {
  'use strict';

  // Constants
  const CLINIC_PHONE = '+923009353482';
  const CLINIC_WHATSAPP_BASE = 'https://wa.me/923009353482';

  document.addEventListener('DOMContentLoaded', () => {
    initScrollProgressBar();
    initScrollReveal();
    initParallax();
    initCounters();
    initBeforeAfterSliders();
    initAccordions();
    initMobileNav();
    initAssessmentDrawer();
    initCategoryFilters();
    initConsultationForm();
    initLucideIcons();
  });

  /* ------------------------------------------------------------------------
     1. Top Fixed 3px Champagne Gold Scroll Progress Bar
     ------------------------------------------------------------------------ */
  function initScrollProgressBar() {
    let progressBar = document.getElementById('scroll-progress');
    if (!progressBar) {
      progressBar = document.createElement('div');
      progressBar.id = 'scroll-progress';
      document.body.appendChild(progressBar);
    }

    const updateProgress = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      progressBar.style.width = `${Math.min(100, Math.max(0, scrollPercent))}%`;
    };

    window.addEventListener('scroll', updateProgress, { passive: true });
    updateProgress();
  }

  /* ------------------------------------------------------------------------
     2. Staggered Scroll-Reveal Cascade (IntersectionObserver)
     ------------------------------------------------------------------------ */
  function initScrollReveal() {
    const revealElements = document.querySelectorAll(
      '.reveal-fade-up, .reveal-fade-left, .reveal-fade-right, .reveal-zoom-in'
    );

    if (!('IntersectionObserver' in window)) {
      revealElements.forEach(el => el.classList.add('is-revealed'));
      return;
    }

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          obs.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => observer.observe(el));
  }

  /* ------------------------------------------------------------------------
     3. Scroll-Linked Vertical Parallax (60fps requestAnimationFrame)
     ------------------------------------------------------------------------ */
  function initParallax() {
    const parallaxElements = document.querySelectorAll('[data-parallax]');
    if (!parallaxElements.length) return;

    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          parallaxElements.forEach(el => {
            const speed = parseFloat(el.getAttribute('data-parallax')) || 0.15;
            const rect = el.getBoundingClientRect();
            // Only transform if in viewport vicinity
            if (rect.top < window.innerHeight && rect.bottom > 0) {
              const offset = (window.innerHeight / 2 - (rect.top + rect.height / 2)) * speed;
              el.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0)`;
            }
          });
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ------------------------------------------------------------------------
     4. Smooth Count-Up Animations for Ratings & Clinic Stats
     ------------------------------------------------------------------------ */
  function initCounters() {
    const counters = document.querySelectorAll('[data-counter]');
    if (!counters.length) return;

    const animateCounter = (el) => {
      const targetStr = el.getAttribute('data-counter');
      const target = parseFloat(targetStr);
      const isDecimal = targetStr.includes('.');
      const prefix = el.getAttribute('data-prefix') || '';
      const suffix = el.getAttribute('data-suffix') || '';
      const duration = parseInt(el.getAttribute('data-duration'), 10) || 1800;
      const startTime = performance.now();

      const updateCount = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // Ease Out Cubic
        const ease = 1 - Math.pow(1 - progress, 3);
        const currentVal = target * ease;

        el.textContent = `${prefix}${isDecimal ? currentVal.toFixed(1) : Math.floor(currentVal).toLocaleString()}${suffix}`;

        if (progress < 1) {
          requestAnimationFrame(updateCount);
        } else {
          el.textContent = `${prefix}${targetStr}${suffix}`;
        }
      };

      requestAnimationFrame(updateCount);
    };

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    counters.forEach(c => observer.observe(c));
  }

  /* ------------------------------------------------------------------------
     5. Interactive Draggable Before & After Comparison Slider
     ------------------------------------------------------------------------ */
  function initBeforeAfterSliders() {
    const sliders = document.querySelectorAll('.ba-container');

    sliders.forEach(slider => {
      const beforeImg = slider.querySelector('.ba-before-image');
      const handle = slider.querySelector('.ba-handle');
      if (!beforeImg || !handle) return;

      let isDragging = false;

      const setPosition = (xPos) => {
        const rect = slider.getBoundingClientRect();
        let posX = xPos - rect.left;
        posX = Math.max(0, Math.min(posX, rect.width));
        const percentage = (posX / rect.width) * 100;

        beforeImg.style.clipPath = `polygon(0 0, ${percentage}% 0, ${percentage}% 100%, 0 100%)`;
        handle.style.left = `${percentage}%`;
      };

      // Pointer event handlers (works seamlessly on desktop mouse and mobile touch)
      const onPointerDown = (e) => {
        isDragging = true;
        slider.setPointerCapture(e.pointerId);
        setPosition(e.clientX);
      };

      const onPointerMove = (e) => {
        if (!isDragging) return;
        setPosition(e.clientX);
      };

      const onPointerUp = (e) => {
        if (isDragging) {
          isDragging = false;
          try {
            slider.releasePointerCapture(e.pointerId);
          } catch (err) {
            // Ignore capture error
          }
        }
      };

      slider.addEventListener('pointerdown', onPointerDown);
      slider.addEventListener('pointermove', onPointerMove);
      slider.addEventListener('pointerup', onPointerUp);
      slider.addEventListener('pointercancel', onPointerUp);

      // Keyboard accessibility (Left / Right arrow keys when focused)
      slider.setAttribute('tabindex', '0');
      slider.setAttribute('role', 'slider');
      slider.setAttribute('aria-label', 'Before and After Image Comparison Slider');
      slider.addEventListener('keydown', (e) => {
        const currentLeft = parseFloat(handle.style.left) || 50;
        if (e.key === 'ArrowLeft') {
          e.preventDefault();
          const next = Math.max(0, currentLeft - 5);
          beforeImg.style.clipPath = `polygon(0 0, ${next}% 0, ${next}% 100%, 0 100%)`;
          handle.style.left = `${next}%`;
        } else if (e.key === 'ArrowRight') {
          e.preventDefault();
          const next = Math.min(100, currentLeft + 5);
          beforeImg.style.clipPath = `polygon(0 0, ${next}% 0, ${next}% 100%, 0 100%)`;
          handle.style.left = `${next}%`;
        }
      });
    });
  }

  /* ------------------------------------------------------------------------
     6. Accordions (Treatment Specs & FAQs)
     ------------------------------------------------------------------------ */
  function initAccordions() {
    const accordions = document.querySelectorAll('.accordion-header');

    accordions.forEach(header => {
      header.addEventListener('click', () => {
        const item = header.closest('.accordion-item');
        if (!item) return;
        const isActive = item.classList.contains('active');

        // Optional: close siblings in the same accordion group
        const group = item.closest('.accordion-group');
        if (group) {
          group.querySelectorAll('.accordion-item').forEach(sibling => {
            if (sibling !== item) sibling.classList.remove('active');
          });
        }

        if (isActive) {
          item.classList.remove('active');
        } else {
          item.classList.add('active');
        }
      });
    });
  }

  /* ------------------------------------------------------------------------
     7. Mobile Navigation Drawer
     ------------------------------------------------------------------------ */
  function initMobileNav() {
    const toggleBtn = document.getElementById('mobile-menu-toggle');
    const closeBtn = document.getElementById('mobile-menu-close');
    const drawerBackdrop = document.getElementById('mobile-drawer-backdrop');
    const drawerPanel = document.getElementById('mobile-drawer-panel');

    if (!toggleBtn || !drawerBackdrop || !drawerPanel) return;

    const openDrawer = () => {
      drawerBackdrop.classList.add('active');
      drawerPanel.classList.add('active');
      document.body.style.overflow = 'hidden';
    };

    const closeDrawer = () => {
      drawerBackdrop.classList.remove('active');
      drawerPanel.classList.remove('active');
      document.body.style.overflow = '';
    };

    toggleBtn.addEventListener('click', openDrawer);
    if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
    drawerBackdrop.addEventListener('click', (e) => {
      if (e.target === drawerBackdrop) closeDrawer();
    });

    // Close mobile drawer when pressing Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeDrawer();
    });
  }

  /* ------------------------------------------------------------------------
     8. Floating WhatsApp Concierge & Quick Assessment Drawer
     ------------------------------------------------------------------------ */
  function initAssessmentDrawer() {
    const openBtns = document.querySelectorAll('[data-open-assessment]');
    const closeBtn = document.getElementById('assessment-drawer-close');
    const backdrop = document.getElementById('assessment-drawer-backdrop');
    const panel = document.getElementById('assessment-drawer-panel');
    const assessmentForm = document.getElementById('quick-assessment-form');

    if (!backdrop || !panel) return;

    const openDrawer = (e) => {
      if (e) e.preventDefault();
      backdrop.classList.add('active');
      panel.classList.add('active');
      document.body.style.overflow = 'hidden';
    };

    const closeDrawer = () => {
      backdrop.classList.remove('active');
      panel.classList.remove('active');
      document.body.style.overflow = '';
    };

    openBtns.forEach(btn => btn.addEventListener('click', openDrawer));
    if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) closeDrawer();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && panel.classList.contains('active')) {
        closeDrawer();
      }
    });

    if (assessmentForm) {
      assessmentForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(assessmentForm);
        const name = formData.get('patient_name') || 'Guest';
        const concern = formData.get('concern') || 'General Dermatology Consultation';
        const area = formData.get('treatment_area') || 'Face / General';
        const time = formData.get('preferred_time') || 'Flexible';
        const notes = formData.get('notes') || 'Please advise on doctor availability.';

        const message = 
`Hello Insta Skin Clinic! 🌿
I would like to book a clinical consultation with Dr. at your Gujranwala clinic (Kashmir Rd, Peoples Colony).

*Patient Name:* ${name}
*Primary Concern:* ${concern}
*Target Area:* ${area}
*Preferred Time:* ${time}
*Details / Notes:* ${notes}

Could you please confirm the earliest available consultation appointment? Thank you!`;

        const encoded = encodeURIComponent(message);
        window.open(`${CLINIC_WHATSAPP_BASE}?text=${encoded}`, '_blank');
        closeDrawer();
      });
    }
  }

  /* ------------------------------------------------------------------------
     9. Category Filter Tabs on Results Page
     ------------------------------------------------------------------------ */
  function initCategoryFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    if (!filterButtons.length || !galleryItems.length) return;

    filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const filter = btn.getAttribute('data-filter');

        // Update active class
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        galleryItems.forEach(item => {
          const category = item.getAttribute('data-category');
          if (filter === 'all' || category === filter) {
            item.style.display = 'block';
            setTimeout(() => {
              item.style.opacity = '1';
              item.style.transform = 'scale(1)';
            }, 30);
          } else {
            item.style.opacity = '0';
            item.style.transform = 'scale(0.95)';
            setTimeout(() => {
              item.style.display = 'none';
            }, 250);
          }
        });
      });
    });
  }

  /* ------------------------------------------------------------------------
     10. Interactive Skin & Hair Consultation Builder (Contact Page)
     ------------------------------------------------------------------------ */
  function initConsultationForm() {
    const consultationForm = document.getElementById('consultation-builder-form');
    if (!consultationForm) return;

    consultationForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(consultationForm);

      const name = formData.get('full_name') || 'Patient';
      const phone = formData.get('phone_number') || 'Not provided';
      const concern = formData.get('concern_type') || 'Comprehensive Skin / Hair Assessment';
      const date = formData.get('preferred_date') || 'Earliest available date';
      const slot = formData.get('time_slot') || 'Afternoon';
      const notes = formData.get('medical_notes') || 'Looking for personalized treatment recommendation.';

      const message = 
`Hello Insta Skin Clinic! 🌿
I am requesting a personalized clinical consultation via your website form.

*Name:* ${name}
*Phone / WhatsApp:* ${phone}
*Treatment Interest:* ${concern}
*Preferred Date:* ${date}
*Preferred Time Slot:* ${slot}
*Medical History / Specific Notes:* ${notes}

Location: Insta Skin Clinic, Kashmir Rd, Sector W Peoples Colony, Gujranwala.`;

      const encoded = encodeURIComponent(message);
      window.open(`${CLINIC_WHATSAPP_BASE}?text=${encoded}`, '_blank');
    });
  }

  /* ------------------------------------------------------------------------
     Lucide Icons Initializer
     ------------------------------------------------------------------------ */
  function initLucideIcons() {
    if (window.lucide && typeof window.lucide.createIcons === 'function') {
      window.lucide.createIcons();
    }
  }

})();
