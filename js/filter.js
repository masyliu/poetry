// =================================
// news-sort > filter
// =================================


const filterBtns = document.getElementsByClassName("filterBtn");
const sort = document.querySelectorAll(".sort");
let selector = "sort";

filter(selector);
function filter(n) {
  for (let j = 0; j < sort.length; j++) {
    sort[j].classList.remove("show");
    if ([...sort[j].classList].indexOf(n) > -1) {
      sort[j].classList.add("show");
    }
  }
}

for (let i = 0; i < filterBtns.length; i++) {
  filterBtns[i].addEventListener("click", function(e) {
    e.preventDefault();
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
    selector = this.dataset.type;
    if (selector == "all") selector = "sort";
    filter(selector);
  })
}
