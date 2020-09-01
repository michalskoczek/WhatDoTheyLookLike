import loadAllBreedsNames from './getDogData';
const number = 19;

function createBreedElement() {
  const breedsContainer = document.querySelector('.breeds');

  const breedElement = document.createElement('div');
  breedElement.className = 'breeds__name';
  breedElement.innerText = name;
  breedsContainer.appendChild(breedElement);

}

function addBreed(breed, subBreed) {
  let name;
  let type;

  if (typeof subBreed === 'undefined') {
    name = breed;
    type = breed;
  } else {
    name = `${breed} ${subBreed}`;
    type = `${breed}/${subBreed}`;
  }

  createBreedElement();
}

function getBreedName(url) {
  // funkcja, która pobiera nazwy ras psów
}

export default createBreedElement;