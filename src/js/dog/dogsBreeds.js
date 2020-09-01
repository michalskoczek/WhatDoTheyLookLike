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

async function showAllBreeds() {
  const breeds = await loadAllBreedsNames('https://dog.ceo/api/breeds/list/all');

  for (const breed in breeds) {
    if (breeds[breed].length === 0) {
      addBreed(breed)
    } else {
      for (const subBreed of breeds[breed]) {
        addBreed(breed, subBreed)
      }
    }
  }
}

export default createBreedElement;
export {
  showAllBreeds
};