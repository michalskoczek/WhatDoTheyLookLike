import loadAllBreedsNames from './getDogData';
const breedsContainer = document.querySelector('.breeds');
let numberOfBreedButtons = 0;
let quantityOfButtons = 19;
let restBreeds;

function createBreedElement(name) {
  const breedElement = document.createElement('button');
  breedElement.className = 'breeds__name';
  breedElement.innerText = name;
  breedsContainer.appendChild(breedElement);
}

function createMoreButton() {
  const moreButton = document.createElement('button');
  moreButton.className = 'breeds__name--more';
  moreButton.innerText = 'more breeds';
  breedsContainer.appendChild(moreButton);

  moreButton.addEventListener('click', () => {
    moreButton.style.display = 'none';

    for (const breed in restBreeds) {
      if (restBreeds[breed].length === 0) {
        addBreed(breed);
      } else {
        for (const subBreed of restBreeds[breed]) {
          addBreed(breed, subBreed);
        }
      }
    }
  })
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

  createBreedElement(name);
}

async function showAllBreeds() {
  const breeds = await loadAllBreedsNames(
    'https://dog.ceo/api/breeds/list/all',
  );

  console.log(breeds)
  for (const breed in breeds) {
    if (numberOfBreedButtons < quantityOfButtons) {
      if (breeds[breed].length === 0) {
        addBreed(breed);
        delete breeds[breed];
      } else {
        for (const subBreed of breeds[breed]) {
          addBreed(breed, subBreed);
          delete breeds[breed];
        }
      }
    } else if (numberOfBreedButtons === quantityOfButtons) {
      createMoreButton();
      restBreeds = breeds;
      return restBreeds;
    }
    numberOfBreedButtons++;
  }
}

export {
  showAllBreeds
};