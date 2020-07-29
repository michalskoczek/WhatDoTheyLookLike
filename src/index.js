import './sass/main.scss';
import Flickity from './js/Flickity.js';
import Dog from './js/dog/Dog';

const img = new Dog();
img.makeCarouselCell(4, 'dog');
img.putImgToCell();
Flickity();