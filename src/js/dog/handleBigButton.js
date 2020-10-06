import {
  breeds,
  addBreed
} from './dogsBreeds';
import {
  searchBreed
} from '../searchBar';
import {
  breeds as breedsCats,
  ArrayOfRestBreeds,
  createBreedButtons,
} from '../cat/catsBreeds';
let restBreeds = 0;
let firstClick = true;
let firstClickCat = true;

function showDogBreeds(dogBreeds) {
  dogBreeds.innerHTML = '';
  for (const breed in breeds) {
    if (breeds[breed].length === 0) {
      addBreed(breed);
    } else {
      for (const subBreed of breeds[breed]) {
        addBreed(breed, subBreed);
      }
    }
  }
}

function showCatBreeds(catBreeds) {
  catBreeds.innerHTML = '';
  breedsCats.forEach((breed) => {
    createBreedButtons(breed.name, breed.id);
  });
}

function handleBigButton() {
  const dogButton = document.querySelector('.dog-container .pet-button');
  const catButton = document.querySelector('.cat-container .pet-button');
  const catContainer = document.querySelector('.cat-container');
  const dogContainer = document.querySelector('.dog-container');
  const catBreeds = document.querySelector('.breeds--cat');
  const dogBreeds = document.querySelector('.breeds');

  dogButton.addEventListener('click', (e) => {
    e.preventDefault();
    dogButton.setAttribute('disabled', false);

    catContainer.style.display = 'none';
    catBreeds.style.display = 'none';
    dogBreeds.classList.add('breeds--without-cat');
    dogContainer.classList.add('dog-container--without-cat');
    dogBreeds.style.height = 'fit-content';

    const arrowButton = document.createElement('button');
    const arrow = document.createElement('i');
    arrow.classList.add('fas');
    arrow.classList.add('fa-arrow-left');
    arrowButton.classList.add('pet-button--arrow');
    arrowButton.appendChild(arrow);
    dogContainer.appendChild(arrowButton);

    if (firstClick) {
      document.querySelector('.breeds__name--more').style.display = 'none';
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
      firstClick = false;
    }

    searchBreed('dog');

    arrowButton.addEventListener('click', (e) => {
      e.preventDefault();
      catContainer.style.display = 'block';
      catBreeds.style.display = 'flex';
      dogBreeds.classList.remove('breeds--without-cat');
      dogContainer.classList.remove('dog-container--without-cat');
      document.getElementById('search-wrapper').style.display = 'none';
      document.getElementById('search-bar').value = '';
      showDogBreeds(dogBreeds);
      dogButton.removeAttribute('disabled');
      dogBreeds.style.height = '';
      document.querySelector('.pet-button--arrow').remove();
    });
  });

  catButton.addEventListener('click', (e) => {
    e.preventDefault();
    catButton.setAttribute('disabled', false);
    dogContainer.style.display = 'none';
    dogBreeds.style.display = 'none';
    catBreeds.classList.add('breeds--without-dog');
    catContainer.classList.add('dog-container--without-dog');
    catBreeds.style.height = 'fit-content';

    const arrowButton = document.createElement('button');
    const arrow = document.createElement('i');
    arrow.classList.add('fas');
    arrow.classList.add('fa-arrow-left');
    arrowButton.classList.add('pet-button--arrow-cat');
    arrowButton.appendChild(arrow);
    catContainer.insertBefore(arrowButton, catButton);

    if (firstClickCat) {
      document.querySelector('.breeds__name--more-cat').style.display = 'none';
      ArrayOfRestBreeds.forEach((breed) =>
        createBreedButtons(breed.name, breed.id),
      );
      firstClickCat = false;
    }

    searchBreed('cat');

    arrowButton.addEventListener('click', (e) => {
      e.preventDefault();
      dogContainer.style.display = 'block';
      dogBreeds.style.display = 'block';
      catBreeds.classList.remove('breeds--without-dog');
      catContainer.classList.remove('dog-container--without-dog');
      document.getElementById('search-wrapper').style.display = 'none';
      document.getElementById('search-bar').value = '';
      catBreeds.style.height = '';
      showCatBreeds(catBreeds);
      catButton.removeAttribute('disabled');
      document.querySelector('.pet-button--arrow-cat').remove();
    });
  });
}

export {
  handleBigButton,
  showDogBreeds
};