function navigate(page) {
  window.location.hash = page;

  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-' + page).classList.add('active');

  document.querySelectorAll('.nav-link').forEach(l => {
    l.classList.toggle('active-link', l.dataset.page === page);
  });

  // 👇 ВАЖНО
  if (page === 'home') {
    document.body.classList.add('no-scroll');
  } else {
    document.body.classList.remove('no-scroll');
  }

  window.scrollTo(0, 0);

  document.documentElement.style.visibility = 'visible';
  lucide.createIcons();
}

window.addEventListener('load', () => {
  const page = window.location.hash.replace('#', '') || 'home';
  navigate(page);
});

window.addEventListener('hashchange', () => {
  const page = window.location.hash.replace('#', '') || 'home';
  navigate(page);
});

/* Lightbox */
function openLightbox(src) {
  const lightbox = document.getElementById('lightbox');
  const img = document.getElementById('lightbox-img');

  img.src = src;
  lightbox.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  document.getElementById('lightbox').classList.add('hidden');
  document.body.style.overflow = 'auto';
}

/* Filter */
function filterGallery(category) {
  const items = document.querySelectorAll('.gallery-item');
  const buttons = document.querySelectorAll('.gallery-filter');

  buttons.forEach(btn =>
    btn.classList.toggle('active', btn.dataset.filter === category)
  );

  items.forEach(item => {
    item.style.display =
      category === 'all' || item.dataset.category === category
        ? 'flex'
        : 'none';
  });
}
