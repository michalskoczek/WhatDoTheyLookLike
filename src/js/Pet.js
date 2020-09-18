class Pet {
  constructor(petContainer, quantityOfImages) {
    this.containerCarousel = document.querySelector(petContainer);
    this.carouselCells = [];
    this.quantityOfImages = quantityOfImages;
  }

  makeCarouselCell() {
    for (let i = 0; i < this.quantityOfImages; i++) {
      let carouselCell = document.createElement('div');
      carouselCell.classList.add('carousel-cell');
      this.carouselCells.push(carouselCell)
    }
    this.carouselCells.forEach(cell =>
      this.containerCarousel.appendChild(cell)
    )
  }
}

export default Pet;