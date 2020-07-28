import './sass/main.scss';
import Flickity from './js/Flickity.js';
import getRandomImages from './js/getDogImg';
import Image from './js/Image';

const img = new Image;
img.makeCarouselCell(4, 'dog')
Flickity();
getRandomImages('https://dog.ceo/api/breeds/image/random/4');