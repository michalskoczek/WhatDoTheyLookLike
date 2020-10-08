import {
  searchBreed
} from '../searchBar';
import {
  showDogBreeds
} from './handleBigButton';

function dogBtnMobile() {
  const dogsButton = document.querySelector('.dog-container .pet-button');
  const catButton = document.querySelector('.cat-container .pet-button');
  const catContainer = document.querySelector('.cat-container');
  const dogContainer = document.querySelector('.dog-container');
  const dogsBreeds = document.querySelector('.breeds');
  const mainPetsContainer = document.querySelector('.main__pets-container');

  dogsButton.addEventListener('click', (e) => {
    e.preventDefault();

    catContainer.style.display = 'none';
    catButton.style.display = 'none';
    dogContainer.style.opacity = 0;

    dogsButton.remove();

    const newDogButton = document.createElement('button');
    newDogButton.classList.add('dog-container');
    newDogButton.classList.add('pet-button');
    newDogButton.classList.add('pet-button--mobile');
    newDogButton.textContent = 'dogs';
    mainPetsContainer.insertBefore(newDogButton, dogsBreeds);
    mainPetsContainer.style.height = '95%';

    setTimeout(() => {
      dogContainer.style.opacity = 1;
      dogsBreeds.style.display = 'flex';
      dogsBreeds.style.margin = '0 0 15px 0';
      dogsBreeds.classList.add('breeds--without-cat');
    }, 300);

    const arrowButton = document.createElement('button');
    const arrow = document.createElement('i');
    arrow.classList.add('fas');
    arrow.classList.add('fa-arrow-left');
    arrowButton.classList.add('pet-button--arrow');
    arrowButton.appendChild(arrow);
    newDogButton.appendChild(arrowButton);

    searchBreed('dog');

    arrowButton.addEventListener('click', (e) => {
      e.preventDefault();

      catContainer.style.display = 'block';
      catButton.style.display = 'block';
      dogsBreeds.style.display = 'none';
      arrowButton.style.display = 'none';
      dogContainer.style.opacity = 1;
      mainPetsContainer.style.height = '85%';
      newDogButton.remove();
      dogContainer.appendChild(dogsButton);

      document.getElementById('search-wrapper').style.display = 'none';
      document.getElementById('search-bar').value = '';

      showDogBreeds(dogsBreeds)
    });
  });
}

export {
  dogBtnMobile
};