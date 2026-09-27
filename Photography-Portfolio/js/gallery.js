// ==========================================================
// GALLERY PAGE — filtering + lightbox
// ==========================================================

document.addEventListener('DOMContentLoaded', () => {

  const filterButtons = document.querySelectorAll('.filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');

  // ----- Filtering -----
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Update active button state
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      galleryItems.forEach(item => {
        const category = item.getAttribute('data-category');
        const shouldShow = filterValue === 'all' || filterValue === category;
        item.classList.toggle('hidden', !shouldShow);
      });
    });
  });

  // ----- Lightbox -----
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const closeBtn = document.getElementById('lightboxClose');
  const prevBtn = document.getElementById('lightboxPrev');
  const nextBtn = document.getElementById('lightboxNext');

  let currentIndex = 0;
  let visibleItems = [];

  function refreshVisibleItems() {
    visibleItems = Array.from(galleryItems).filter(
      item => !item.classList.contains('hidden')
    );
  }

  function openLightbox(index) {
    refreshVisibleItems();
    currentIndex = index;
    const img = visibleItems[currentIndex].querySelector('img');
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightbox.classList.add('active');
  }

  function showImageAt(index) {
    if (visibleItems.length === 0) return;
    currentIndex = (index + visibleItems.length) % visibleItems.length;
    const img = visibleItems[currentIndex].querySelector('img');
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
  }

  galleryItems.forEach((item) => {
    item.addEventListener('click', () => {
      refreshVisibleItems();
      const clickedIndex = visibleItems.indexOf(item);
      openLightbox(clickedIndex);
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      lightbox.classList.remove('active');
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => showImageAt(currentIndex - 1));
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => showImageAt(currentIndex + 1));
  }

  // Close lightbox when clicking outside the image
  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        lightbox.classList.remove('active');
      }
    });
  }

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (!lightbox || !lightbox.classList.contains('active')) return;
    if (e.key === 'Escape') lightbox.classList.remove('active');
    if (e.key === 'ArrowLeft') showImageAt(currentIndex - 1);
    if (e.key === 'ArrowRight') showImageAt(currentIndex + 1);
  });

});
