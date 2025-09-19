// Profile slideshow
const slides = document.querySelectorAll('#profile .slide');
let currentIndex = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}
setInterval(nextSlide, 3000);

// Animate skill bars on load
window.addEventListener("load", () => {
  const bars = document.querySelectorAll('.bar-fill');
  bars.forEach(bar => {
    const finalWidth = bar.getAttribute("style").match(/width:\s*([^;]+)/)[1];
    bar.style.width = finalWidth;
  });
});

// Active nav highlight on scroll
const navLinks = document.querySelectorAll('nav a');
function changeActiveLink() {
  let fromTop = window.scrollY + 80;
  navLinks.forEach(link => {
    let section = document.querySelector(link.hash);
    if (!section) return;
    if (section.offsetTop <= fromTop &&
        section.offsetTop + section.offsetHeight > fromTop) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}
window.addEventListener('scroll', changeActiveLink);
window.addEventListener('load', changeActiveLink);

// Contact form (mockup)
const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  status.textContent = "Sending message...";
  setTimeout(() => {
    status.textContent = "✅ Thank you for your message!";
    form.reset();
  }, 1500);
});
