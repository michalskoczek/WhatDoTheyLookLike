function dogBtnMobile() {
  const dogsButton = document.querySelector('.dog-container .pet-button');
  const catButton = document.querySelector('.cat-container .pet-button');
  const catContainer = document.querySelector('.cat-container');
  const dogContainer = document.querySelector('.dog-container');
  const dogsBreeds = document.querySelector('.breeds');
  const mainPetsContainer = document.querySelector('.main__pets-container')


  dogsButton.addEventListener('click', e => {
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
    console.log(newDogButton);

    setTimeout(() => {
      dogContainer.style.opacity = 1;
      dogsBreeds.style.display = 'flex';
      dogsBreeds.style.margin = '0 0 15px 0';
    }, 500);




  })
}

export {
  dogBtnMobile
}