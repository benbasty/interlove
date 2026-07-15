// Sticky Nav
// window.addEventListener('scroll', () => {
//   const nav = document.getElementById('navbar');
//   nav.classList.toggle('sticky', window.scrollY > 100);
// });

// Mobile Nav Toggle
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".nav-menu");
let menuReturnFocus;

function menuLinks() {
  if (!menu) return [];
  return Array.from(menu.querySelectorAll("a[href]")).filter((link) => link.offsetParent !== null);
}

function setMenuOpen(isOpen, restoreFocus = false) {
  if (!hamburger || !menu) return;
  if (isOpen) menuReturnFocus = document.activeElement;
  menu.classList.toggle("active", isOpen);
  hamburger.setAttribute("aria-expanded", String(isOpen));
  hamburger.setAttribute(
    "aria-label",
    isOpen ? "Close navigation menu" : "Open navigation menu"
  );

  if (isOpen) {
    menuLinks()[0]?.focus();
  } else if (restoreFocus) {
    (menuReturnFocus || hamburger).focus();
  }
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

document.addEventListener("keydown", (event) => {
  if (!menu?.classList.contains("active")) return;

  if (event.key === "Escape") {
    event.preventDefault();
    setMenuOpen(false, true);
    return;
  }

  if (event.key !== "Tab") return;
  const links = menuLinks();
  if (!links.length) return;

  const firstLink = links[0];
  const lastLink = links[links.length - 1];
  if (event.shiftKey && document.activeElement === firstLink) {
    event.preventDefault();
    lastLink.focus();
  } else if (!event.shiftKey && document.activeElement === lastLink) {
    event.preventDefault();
    firstLink.focus();
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 768 && menu?.classList.contains("active")) {
    setMenuOpen(false);
  }
});
