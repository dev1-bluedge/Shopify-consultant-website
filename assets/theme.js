document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.querySelector(".mobile-menu-toggle");
  const menu = document.querySelector(".mobile-menu");
  const navbar = document.querySelector(".navbar");
  const closeBtn = document.querySelector(".cross-icon");
  toggle.addEventListener("click", function () {
    menu.classList.toggle("open");
    navbar.classList.toggle("open");
  });

  closeBtn.addEventListener("click", function () {
    menu.classList.remove("open");
    navbar.classList.remove("open");
  });
});
