'use strict';

/* -----------------------
   Navbar Toggle
------------------------ */

const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const navElemArr = [navOpenBtn, navCloseBtn, overlay];

const navToggleEvent = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
};

navElemArr.forEach(elem => {
  elem.addEventListener("click", navToggleEvent);
});

/* Close navbar when clicking any nav link */
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navbar.classList.remove("active");
    overlay.classList.remove("active");
  });
});


/* -----------------------
   Header Scroll Behavior
------------------------ */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", () => {
  if (window.scrollY >= 200) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }
});

const cards = document.querySelectorAll(".popular-card");
const popups = document.querySelectorAll(".pop");
const closeBtns = document.querySelectorAll(".close");

cards.forEach((card, i) => {
  card.addEventListener("click", () => popups[i].style.display = "flex");
});

closeBtns.forEach((btn, i) => {
  btn.addEventListener("click", () => popups[i].style.display = "none");
});

// Close when clicking outside popup content
popups.forEach(popup => {
  popup.addEventListener("click", e => {
    if (e.target === popup) popup.style.display = "none";
  });
});
