import loadAllBreedsNames from './getDogData';
import {
  showLoading,
  hideLoading
} from '../loader';

const breedsContainer = document.querySelector('.breeds');
const urlAPI = 'https://dog.ceo/api/breeds/list/all';
const loader = document.querySelector('.loader');
let breeds = [];
let numberOfBreedButtons = 0;
let quantityOfButtons = 19;
let restBreeds = 0;

function createBreedButton(name, type) {
  const breedElement = document.createElement('button');
  breedElement.className = 'breeds__name';
  breedElement.innerText = name;
  breedsContainer.appendChild(breedElement);

  breedElement.addEventListener('click', async () => {
    showLoading(loader);
    const urlImg = await loadAllBreedsNames(
      `https://dog.ceo/api/breed/${type}/images/random/4`,
    );

    const carouselImgs = [
      ...document.querySelectorAll('.dog-container .carousel-cell__img'),
    ];
    const carouselBackgroundImgs = [
      ...document.querySelectorAll('.dog-container .carousel-cell__background'),
    ];

    carouselImgs.forEach((img, index) => {
      img.src = `${urlImg[index]}`;
    });
    carouselBackgroundImgs.forEach((bgcImg, index) => {
      bgcImg.style.backgroundImage = `url(${urlImg[index]})`;
    });
    hideLoading(loader);
  });
}

function createMoreButton() {
  const moreButton = document.createElement('button');
  moreButton.className = 'breeds__name--more';
  moreButton.innerText = 'more breeds';
  breedsContainer.appendChild(moreButton);

  moreButton.addEventListener('click', () => {
    moreButton.style.display = 'none';

    for (const breed in breeds) {
      restBreeds++;
      if (restBreeds >= 19) {
        if (breeds[breed].length === 0) {
          addBreed(breed);
        } else {
          for (const subBreed of breeds[breed]) {
            addBreed(breed, subBreed);
          }
        }
      }
    }
  });
}

function addBreed(breed, subBreed) {
  let name;
  let type;

  if (typeof subBreed === 'undefined') {
    name = breed;
    type = breed;
  } else {
    name = `${breed} ${subBreed}`;
    type = `${breed}/${subBreed}`;
  }

  createBreedButton(name, type);
}

async function showAllBreeds() {
  breeds = await loadAllBreedsNames(urlAPI);
  console.log(breeds);

  for (const breed in breeds) {
    if (numberOfBreedButtons < quantityOfButtons) {
      if (breeds[breed].length === 0) {
        addBreed(breed);
      } else {
        for (const subBreed of breeds[breed]) {
          addBreed(breed, subBreed);
        }
      }
    } else if (numberOfBreedButtons === quantityOfButtons) {
      createMoreButton();
    }
    numberOfBreedButtons++;
  }
}

export {
  showAllBreeds,
  breeds,
  createBreedButton,
  addBreed
};