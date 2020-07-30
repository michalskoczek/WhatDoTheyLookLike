import './sass/main.scss';
import Flickity from './js/Flickity.js';
import Dog from './js/dog/Dog';

const dog = new Dog();
dog.makeCarouselCell();
dog.addCell();
Flickity();