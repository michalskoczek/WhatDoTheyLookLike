import loadRandomImages from './getDogData';

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

  addBackground(element, url) {
    const background = document.createElement('div');
    background.classList.add('carousel-cell__background');
    background.style.backgroundImage = `url(${url})`;
    element.appendChild(background);
  }

  addImage(element, image) {
    const img = document.createElement('img');
    img.classList.add('carousel-cell__img');
    img.src = image;
    element.appendChild(img);
  }

  async addCell() {
    const images = await loadRandomImages(`https://dog.ceo/api/breeds/image/random/${this.quantityOfImages}`);
    this.carouselCells.forEach((element, index) => {
      this.addBackground(element, images[index]);
      this.addImage(element, images[index]);
    })
  }
}

export default Dog;