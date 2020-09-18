import './sass/main.scss';
import Flickity from './js/Flickity.js';
import Dog from './js/dog/Dog';
import {
  showAllBreeds
} from './js/dog/dogsBreeds';
import Cat from './js/cat/Cat';

const dog = new Dog('.main-carousel--dog', 4);
dog.makeCarouselCell();
dog.addCell();
const cat = new Cat('.main-carousel--cat', 4);
cat.makeCarouselCell();
cat.getAllBreeds();
Flickity();
showAllBreeds();