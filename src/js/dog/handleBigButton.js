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

    arrowButton.addEventListener('click', (e) => {
      e.preventDefault();
      catContainer.style.display = 'block';
      catBreeds.style.display = 'flex';
      dogBreeds.classList.remove('breeds--without-cat');
      dogContainer.classList.remove('dog-container--without-cat');
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

    arrowButton.addEventListener('click', (e) => {
      e.preventDefault();
      dogContainer.style.display = 'block';
      dogBreeds.style.display = 'flex';
      catBreeds.classList.remove('breeds--without-dog');
      catContainer.classList.remove('dog-container--without-dog');
    });
  });
}

export { handleBigButton };
