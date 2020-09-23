import getCatData from '../cat/getCatData';
import {
  showLoading,
  hideLoading
} from '../loader';

const breedsContainer = document.querySelector('.breeds--cat');
const loader = document.querySelector('.loader--cat');
const ArrayOfBreedNames = [];
const ArrayOfBreedIds = [];
let breeds = [];
const imageURLs = [];
let nameId = '';

function createBreedButtons(name) {
  const breedButton = document.createElement('button');
  breedButton.className = 'breeds__name';
  breedButton.innerText = name;
  breedsContainer.appendChild(breedButton);

  breedButton.addEventListener('click', async (e, apiKey) => {
    //showLoading(loader);
    const breedName = e.target.innerText;
    console.log(breedName);
    console.log(ArrayOfBreedIds);

    for (const breed of breeds) {
      if (breed.name === breedName) {
        nameId = breed.id;
        return nameId
      }
    }


    for (let i = 0; i < 4; i++) {
      const image = await getCatData(`https://api.thecatapi.com/v1/images/search?breed_ids=${nameId}`, apiKey);
      imageURLs[i] = await image[0].url;
    }

    const carouselImgs = [...document.querySelectorAll('.cat-container .carousel-cell__img')];
    const carouselBackgroundImgs = [...document.querySelectorAll('.cat-container .carousel-cell__background')];

    carouselImgs.forEach((img, index) => {
      img.src = `${imageURLs[index]}`;
    });
    carouselBackgroundImgs.forEach((bgcImg, index) => {
      bgcImg.style.backgroundImage = `url(${imageURLs[index]})`
    });
    // hideLoading(loader);
  })
}

function createMoreButton() {
  const moreButton = document.createElement('button');
  moreButton.className = 'breeds__name--more';
  moreButton.innerText = 'more breeds';
  breedsContainer.appendChild(moreButton);

  moreButton.addEventListener('click', () => {
    moreButton.style.display = 'none';
    ArrayOfBreedNames.forEach(breed => createBreedButtons(breed))
  })
}

async function showAllBreeds(url, apiKey) {
  breeds = await getCatData(`${url}/breeds`, apiKey);
  console.log(breeds);

  breeds.forEach((breed, index) => {
    ArrayOfBreedIds.push(breed.id);
    if (index < 19) {
      createBreedButtons(breed.name);
    } else if (index === 19) {
      createMoreButton();
    } else if (index > 19) {
      ArrayOfBreedNames.push(breed.name);
    }
  })
}

export {
  showAllBreeds
}