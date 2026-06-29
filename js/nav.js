// Логіка мобільного меню (відкриття/закриття, клік поза)

function toggleMenu() {
    document.getElementById('mobileMenu').classList.toggle('open');
}

// Клік поза меню закриває його
document.addEventListener('click', function(e) {
    const menu = document.getElementById('mobileMenu');
    const btn = document.getElementById('menuBtn');
    if (!menu.contains(e.target) && !btn.contains(e.target)) {
        menu.classList.remove('open');
    }
});