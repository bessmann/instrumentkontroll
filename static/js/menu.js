// Mobile menu toggle (replaces the former client-side JS framework binding).
// Toggles a `menu-open` class on <body>; all show/hide is handled in main.css.
const btn = document.querySelector(".header__mobile-toggle");

const closeMenu = () => {
  document.body.classList.remove("menu-open");
  btn?.setAttribute("aria-expanded", "false");
};

btn?.addEventListener("click", () => {
  const open = document.body.classList.toggle("menu-open");
  btn?.setAttribute("aria-expanded", String(open));
});

document.querySelectorAll(".nav__items a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeMenu();
});
