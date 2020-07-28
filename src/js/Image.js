class Image {
  constructor(count, pet) {
    count;
    pet;
    this.containerCarousel = [...document.querySelectorAll('.main-carousel')];
    this.carouselCells = [];
    // this.makeElements(this.count, this.pet);
  }

  makeCarouselCell(count, pet) {
    for (let i = 0; i < count; i++) {
      let carouselCell = document.createElement('div');
      carouselCell.classList.add('carousel-cell');
      this.carouselCells.push(carouselCell)
    }
    this.carouselCells.forEach(cell => {
      if (pet === 'dog') {
        this.containerCarousel[0].appendChild(cell)
      } else {
        this.containerCarousel[1].appendChild(cell)
      }
    })
  }

  putImgToCell() {

  }


}

export default Image;