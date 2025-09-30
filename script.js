// Initialiser feather ikoner
feather.replace();

// Mobile menu toggle
document.querySelector('button')?.addEventListener('click', () => {
  const nav = document.querySelector('.md\\:flex');
  if (nav) nav.classList.toggle('hidden');
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const href = anchor.getAttribute('href');
    if (!href) return;
    const target = document.querySelector(href);
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth' });
  });
});
