// Sticky Nav
// window.addEventListener('scroll', () => {
//   const nav = document.getElementById('navbar');
//   nav.classList.toggle('sticky', window.scrollY > 100);
// });

// Mobile Nav Toggle
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".nav-menu");

function setMenuOpen(isOpen) {
  if (!hamburger || !menu) return;
  menu.classList.toggle("active", isOpen);
  hamburger.setAttribute("aria-expanded", String(isOpen));
  hamburger.setAttribute(
    "aria-label",
    isOpen ? "Close navigation menu" : "Open navigation menu"
  );
}

if (hamburger && menu) {
  hamburger.addEventListener("click", () => {
    setMenuOpen(!menu.classList.contains("active"));
  });
}

// Auto-close menu on nav link click (mobile)
document.querySelectorAll(".nav-menu a").forEach(link => {
  link.addEventListener("click", () => {
    setMenuOpen(false);
  });
});
