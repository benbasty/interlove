const scrollBtn = document.getElementById("scrollToTop");

window.addEventListener("scroll", () => {
  const secondSection = document.querySelectorAll("section")[1]; // Adjust if needed
  const triggerPoint = secondSection ? secondSection.offsetTop : 300;

  if (window.scrollY > triggerPoint) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});