import Pet from '../Pet';
import getCatData from '../cat/getCatData';

class Cat extends Pet {
  constructor(petContainer, quantityOfImages) {
    super(petContainer, quantityOfImages);
    this.url = 'https://api.thecatapi.com/v1';
    this.apiKey = '12cb4a70-1e20-4fb6-b39f-4aa91e55716b';
  }

  getAllBreeds() {
    getCatData(this.url, this.apiKey)
  }
}



export default Cat