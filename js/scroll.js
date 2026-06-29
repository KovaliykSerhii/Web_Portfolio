// IntersectionObserver для появи секцій + автосховання навбару

// Анімація при скролі
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.05 });

document.querySelectorAll('section').forEach(sec => {
    sec.style.opacity = '0';
    sec.style.transform = 'translateY(15px)';
    sec.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(sec);
});

// Hero завжди видимий
document.querySelector('.fade-up').style.opacity = '1';
document.querySelector('.fade-up').style.transform = 'translateY(0)';

// Автосховання навбару
let lastScrollTop = 0;
const navbar = document.querySelector('nav');

window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        // Скрол вниз - ховаємо
        navbar.style.transform = 'translateY(-100%)';
    } else {
        // Скрол вгору - показуємо
        navbar.style.transform = 'translateY(0)';
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Для мобільних
});