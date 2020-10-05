import './sass/main.scss';
import Flickity from './js/Flickity.js';
import Dog from './js/dog/Dog';
import {
  showAllBreeds
} from './js/dog/dogsBreeds';
import Cat from './js/cat/Cat';
import {
  showAllBreeds as showAllCatsBreeds
} from './js/cat/catsBreeds'
import {
  handleBigButton
} from './js/dog/handleBigButton';
import {
  dogBtnMobile
} from './js/dog/dogsButtonMobile';

const screenWidth = document.body.offsetWidth;


const dog = new Dog('.main-carousel--dog', 4);
dog.makeCarouselCell();
dog.addCell();
const cat = new Cat('.main-carousel--cat', 4);
cat.makeCarouselCell();
showAllCatsBreeds(cat.url, cat.apiKey);
cat.addCell()
Flickity();
showAllBreeds();

if (screenWidth > 1200) {
  handleBigButton();
} else if (screenWidth <= 1200) {
  dogBtnMobile();
}