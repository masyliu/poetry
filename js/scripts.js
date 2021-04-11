// =================================
// Fixed-header
// =================================

const navbar = document.querySelector(".navbar-header");

function fixedHeader() {
  if (window.pageYOffset > 10) {
    navbar.classList.add("fixed");
  } else {
    navbar.classList.remove("fixed");
  }
}

window.addEventListener("scroll", fixedHeader);

// =================================
// Navbar
// =================================

const navCollapse = document.querySelector(".navbar-collapse");
const menuBtn = document.querySelector(".menuBtn");
const menuCloseBtn = document.querySelector(".menuCloseBtn");

function openNav() {
  navCollapse.classList.add("open");
}

function closeNav() {
  navCollapse.classList.remove("open");
}

function resizeHandler() {
  let viewWidth = window.innerWidth || window.visualViewport.width;
  if (viewWidth > 600) {
    navCollapse.classList.remove("open");
  }
}

menuBtn.addEventListener("click", openNav);
menuCloseBtn.addEventListener("click", closeNav);
window.addEventListener('resize', resizeHandler);
