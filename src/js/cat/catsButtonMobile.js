import { searchBreed } from "../searchBar";
import { showCatBreeds } from '../dog/handleBigButton';

function catsBtnMobile() {
  const dogsButton = document.querySelector('.dog-container .pet-button');
  const catsButton = document.querySelector('.cat-container .pet-button');
  const catContainer = document.querySelector('.cat-container');
  const dogContainer = document.querySelector('.dog-container');
  const catsBreeds = document.querySelector('.breeds--cat');
  const mainPetsContainer = document.querySelector('.main__pets-container');

  catsButton.addEventListener('click', e => {
    e.preventDefault();

    dogsButton.style.display = 'none';
    dogContainer.style.display = 'none';
    catsBreeds.style.opacity = 0;

    catsButton.remove();

    const newCatButton = document.createElement('button');
    newCatButton.classList.add('cat-container');
    newCatButton.classList.add('pet-button');
    newCatButton.classList.add('pet-button--mobile');
    newCatButton.textContent = 'cats';
    mainPetsContainer.insertBefore(newCatButton, catContainer);
    mainPetsContainer.style.height = '95%';
    catsBreeds.classList.add('breeds--without-dog');

    setTimeout(() => {
      catsBreeds.style.opacity = 1;
      catsBreeds.style.display = 'flex';
    }, 300);

    const arrowButton = document.createElement('button');
    const arrow = document.createElement('i');
    arrow.classList.add('fas');
    arrow.classList.add('fa-arrow-left');
    arrowButton.classList.add('pet-button--arrow');
    arrowButton.appendChild(arrow);
    newCatButton.appendChild(arrowButton);

    searchBreed(newCatButton.textContent);

    arrowButton.addEventListener('click', e => {
      e.preventDefault();

      dogsButton.style.display = 'block';
      dogContainer.style.display = 'block';
      catsBreeds.style.display = 'none';
      arrowButton.style.display = 'none';
      mainPetsContainer.style.height = '85%';
      newCatButton.remove();
      catContainer.appendChild(catsButton);
      catsBreeds.classList.remove('breeds--without-dog');

      document.getElementById('search-wrapper').style.display = 'none';
      document.getElementById('search-bar').value = '';

      showCatBreeds(catsBreeds);
    })
  })
}

export {
  catsBtnMobile
}