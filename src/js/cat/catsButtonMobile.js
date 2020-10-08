function catsBtnMobile() {
  const dogsButton = document.querySelector('.dog-container .pet-button');
  const catsButton = document.querySelector('.cat-container .pet-button');
  const catContainer = document.querySelector('.cat-container');
  const dogContainer = document.querySelector('.dog-container');
  const dogsBreeds = document.querySelector('.breeds');
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
  })
}

export {
  catsBtnMobile
}