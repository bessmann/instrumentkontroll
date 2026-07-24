// Mobile menu toggle (replaces the former client-side JS framework binding).
// Toggles a `menu-open` class on <body>; all show/hide is handled in main.css.
const btn = document.querySelector(".header__mobile-toggle");
btn?.addEventListener("click", () => {
  const open = document.body.classList.toggle("menu-open");
  btn.setAttribute("aria-expanded", String(open));
});
