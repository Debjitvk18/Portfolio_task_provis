// ===== Smooth Scroll =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

// ===== Active Link Highlight =====
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav ul li a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 80;
    if (scrollY >= sectionTop) current = section.getAttribute('id');
  });

  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
  });
});

// ===== Responsive Menu Toggle =====
const nav = document.querySelector('nav ul');
const header = document.querySelector('header');
const menuBtn = document.createElement('div');
menuBtn.classList.add('menu-toggle');
menuBtn.innerHTML = '&#9776;';
header.querySelector('.container').prepend(menuBtn);

menuBtn.addEventListener('click', () => {
  nav.classList.toggle('show');
  menuBtn.classList.toggle('open');
});

// ===== Scroll Animations =====
const revealElements = document.querySelectorAll('.section, .project-card, .edu-card, .skill-card');

function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;
  revealElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < triggerBottom) el.classList.add('visible');
  });
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// ===== Back to Top Button =====
const backToTop = document.createElement('button');
backToTop.textContent = '↑';
backToTop.classList.add('back-to-top');
document.body.appendChild(backToTop);

window.addEventListener('scroll', () => {
  backToTop.style.display = window.scrollY > 400 ? 'block' : 'none';
});

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===== Dark / Light Mode Toggle (with localStorage) =====
const themeToggle = document.createElement('button');
themeToggle.classList.add('theme-toggle');
document.querySelector('header .container').appendChild(themeToggle);

// Load saved theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  document.body.classList.add('dark-mode');
  themeToggle.textContent = '☀️';
} else {
  themeToggle.textContent = '🌙';
}

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  const isDark = document.body.classList.contains('dark-mode');
  themeToggle.textContent = isDark ? '☀️' : '🌙';
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});
