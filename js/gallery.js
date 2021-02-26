// =================================
// Gallery
// =================================


const galleryImages = document.querySelectorAll('.gallery-image');
const galleryOverlay = document.querySelector('.gallery-overlay');
// const overlayInner = document.querySelector('.gallery-overlayInner');
const overlayImage = galleryOverlay.querySelector('img');
const overlayClose = galleryOverlay.querySelector('.galleryCloseBtn');

function openImage(e) {
  const src = e.currentTarget.querySelector('img').src;
  overlayImage.src = src;
  galleryOverlay.classList.add("open");
  console.log(galleryOverlay.style.display);
}

function handleClose() {
  galleryOverlay.classList.remove('open');
}

function handleClose2(e) {
  if (!e.target.matches('.gallery-overlayInner') && !e.target.matches('img')) {
    galleryOverlay.classList.remove('open');
  }
}

galleryImages.forEach(image => image.addEventListener('click', openImage));
overlayClose.addEventListener('click', handleClose);
galleryOverlay.addEventListener('click', handleClose2);