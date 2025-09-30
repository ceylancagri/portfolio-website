// Smooth scroll til sektioner
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Galleri filtrering
const filterButtons = document.querySelectorAll('.filter-btn');
const projectItems = document.querySelectorAll('.project-item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Fjern active class fra alle knapper
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Tilføj active class til den klikkede knap
        button.classList.add('active');
        
        const filterValue = button.getAttribute('data-filter');
        
        projectItems.forEach(item => {
            if (filterValue === 'alle') {
                item.classList.remove('hidden');
                item.style.display = 'block';
            } else {
                if (item.getAttribute('data-category') === filterValue) {
                    item.classList.remove('hidden');
                    item.style.display = 'block';
                } else {
                    item.classList.add('hidden');
                    item.style.display = 'none';
                }
            }
        });
    });
});

// Lightbox funktionalitet
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxCaption = document.querySelector('.lightbox-caption');
const closeBtn = document.querySelector('.close');

// Åbn lightbox når der klikkes på et projekt billede
projectItems.forEach(item => {
    const img = item.querySelector('img');
    const caption = item.querySelector('figcaption h3').textContent;
    
    img.addEventListener('click', () => {
        lightbox.style.display = 'block';
        lightboxImg.src = img.src;
        lightboxCaption.textContent = caption;
        document.body.style.overflow = 'hidden'; // Forhindrer scrolling
    });
});

// Luk lightbox
closeBtn.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        closeLightbox();
    }
});

// Luk lightbox med ESC tast
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeLightbox();
    }
});

function closeLightbox() {
    lightbox.style.display = 'none';
    document.body.style.overflow = 'auto'; // Genaktiver scrolling
}

// Kontaktformular behandling
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Her kan du tilføje din egen form-behandling
    // F.eks. sende data til en server eller email service
    
    alert('Tak for din besked! Jeg vender tilbage hurtigst muligt.');
    contactForm.reset();
});

// Scroll animation for navigation
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(44, 62, 80, 0.95)';
    } else {
        header.style.background = '#2c3e50';
    }
});