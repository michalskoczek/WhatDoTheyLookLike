const carousels = document.querySelectorAll('.main-carousel')
export default function () {
  const flkty = new Flickity(carousels[0], {
    cellAlign: 'left',
    contain: true,
    freeScroll: true,
    contain: true,
    prevNextButtons: false,
    pageDots: false
  });
  const flktySec = new Flickity(carousels[1], {
    cellAlign: 'left',
    contain: true,
    freeScroll: true,
    contain: true,
    prevNextButtons: false,
    pageDots: false
  });
}