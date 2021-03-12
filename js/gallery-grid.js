// =================================
// gallery-grid
// =================================

const gallery = document.querySelector('.gallery-grid-container');
const galleryOverlay = document.querySelector('.gallery-overlay');
const overlayImage = galleryOverlay.querySelector('img');
const overlayClose = galleryOverlay.querySelector('.galleryCloseBtn');

function generateHTML([h, v]) {
  return `
  <div class="item h${h} v${v}">
  <img src="images/gallery${randomNumber(12)}.jpg">
  <div class="item__overlay">
    <button>View -></button>
  </div>
</div>
  `;
}

function randomNumber(limit) {
  return Math.floor(Math.random() * limit) + 1;
}

function handleSelect(e) {
  const src = e.currentTarget.querySelector('img').src;
  overlayImage.src = src;
  galleryOverlay.classList.add('open');
}

function handleClose() {
  galleryOverlay.classList.remove('open');
}

function handleClose2(e) {
  if (!e.target.matches('.gallery-overlayInner') && !e.target.matches('img') && !e.target.matches('a') && !e.target.matches('span')) {
    galleryOverlay.classList.remove('open');
  }
}

const digits = Array.from({length: 50}, () => [randomNumber(4), randomNumber(4)]).concat([[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1]])

gallery.innerHTML = digits.map(generateHTML).join('');

const items = document.querySelectorAll('.item');

items.forEach(item => item.addEventListener('click', handleSelect));

overlayClose.addEventListener('click', handleClose);
galleryOverlay.addEventListener('click', handleClose2);