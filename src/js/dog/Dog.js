import Pet from '../Pet';
import loadRandomImages from './getDogData';
import {
  showLoading,
  hideLoading
} from '../loader';

class Dog extends Pet {
  constructor(petContainer, quantityOfImages) {
    super(petContainer, quantityOfImages)
    this.loader = document.querySelector('.loader');
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
    showLoading(this.loader);
    const images = await loadRandomImages(`https://dog.ceo/api/breeds/image/random/${this.quantityOfImages}`);
    this.carouselCells.forEach((element, index) => {
      this.addBackground(element, images[index]);
      this.addImage(element, images[index]);
    })
    hideLoading(this.loader);
  }
}

export default Dog;