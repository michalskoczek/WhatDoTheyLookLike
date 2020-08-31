import './sass/main.scss';
import Flickity from './js/Flickity.js';
import Dog from './js/dog/Dog';
import createBreedElement from './js/dog/dogsBreeds';

const dog = new Dog();
dog.makeCarouselCell();
dog.addCell();
Flickity();
createBreedElement(20);