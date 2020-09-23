import {
  hideLoading,
  showLoading
} from '../loader';
import Pet from '../Pet';
import loadRandomImages from './getCatData';

class Cat extends Pet {
  constructor(petContainer, quantityOfImages) {
    super(petContainer, quantityOfImages);
    this.url = 'https://api.thecatapi.com/v1';
    this.apiKey = '12cb4a70-1e20-4fb6-b39f-4aa91e55716b';
    this.loader = document.querySelector('.loader--cat')
    this.imagesURLs = [];
  }

  async addCell() {
    showLoading(this.loader);
    for (let i = 0; i < this.quantityOfImages; i++) {
      const imageArray = await loadRandomImages(`${this.url}/images/search`, this.apiKey);
      this.imagesURLs[i] = await imageArray[0].url;
    }
    this.carouselCells.forEach((element, index) => {
      this.addBackground(element, this.imagesURLs[index]);
      this.addImage(element, this.imagesURLs[index]);
    })
    hideLoading(this.loader)
  }
}



export default Cat