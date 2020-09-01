import loadAllBreedsNames from './getDogData';
const number = 19;

function createBreedElement() {
  const breedsContainer = document.querySelector('.breeds');
  for (let i = 0; i < number; i++) {
    const breedElement = document.createElement('div');
    breedElement.className = 'breeds__name';
    breedsContainer.appendChild(breedElement);
  }
}

function getBreedName(url) {
  // funkcja, która pobiera nazwy ras psów
}

export default createBreedElement;