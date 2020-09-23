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