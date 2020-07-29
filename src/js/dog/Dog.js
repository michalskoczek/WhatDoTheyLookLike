import loadRandomImages from './getDogImgs';

class Dog {
  constructor(count, pet) {
    count;
    pet;
    this.containerCarousel = [...document.querySelectorAll('.main-carousel')];
    this.carouselCells = [];
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

  async putImgToCell() {
    const images = await loadRandomImages('https://dog.ceo/api/breeds/image/random/4');
    this.carouselCells.forEach((element, index) => {
      const img = document.createElement('img');
      img.src = images[index];
      element.appendChild(img);
    })
  }
}

export default Dog;