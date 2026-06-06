// 1. تأثير ظهور العناصر الفخم عند التمرير (Scroll Reveal)
const observerOptions = {
    threshold: 0.15
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, observerOptions);

document.querySelectorAll('.card, .about-col, .about-card').forEach(el => {
    observer.observe(el);
});

// 2. تأثير تصغير وتغيير خلفية شريط القائمة العلوي عند النزول لأسفل
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// 3. تأثير الانتقال السلس والنظيف عند الضغط على الروابط (Smooth Scroll)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetElement = document.querySelector(this.getAttribute('href'));
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// 4. إعداد الخريطة والتركيز التلقائي على Karlsruhe الألمانية
var map = L.map('map', {
    center: [49.0069, 8.4037], 
    zoom: 5, // تقريب الرؤية قليلاً لتظهر ألمانيا بوضوح وسط أوروبا
    scrollWheelZoom: false
});

L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// إضافة دبوس الماركر وتفعيله ليفتح تلقائياً (.openPopup)
var marker = L.marker([49.0069, 8.4037]).addTo(map);
marker.bindPopup('<b>DIMSTAL</b><br>Karlsruhe, Germany').openPopup();