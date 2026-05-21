// تأثير ظهور العناصر عند التمرير
const observerOptions = {
    threshold: 0.2
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, observerOptions);

// تطبيق التأثير على العناصر المخفية
document.querySelectorAll('.hidden, .card, .about-col').forEach(el => {
    observer.observe(el);
});

// تأثير تصغير القائمة عند التمرير
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// تأثيرsmooth scroll للروابط
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
var map = L.map('map', {
    center: [49.0069, 8.4037], // Karlsruhe
    zoom: 4,
    scrollWheelZoom: false
});

L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

//marker لـ Karlsruhe
var marker = L.marker([49.0069, 8.4037]).addTo(map);
marker.bindPopup('<b>DIMSTAL</b><br>Karlsruhe, Germany');