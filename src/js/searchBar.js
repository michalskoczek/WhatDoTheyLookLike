import {
  breedsNames
} from './dog/dogsBreeds';
import {
  showLoading,
  hideLoading
} from './loader';
import loadAllBreedsNames from './dog/getDogData';
import {
  breedsCatNames as catsBreeds,
  breedsCatId as catsIds,
  getRandomImagesByBreed,
  showImageByBreed,
} from './cat/catsBreeds';

const dogBreedsContainer = document.querySelector('.breeds');
const catBreedsContainer = document.querySelector('.breeds--cat');
const loader = document.querySelector('.loader');
const loaderCat = document.querySelector('.loader--cat');
const apiKey = '12cb4a70-1e20-4fb6-b39f-4aa91e55716b';

const searchBreed = (pet) => {
  const searchBar = document.getElementById('search-wrapper');
  searchBar.style.opacity = 1;

  searchBar.addEventListener('keyup', (e) => {
    const searchBreed = e.target.value.toLowerCase();

    if (pet === 'dog') {
      const filteredBreed = breedsNames.filter((breed) => {
        return breed.toLowerCase().includes(searchBreed);
      });
      displayBreeds(filteredBreed, dogBreedsContainer);
      getImageByDogBreed();
    } else if (pet === 'cat') {
      const filteredBreed = catsBreeds.filter((breed) => {
        return breed.toLowerCase().includes(searchBreed);
      });
      displayBreeds(filteredBreed, catBreedsContainer);
      getImageByCatBreed();
    }
  });
};

const displayBreeds = (breeds, breedsContainer) => {
  const htmlString = breeds
    .map((breed) => {
      return `<button class="breeds__name">${breed}</button>`;
    })
    .join('');
  breedsContainer.innerHTML = htmlString;
};

const getImageByDogBreed = () => {
  const breeds = document.querySelectorAll(
    '.breeds--without-cat .breeds__name',
  );

  breeds.forEach((breed) => {
    breed.addEventListener('click', async () => {
      showLoading(loader);

      const breedString = breed.textContent;
      let subbreedString = '';

      if (breedString.includes(' ')) {
        const stringBreed = breedString.split('');
        const index = breedString.indexOf(' ');
        stringBreed[index] = '/';
        subbreedString = stringBreed.join('');
      }

      const urlImg = await loadAllBreedsNames(
        `https://dog.ceo/api/breed/${
          breedString.includes(' ') ? subbreedString : breedString
        }/images/random/4`,
      );

      const carouselImgs = [
        ...document.querySelectorAll('.dog-container .carousel-cell__img'),
      ];
      const carouselBackgroundImgs = [
        ...document.querySelectorAll(
          '.dog-container .carousel-cell__background',
        ),
      ];

      carouselImgs.forEach((img, index) => {
        img.src = `${urlImg[index]}`;
      });
      carouselBackgroundImgs.forEach((bgcImg, index) => {
        bgcImg.style.backgroundImage = `url(${urlImg[index]})`;
      });
      hideLoading(loader);
    });
  });
};

const getImageByCatBreed = () => {
  const breedsCat = document.querySelectorAll(
    '.breeds--without-dog .breeds__name',
  );

  breedsCat.forEach((breed) => {
    breed.addEventListener('click', async () => {
      showLoading(loaderCat);
      const nameBreed = breed.textContent;
      const index = catsBreeds.indexOf(nameBreed);
      const nameId = catsIds[index];
      const urls = await getRandomImagesByBreed(nameId, apiKey);
      showImageByBreed(urls);
    });
  });
};
export {
  searchBreed
};