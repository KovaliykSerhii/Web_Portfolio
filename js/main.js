// Entry point: ініціалізація DOM, обробка форми, TODO-позначки

// Ініціалізація DOM
document.addEventListener('DOMContentLoaded', function() {
    // TODO: Ініціалізація інших компонентів
    console.log('Portfolio loaded');
});

// Обробка форми
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Дякую! Повідомлення відправлено ✉️');
    this.reset();
    // TODO: Надіслати дані на сервер або email
});