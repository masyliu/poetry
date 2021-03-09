// =================================
// fixed sidebar
// =================================

const sidebar = document.querySelector(".sidebar");

function fixedSidebar() {
  if (window.pageYOffset > 300) {
    sidebar.classList.add("fixed");
  } else {
    sidebar.classList.remove("fixed");
  }
}

window.addEventListener("scroll", fixedSidebar);

// =================================
// activate scrollspy menu
// =================================

// for clickable event

const menuSections = document.querySelectorAll('.sidebar li');

function clickSidebar() {
    menuSections.forEach(j => j.classList.remove('active'));
    this.classList.add('active')
}
menuSections.forEach(v => v.addEventListener('click', clickSidebar));

// function clickSidebar() {
//   setTimeout(() => {
//     menuSections.forEach(j => j.classList.remove('active'));
//     this.classList.add('active')
//   }, 100)
// }
// menuSections.forEach(v => v.addEventListener('click', clickSidebar));




function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

function checkSec() {
  var observer = new IntersectionObserver(function(entries){
    for(let i=0; i<entries.length; i++) {
      let secID = document.getElementsByClassName(entries[i].target.id)[0];
      if (entries[i]['isIntersecting'] === true) {
        secID.classList.add('active');
      } else {
        secID.classList.remove('active');
      }
    }
  }, {threshold: [0.1]});
  observer.observe(document.querySelector('#sec1'));
  observer.observe(document.querySelector('#sec2'));
  observer.observe(document.querySelector('#sec3'));
}

window.addEventListener('scroll', debounce(checkSec));