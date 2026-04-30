function navigate(page, save = true) {
  if (save) {
    window.location.hash = page;
  }

  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const target = document.getElementById('page-' + page);

  if (target) {
    target.classList.add('active');
  }

  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.toggle('active-link', link.dataset.page === page);
  });

  if (page === 'home') {
    document.body.classList.add('no-scroll');
  } else {
    document.body.classList.remove('no-scroll');
  }

  window.scrollTo(0, 0);
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;

  lucide.createIcons();
}

function initPageFromHash() {
  const page = window.location.hash.replace('#', '') || 'home';
  navigate(page, false);
  document.documentElement.style.visibility = 'visible';
}

window.addEventListener('load', initPageFromHash);
window.addEventListener('hashchange', initPageFromHash);

function toggleTOS() {
  const content = document.getElementById('tos-content');
  const icon = document.getElementById('tos-icon');

  content.classList.toggle('hidden');
  icon.style.transform = content.classList.contains('hidden') ? 'rotate(0deg)' : 'rotate(180deg)';
}

function filterGallery(category) {
  const items = document.querySelectorAll('#gallery-grid .gallery-item');
  const buttons = document.querySelectorAll('.gallery-filter');

  buttons.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.filter === category);
  });

  items.forEach(item => {
    if (category === 'all' || item.dataset.category === category) {
      item.style.display = 'flex';
    } else {
      item.style.display = 'none';
    }
  });
}

function openLightbox(src) {
  const lightbox = document.getElementById('lightbox');
  const img = document.getElementById('lightbox-img');

  img.src = src;
  lightbox.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeLightbox(event) {
  if (event && event.target !== document.getElementById('lightbox')) return;

  const lightbox = document.getElementById('lightbox');
  lightbox.classList.add('hidden');

  if (!document.body.classList.contains('no-scroll')) {
    document.body.style.overflow = 'scroll';
  }
}

lucide.createIcons();
