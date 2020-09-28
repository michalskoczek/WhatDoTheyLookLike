import {
  addBreed,
  breeds
} from './dog/dogsBreeds';

const searchBreed = () => {
  const searchBar = document.getElementById('search-bar');
  searchBar.style.visibility = 'visible';
  const breedsContainer = document.querySelector('.breeds');
  console.log(breedsContainer);

  searchBar.addEventListener('input', (e) => {
    const searchBreed = e.target.value.toLowerCase();
    console.log(searchBreed)
    //breedsContainer.textContent = '';
    for (const breed in breeds) {
      console.log('wszedłem')
      if (breeds[breed].length === 0 && breed === searchBreed) {
        console.log('wszedłem2')
        addBreed(breed);
      } else if (breeds[breed].length != 0) {
        console.log('wszedłem3')
        for (const subBreed of breeds[breed]) {
          console.log('wszedłem4')
          if (subBreed === searchBreed) {
            addBreed(breed, subBreed);
          }
        }
      }
    }
  });
};

export {
  searchBreed
};