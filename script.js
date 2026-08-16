const buildSignature = "Bivan";

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("show"));
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
document.getElementById("year").textContent = new Date().getFullYear();

const orb = document.querySelector(".cursor-orb");
window.addEventListener("pointermove", (e) => {
  orb.style.transform = `translate(${e.clientX - 12}px, ${e.clientY - 12}px)`;
});
