import {
  breedsNames
} from './dog/dogsBreeds';
import {
  showLoading,
  hideLoading
} from './loader';
import loadAllBreedsNames from './dog/getDogData';

const breedsContainer = document.querySelector('.breeds');
const loader = document.querySelector('.loader');

const searchBreed = () => {
  const searchBar = document.getElementById('search-bar');
  searchBar.style.visibility = 'visible';

  searchBar.addEventListener('keyup', (e) => {
    const searchBreed = e.target.value.toLowerCase();
    const filteredBreed = breedsNames.filter((breed) => {
      return breed.toLowerCase().includes(searchBreed)
    })
    displayBreeds(filteredBreed);
    getImageByBreed();
  })
};

const displayBreeds = (breeds) => {
  const htmlString = breeds
    .map((breed) => {
      return `<button class="breeds__name">${breed}</button>`;
    })
    .join('');
  breedsContainer.innerHTML = htmlString;
};


const getImageByBreed = () => {
  const breeds = document.querySelectorAll('.breeds--without-cat .breeds__name');

  breeds.forEach(breed => {

    breed.addEventListener('click', async () => {
      showLoading(loader);

      const breedString = breed.textContent;
      console.log(breedString);
      if (breedString.includes(' ')) {
        const index = breedString.indexOf(' ');
        console.log(index);
        console.log(breedString[index])

      }

      const urlImg = await loadAllBreedsNames(
        `https://dog.ceo/api/breed/${breed.textContent}/images/random/4`,
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
  })
}

export {
  searchBreed
};