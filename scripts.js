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
  console.log(this);
  navCollapse.classList.add("open");
}

function closeNav() {
  console.log(this);
  navCollapse.classList.remove("open");
}

function resizeHandler() {
  if (window.visualViewport.width > 600)
  navCollapse.classList.remove("open");
}

menuBtn.addEventListener("click", openNav);
menuCloseBtn.addEventListener("click", closeNav);
window.visualViewport.addEventListener('resize', resizeHandler);

// =================================
// index-slider > slider
// =================================

const slides = document.getElementsByClassName("slide");
const dots = document.getElementsByClassName("dot");
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  if (n > slides.length) {slideIndex = 1};
  if (n < 1) {slideIndex = slides.length};
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < slides.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

carousel();

function carousel() {
  let i;
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < slides.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1};
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  setTimeout(carousel, 5000);
}



