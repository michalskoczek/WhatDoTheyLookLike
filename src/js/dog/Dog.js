import loadRandomImages from './getDogImgs';

class Dog {
  constructor() {
    this.containerCarousel = document.querySelector('.main-carousel');
    this.carouselCells = [];
    this.quantityOfImages = 8;
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

  async putImgToCell() {
    const images = await loadRandomImages(`https://dog.ceo/api/breeds/image/random/${this.quantityOfImages}`);
    this.carouselCells.forEach((element, index) => {
      const img = document.createElement('img');
      img.src = images[index];
      element.appendChild(img);
    })
  }
}

export default Dog;