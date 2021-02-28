// =================================
// Gallery
// =================================


const galleryImages = document.querySelectorAll('.gallery-image');
const galleryOverlay = document.querySelector('.gallery-overlay');
const overlayImage = galleryOverlay.querySelector('img');
const overlayClose = galleryOverlay.querySelector('.galleryCloseBtn');
let imageIndex;

function openImage(e) {
  imageIndex = this.dataset.no-1;
  console.log(imageIndex);
  const src = e.currentTarget.querySelector('img').src;
  overlayImage.src = src;
  galleryOverlay.classList.add("open");
}

function handleClose() {
  galleryOverlay.classList.remove('open');
}

function handleClose2(e) {
  if (!e.target.matches('.gallery-overlayInner') && !e.target.matches('img') && !e.target.matches('a') && !e.target.matches('span')) {
    galleryOverlay.classList.remove('open');
  }
}

function plusImages(n) {
  imageIndex += n;
  console.log(imageIndex);
  if (imageIndex > galleryImages.length) imageIndex = 0;
  if (imageIndex < 0) imageIndex = galleryImages.length;
  try {
    overlayImage.style.opacity = "1"
    overlayImage.src = galleryImages[imageIndex].querySelector('img').src
} catch {
  overlayImage.style.opacity = "0.5";
};
}

galleryImages.forEach(image => image.addEventListener('click', openImage));
overlayClose.addEventListener('click', handleClose);
galleryOverlay.addEventListener('click', handleClose2);

