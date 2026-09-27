// ==========================================================
// SHARED SCRIPT — runs on every page
// ==========================================================

document.addEventListener('DOMContentLoaded', () => {

  // ----- Auto-update footer year -----
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // ----- Mobile hamburger menu -----
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const mainNav = document.getElementById('mainNav');

  if (hamburgerBtn && mainNav) {
    hamburgerBtn.addEventListener('click', () => {
      mainNav.classList.toggle('open');
      hamburgerBtn.classList.toggle('active');
    });

    // Close menu when a link is clicked (mobile UX)
    mainNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mainNav.classList.remove('open');
        hamburgerBtn.classList.remove('active');
      });
    });
  }

  // ----- Hero slider (index.html only) -----
  const heroSlides = document.querySelectorAll('.hero-slide');
  if (heroSlides.length > 1) {
    let currentSlide = 0;

    setInterval(() => {
      heroSlides[currentSlide].classList.remove('active');
      currentSlide = (currentSlide + 1) % heroSlides.length;
      heroSlides[currentSlide].classList.add('active');
    }, 5000);
  }

  // ----- Sticky header shadow on scroll -----
  const header = document.querySelector('.site-header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.3)';
      } else {
        header.style.boxShadow = 'none';
      }
    });
  }

});
