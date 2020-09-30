import {
  breeds,
  addBreed
} from './dogsBreeds';
import {
  searchBreed
} from '../searchBar';
let restBreeds = 0;

function handleBigButton() {
  const dogButton = document.querySelector('.dog-container .pet-button');
  const catButton = document.querySelector('.cat-container .pet-button');
  const catContainer = document.querySelector('.cat-container');
  const dogContainer = document.querySelector('.dog-container');
  const catBreeds = document.querySelector('.breeds--cat');
  const dogBreeds = document.querySelector('.breeds');

  dogButton.addEventListener('click', (e) => {
    e.preventDefault();
    catContainer.style.display = 'none';
    catBreeds.style.display = 'none';
    dogBreeds.classList.add('breeds--without-cat');
    dogContainer.classList.add('dog-container--without-cat');

    const arrowButton = document.createElement('button');
    const arrow = document.createElement('i');
    arrow.classList.add('fas');
    arrow.classList.add('fa-arrow-left');
    arrowButton.classList.add('pet-button--arrow');
    arrowButton.appendChild(arrow);
    dogContainer.appendChild(arrowButton);

    const moreButton = document.querySelector('.breeds__name--more');
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

    searchBreed('dog');

    arrowButton.addEventListener('click', (e) => {
      e.preventDefault();
      catContainer.style.display = 'block';
      catBreeds.style.display = 'flex';
      dogBreeds.classList.remove('breeds--without-cat');
      dogContainer.classList.remove('dog-container--without-cat');
      document.getElementById('search-bar').style.visibility = 'hidden';
    });
  });

  catButton.addEventListener('click', (e) => {
    e.preventDefault();
    dogContainer.style.display = 'none';
    dogBreeds.style.display = 'none';
    catBreeds.classList.add('breeds--without-dog');
    catContainer.classList.add('dog-container--without-dog');

    const arrowButton = document.createElement('button');
    const arrow = document.createElement('i');
    arrow.classList.add('fas');
    arrow.classList.add('fa-arrow-left');
    arrowButton.classList.add('pet-button--arrow-cat');
    arrowButton.appendChild(arrow);
    catContainer.insertBefore(arrowButton, catButton);

    searchBreed('cat');

    arrowButton.addEventListener('click', (e) => {
      e.preventDefault();
      dogContainer.style.display = 'block';
      dogBreeds.style.display = 'flex';
      catBreeds.classList.remove('breeds--without-dog');
      catContainer.classList.remove('dog-container--without-dog');
    });
  });
}

export {
  handleBigButton
};