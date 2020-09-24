import getCatData from '../cat/getCatData';
import {
  showLoading,
  hideLoading
} from '../loader';

const breedsContainer = document.querySelector('.breeds--cat');
const loader = document.querySelector('.loader--cat');
const ArrayOfBreeds = [];
const ArrayOfRestBreeds = [];
const imageURLs = [];
const apiKey = '12cb4a70-1e20-4fb6-b39f-4aa91e55716b';

async function getRandomImagesByBreed(nameId, apiKey) {
  for (let i = 0; i < 4; i++) {
    const image = await getCatData(`https://api.thecatapi.com/v1/images/search?breed_ids=${nameId}`, apiKey);
    imageURLs[i] = await image[0].url;
  }
  return imageURLs;
}


function showImageByBreed(urls) {
  const carouselImgs = [...document.querySelectorAll('.cat-container .carousel-cell__img')];
  const carouselBackgroundImgs = [...document.querySelectorAll('.cat-container .carousel-cell__background')];

  carouselImgs.forEach((img, index) => {
    img.src = `${urls[index]}`;
  });
  carouselBackgroundImgs.forEach((bgcImg, index) => {
    bgcImg.style.backgroundImage = `url(${urls[index]})`
  });
  hideLoading(loader)
}

function createBreedButtons(name, id) {
  const breed = {
    name: name,
    id: id,
  };
  ArrayOfBreeds.push(breed);

  const breedButton = document.createElement('button');
  breedButton.className = 'breeds__name';
  breedButton.innerText = name;

  breedButton.addEventListener('click', async (e) => {
    e.preventDefault();
    showLoading(loader);
    for (let i = 0; i < ArrayOfBreeds.length; i++) {
      if (ArrayOfBreeds[i].name === breedButton.innerText) {
        const nameId = ArrayOfBreeds[i].id;
        const urls = await getRandomImagesByBreed(nameId, apiKey);
        showImageByBreed(urls);
      }
    }

  })
  breedsContainer.appendChild(breedButton);
}


function createMoreButton() {
  const moreButton = document.createElement('button');
  moreButton.className = 'breeds__name--more';
  moreButton.innerText = 'more breeds';
  breedsContainer.appendChild(moreButton);

  moreButton.addEventListener('click', () => {
    moreButton.style.display = 'none';
    ArrayOfRestBreeds.forEach(breed => createBreedButtons(breed.name, breed.id))
  })
}


async function showAllBreeds(url, apiKey) {
  const breeds = await getCatData(`${url}/breeds`, apiKey);

  breeds.forEach((breed, index) => {
    if (index < 18) {
      createBreedButtons(breed.name, breed.id);
    } else if (index === 18) {
      createBreedButtons(breed.name, breed.id);
      createMoreButton();
    } else {
      ArrayOfRestBreeds.push({
        name: breed.name,
        id: breed.id
      })
    }
  })
}

export {
  showAllBreeds
}