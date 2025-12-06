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

function openTrendingPopup(card) {
  const content = card.querySelector(".blog-post").innerHTML;
  document.getElementById("popupContent").innerHTML = content;
  document.getElementById("popupOverlay").style.display = "flex";
}

function closePopup() {
  document.getElementById("popupOverlay").style.display = "none";
}

/* Close when clicking outside popup box */
document.getElementById("popupOverlay").addEventListener("click", function (e) {
  if (e.target === this) closePopup();
});

