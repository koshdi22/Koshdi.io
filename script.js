function navigate(page) {
  window.location.hash = page;

  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
 const target = document.getElementById('page-' + page);
  target.classList.add('active');

  document.querySelectorAll('.nav-link').forEach(l => {
    l.classList.toggle('active-link', l.dataset.page === page);
  });
  
const marquee = document.getElementById('home-marquee');

if (page === 'home') {
  marquee.style.display = 'block';
} else {
  marquee.style.display = 'none';
}
  
  const container = document.querySelector('.flex-1.overflow-auto');

  if (page === 'home') {
    container.style.overflow = 'hidden';
  } else {
    container.style.overflow = 'auto';
    container.scrollTop = 0;
  }

  lucide.createIcons();
  document.documentElement.style.visibility = 'visible';
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
