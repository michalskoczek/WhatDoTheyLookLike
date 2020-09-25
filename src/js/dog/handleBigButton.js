function handleBigButton() {
  const dogButton = document.querySelector('.dog-container .pet-button');
  const catContainer = document.querySelector('.cat-container');
  const catBreeds = document.querySelector('.breeds--cat');

  dogButton.addEventListener('click', e => {
    e.preventDefault();
    catContainer.style.display = 'none';
    catBreeds.style.display = 'none';
    document.querySelector('.breeds').classList.add('breeds--without-cat');
    document.querySelector('.dog-container').classList.add('dog-container--without-cat');

    const arrowButton = document.createElement('button');
    const arrow = document.createElement('i');
    arrow.classList.add('fas');
    arrow.classList.add('fa-arrow-left');
    arrowButton.classList.add('pet-button--arrow');
    arrowButton.appendChild(arrow);
    document.querySelector('.dog-container').appendChild(arrowButton);

    arrowButton.addEventListener('click', e => {
      e.preventDefault();
      catContainer.style.display = 'block';
      catBreeds.style.display = 'flex';
      document.querySelector('.breeds').classList.remove('breeds--without-cat');
      document.querySelector('.dog-container').classList.remove('dog-container--without-cat');
    })
  })



}






export {
  handleBigButton
}