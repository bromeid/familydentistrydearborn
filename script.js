document.addEventListener('DOMContentLoaded', () => {
    // 1. Initial Load Animations
    // Select elements to animate on load
    const heroContent = document.querySelector('.hero-content');
    const heroImage = document.querySelector('.hero-image-wrapper');
    const contactRibbon = document.querySelector('.contact-ribbon');
    const header = document.querySelector('.header');

    // Add 'fade-in-up' class with delays
    if (header) {
        header.classList.add('animate-fade-in');
    }

    if (heroContent) {
        setTimeout(() => {
            heroContent.classList.add('animate-fade-in-up');
        }, 200);
    }

    if (heroImage) {
        setTimeout(() => {
            heroImage.classList.add('animate-fade-in-up');
        }, 400); // Staggered
    }

    if (contactRibbon) {
        setTimeout(() => {
            contactRibbon.classList.add('animate-fade-in');
        }, 800);
    }


    // 2. Scroll Reveal Animations (Intersection Observer)
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // Trigger when 15% of the element is visible
    };

    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    // Elements to observe for scroll reveal
    const scrollElements = document.querySelectorAll('.service-card, .about-content, .about-image-wrapper, .section-title, .section-text');

    scrollElements.forEach(el => {
        el.classList.add('scroll-hidden'); // Initially hide
        scrollObserver.observe(el);
    });
});
