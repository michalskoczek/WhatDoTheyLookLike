import './sass/main.scss';
import Flickity from './js/Flickity.js';
import getRandomImages from './js/getDogImg';

Flickity();
getRandomImages('https://dog.ceo/api/breeds/image/random/4');
