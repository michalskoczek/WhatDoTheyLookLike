const carousels = document.querySelectorAll('.main-carousel')
export default function () {
  const flkty = new Flickity(carousels[0], {
    cellAlign: 'left',
    contain: true,
    freeScroll: false,
    wrapAround: true,
    contain: true,
    prevNextButtons: true,
    pageDots: false
  });
  const flktySec = new Flickity(carousels[1], {
    cellAlign: 'left',
    contain: true,
    freeScroll: false,
    wrapAround: true,
    contain: true,
    prevNextButtons: true,
    pageDots: false
  });
}