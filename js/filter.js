// =================================
// news-sort > filter
// =================================

const sort = document.getElementsByClassName("sort");
const filterBtns = document.getElementsByClassName("filterBtn");
const current = document.getElementsByClassName("active");

filter("all");

function filter(c) {
  let i;
  if (c == "all") c = "";
  for (i = 0; i < sort.length; i++) {
    sort[i].classList.remove("show");
    if (sort[i].className.indexOf(c) > -1) 
    sort[i].classList.add("show");
  }
}

for (let i = 0; i < filterBtns.length; i++) {
  filterBtns[i].addEventListener("click", function() {
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  })
}


