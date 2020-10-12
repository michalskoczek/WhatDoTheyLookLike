/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sass/main.scss */ \"./src/sass/main.scss\");\n/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sass_main_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _js_Flickity_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/Flickity.js */ \"./src/js/Flickity.js\");\n/* harmony import */ var _js_dog_Dog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/dog/Dog */ \"./src/js/dog/Dog.js\");\n/* harmony import */ var _js_dog_dogsBreeds__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/dog/dogsBreeds */ \"./src/js/dog/dogsBreeds.js\");\n/* harmony import */ var _js_cat_Cat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/cat/Cat */ \"./src/js/cat/Cat.js\");\n/* harmony import */ var _js_cat_catsBreeds__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/cat/catsBreeds */ \"./src/js/cat/catsBreeds.js\");\n/* harmony import */ var _js_dog_handleBigButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./js/dog/handleBigButton */ \"./src/js/dog/handleBigButton.js\");\n/* harmony import */ var _js_dog_dogsButtonMobile__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./js/dog/dogsButtonMobile */ \"./src/js/dog/dogsButtonMobile.js\");\n/* harmony import */ var _js_cat_catsButtonMobile__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./js/cat/catsButtonMobile */ \"./src/js/cat/catsButtonMobile.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst screenWidth = document.body.offsetWidth;\r\n\r\n\r\nconst dog = new _js_dog_Dog__WEBPACK_IMPORTED_MODULE_2__[\"default\"]('.main-carousel--dog', 4);\r\ndog.makeCarouselCell();\r\ndog.addCell();\r\nconst cat = new _js_cat_Cat__WEBPACK_IMPORTED_MODULE_4__[\"default\"]('.main-carousel--cat', 4);\r\ncat.makeCarouselCell();\r\nObject(_js_cat_catsBreeds__WEBPACK_IMPORTED_MODULE_5__[\"showAllBreeds\"])(cat.url, cat.apiKey);\r\ncat.addCell()\r\nObject(_js_Flickity_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\nObject(_js_dog_dogsBreeds__WEBPACK_IMPORTED_MODULE_3__[\"showAllBreeds\"])();\r\n\r\nif (screenWidth > 1200) {\r\n  Object(_js_dog_handleBigButton__WEBPACK_IMPORTED_MODULE_6__[\"handleBigButton\"])();\r\n} else if (screenWidth <= 1200) {\r\n  Object(_js_dog_dogsButtonMobile__WEBPACK_IMPORTED_MODULE_7__[\"dogBtnMobile\"])();\r\n  Object(_js_cat_catsButtonMobile__WEBPACK_IMPORTED_MODULE_8__[\"catsBtnMobile\"])();\r\n}\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/js/Flickity.js":
/*!****************************!*\
  !*** ./src/js/Flickity.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst carousels = document.querySelectorAll('.main-carousel');\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\r\n  const screenWidth = window.screen.width;\r\n  if (screenWidth < 1200) {\r\n    const flkty = new Flickity(carousels[0], {\r\n      cellAlign: 'left',\r\n      contain: true,\r\n      freeScroll: false,\r\n      wrapAround: true,\r\n      contain: true,\r\n      prevNextButtons: false,\r\n      pageDots: false\r\n    });\r\n    const flktySec = new Flickity(carousels[1], {\r\n      cellAlign: 'left',\r\n      contain: true,\r\n      freeScroll: false,\r\n      wrapAround: true,\r\n      contain: true,\r\n      prevNextButtons: false,\r\n      pageDots: false\r\n    });\r\n\r\n  } else if (screenWidth >= 1200) {\r\n    const flkty = new Flickity(carousels[0], {\r\n      cellAlign: 'left',\r\n      contain: true,\r\n      freeScroll: false,\r\n      wrapAround: true,\r\n      contain: true,\r\n      prevNextButtons: true,\r\n      pageDots: false\r\n    });\r\n    const flktySec = new Flickity(carousels[1], {\r\n      cellAlign: 'left',\r\n      contain: true,\r\n      freeScroll: false,\r\n      wrapAround: true,\r\n      contain: true,\r\n      prevNextButtons: true,\r\n      pageDots: false\r\n    });\r\n\r\n  }\r\n\r\n\r\n});\n\n//# sourceURL=webpack:///./src/js/Flickity.js?");

/***/ }),

/***/ "./src/js/Pet.js":
/*!***********************!*\
  !*** ./src/js/Pet.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Pet {\r\n  constructor(petContainer, quantityOfImages) {\r\n    this.containerCarousel = document.querySelector(petContainer);\r\n    this.carouselCells = [];\r\n    this.quantityOfImages = quantityOfImages;\r\n  }\r\n\r\n  makeCarouselCell() {\r\n    for (let i = 0; i < this.quantityOfImages; i++) {\r\n      let carouselCell = document.createElement('div');\r\n      carouselCell.classList.add('carousel-cell');\r\n      this.carouselCells.push(carouselCell)\r\n    }\r\n    this.carouselCells.forEach(cell =>\r\n      this.containerCarousel.appendChild(cell)\r\n    )\r\n  }\r\n\r\n  addBackground(element, url) {\r\n    const background = document.createElement('div');\r\n    background.classList.add('carousel-cell__background');\r\n    background.style.backgroundImage = `url(${url})`;\r\n    element.appendChild(background);\r\n  }\r\n\r\n  addImage(element, image) {\r\n    const img = document.createElement('img');\r\n    img.classList.add('carousel-cell__img');\r\n    img.src = image;\r\n    element.appendChild(img);\r\n  }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Pet);\n\n//# sourceURL=webpack:///./src/js/Pet.js?");

/***/ }),

/***/ "./src/js/cat/Cat.js":
/*!***************************!*\
  !*** ./src/js/cat/Cat.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../loader */ \"./src/js/loader.js\");\n/* harmony import */ var _Pet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Pet */ \"./src/js/Pet.js\");\n/* harmony import */ var _getCatData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getCatData */ \"./src/js/cat/getCatData.js\");\n\r\n\r\n\r\n\r\nclass Cat extends _Pet__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\r\n  constructor(petContainer, quantityOfImages) {\r\n    super(petContainer, quantityOfImages);\r\n    this.url = 'https://api.thecatapi.com/v1';\r\n    this.apiKey = '12cb4a70-1e20-4fb6-b39f-4aa91e55716b';\r\n    this.loader = document.querySelector('.loader--cat')\r\n    this.imagesURLs = [];\r\n  }\r\n\r\n  async addCell() {\r\n    Object(_loader__WEBPACK_IMPORTED_MODULE_0__[\"showLoading\"])(this.loader);\r\n    for (let i = 0; i < this.quantityOfImages; i++) {\r\n      const imageArray = await Object(_getCatData__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(`${this.url}/images/search`, this.apiKey);\r\n      this.imagesURLs[i] = await imageArray[0].url;\r\n    }\r\n    this.carouselCells.forEach((element, index) => {\r\n      this.addBackground(element, this.imagesURLs[index]);\r\n      this.addImage(element, this.imagesURLs[index]);\r\n    })\r\n    Object(_loader__WEBPACK_IMPORTED_MODULE_0__[\"hideLoading\"])(this.loader)\r\n  }\r\n}\r\n\r\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Cat);\n\n//# sourceURL=webpack:///./src/js/cat/Cat.js?");

/***/ }),

/***/ "./src/js/cat/catsBreeds.js":
/*!**********************************!*\
  !*** ./src/js/cat/catsBreeds.js ***!
  \**********************************/
/*! exports provided: breeds, breedsCatNames, breedsCatId, ArrayOfRestBreeds, createBreedButtons, showAllBreeds, getRandomImagesByBreed, showImageByBreed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"breeds\", function() { return breeds; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"breedsCatNames\", function() { return breedsCatNames; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"breedsCatId\", function() { return breedsCatId; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ArrayOfRestBreeds\", function() { return ArrayOfRestBreeds; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createBreedButtons\", function() { return createBreedButtons; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showAllBreeds\", function() { return showAllBreeds; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getRandomImagesByBreed\", function() { return getRandomImagesByBreed; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showImageByBreed\", function() { return showImageByBreed; });\n/* harmony import */ var _cat_getCatData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../cat/getCatData */ \"./src/js/cat/getCatData.js\");\n/* harmony import */ var _loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../loader */ \"./src/js/loader.js\");\n\r\n\r\n\r\nconst breedsContainer = document.querySelector('.breeds--cat');\r\nconst loader = document.querySelector('.loader--cat');\r\nconst ArrayOfBreeds = [];\r\nconst ArrayOfRestBreeds = [];\r\nconst imageURLs = [];\r\nconst apiKey = '12cb4a70-1e20-4fb6-b39f-4aa91e55716b';\r\nlet breedsCatNames = [];\r\nlet breedsCatId = [];\r\nlet breeds = [];\r\n\r\nasync function getRandomImagesByBreed(nameId, apiKey) {\r\n  for (let i = 0; i < 4; i++) {\r\n    const image = await Object(_cat_getCatData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(`https://api.thecatapi.com/v1/images/search?breed_ids=${nameId}`, apiKey);\r\n    imageURLs[i] = await image[0].url;\r\n  }\r\n  return imageURLs;\r\n}\r\n\r\n\r\nfunction showImageByBreed(urls) {\r\n  const carouselImgs = [...document.querySelectorAll('.cat-container .carousel-cell__img')];\r\n  const carouselBackgroundImgs = [...document.querySelectorAll('.cat-container .carousel-cell__background')];\r\n\r\n  carouselImgs.forEach((img, index) => {\r\n    img.src = `${urls[index]}`;\r\n  });\r\n  carouselBackgroundImgs.forEach((bgcImg, index) => {\r\n    bgcImg.style.backgroundImage = `url(${urls[index]})`\r\n  });\r\n  Object(_loader__WEBPACK_IMPORTED_MODULE_1__[\"hideLoading\"])(loader)\r\n}\r\n\r\nfunction createBreedButtons(name, id) {\r\n  const breed = {\r\n    name: name,\r\n    id: id,\r\n  };\r\n  ArrayOfBreeds.push(breed);\r\n\r\n  const breedButton = document.createElement('button');\r\n  breedButton.className = 'breeds__name';\r\n  breedButton.innerText = name;\r\n\r\n  breedButton.addEventListener('click', async (e) => {\r\n    e.preventDefault();\r\n    Object(_loader__WEBPACK_IMPORTED_MODULE_1__[\"showLoading\"])(loader);\r\n    for (let i = 0; i < ArrayOfBreeds.length; i++) {\r\n      if (ArrayOfBreeds[i].name === breedButton.innerText) {\r\n        const nameId = ArrayOfBreeds[i].id;\r\n        const urls = await getRandomImagesByBreed(nameId, apiKey);\r\n        showImageByBreed(urls);\r\n      }\r\n    }\r\n\r\n  })\r\n  breedsContainer.appendChild(breedButton);\r\n}\r\n\r\n\r\nfunction createMoreButton() {\r\n  const moreButton = document.createElement('button');\r\n  moreButton.className = 'breeds__name--more breeds__name--more-cat';\r\n  moreButton.innerText = 'more breeds';\r\n  breedsContainer.appendChild(moreButton);\r\n\r\n  moreButton.addEventListener('click', () => {\r\n    moreButton.style.display = 'none';\r\n    ArrayOfRestBreeds.forEach(breed => createBreedButtons(breed.name, breed.id))\r\n  })\r\n}\r\n\r\n\r\nasync function showAllBreeds(url, apiKey) {\r\n  breeds = await Object(_cat_getCatData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(`${url}/breeds`, apiKey);\r\n\r\n  breeds.forEach((breed, index) => {\r\n    if (index < 18) {\r\n      createBreedButtons(breed.name, breed.id);\r\n      breedsCatNames.push(breed.name);\r\n      breedsCatId.push(breed.id);\r\n    } else if (index === 18) {\r\n      createBreedButtons(breed.name, breed.id);\r\n      breedsCatNames.push(breed.name);\r\n      breedsCatId.push(breed.id);\r\n      createMoreButton();\r\n    } else {\r\n      breedsCatNames.push(breed.name);\r\n      breedsCatId.push(breed.id);\r\n      ArrayOfRestBreeds.push({\r\n        name: breed.name,\r\n        id: breed.id\r\n      })\r\n    }\r\n  })\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/js/cat/catsBreeds.js?");

/***/ }),

/***/ "./src/js/cat/catsButtonMobile.js":
/*!****************************************!*\
  !*** ./src/js/cat/catsButtonMobile.js ***!
  \****************************************/
/*! exports provided: catsBtnMobile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"catsBtnMobile\", function() { return catsBtnMobile; });\n/* harmony import */ var _searchBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../searchBar */ \"./src/js/searchBar.js\");\n/* harmony import */ var _dog_handleBigButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dog/handleBigButton */ \"./src/js/dog/handleBigButton.js\");\n\r\n\r\n\r\nfunction catsBtnMobile() {\r\n  const dogsButton = document.querySelector('.dog-container .pet-button');\r\n  const catsButton = document.querySelector('.cat-container .pet-button');\r\n  const catContainer = document.querySelector('.cat-container');\r\n  const dogContainer = document.querySelector('.dog-container');\r\n  const catsBreeds = document.querySelector('.breeds--cat');\r\n  const mainPetsContainer = document.querySelector('.main__pets-container');\r\n\r\n  catsButton.addEventListener('click', e => {\r\n    e.preventDefault();\r\n\r\n    dogsButton.style.display = 'none';\r\n    dogContainer.style.display = 'none';\r\n    catsBreeds.style.opacity = 0;\r\n\r\n    catsButton.remove();\r\n\r\n    const newCatButton = document.createElement('button');\r\n    newCatButton.classList.add('cat-container');\r\n    newCatButton.classList.add('pet-button');\r\n    newCatButton.classList.add('pet-button--mobile');\r\n    newCatButton.textContent = 'cats';\r\n    mainPetsContainer.insertBefore(newCatButton, catContainer);\r\n    mainPetsContainer.style.height = '95%';\r\n    catsBreeds.classList.add('breeds--without-dog');\r\n\r\n    setTimeout(() => {\r\n      catsBreeds.style.opacity = 1;\r\n      catsBreeds.style.display = 'flex';\r\n    }, 300);\r\n\r\n    const arrowButton = document.createElement('button');\r\n    const arrow = document.createElement('i');\r\n    arrow.classList.add('fas');\r\n    arrow.classList.add('fa-arrow-left');\r\n    arrowButton.classList.add('pet-button--arrow');\r\n    arrowButton.appendChild(arrow);\r\n    newCatButton.appendChild(arrowButton);\r\n\r\n    Object(_searchBar__WEBPACK_IMPORTED_MODULE_0__[\"searchBreed\"])(newCatButton.textContent);\r\n\r\n    arrowButton.addEventListener('click', e => {\r\n      e.preventDefault();\r\n\r\n      dogsButton.style.display = 'block';\r\n      dogContainer.style.display = 'block';\r\n      catsBreeds.style.display = 'none';\r\n      arrowButton.style.display = 'none';\r\n      mainPetsContainer.style.height = '85%';\r\n      newCatButton.remove();\r\n      catContainer.appendChild(catsButton);\r\n      catsBreeds.classList.remove('breeds--without-dog');\r\n\r\n      document.getElementById('search-wrapper').style.display = 'none';\r\n      document.getElementById('search-bar').value = '';\r\n\r\n      Object(_dog_handleBigButton__WEBPACK_IMPORTED_MODULE_1__[\"showCatBreeds\"])(catsBreeds);\r\n    })\r\n  })\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/js/cat/catsButtonMobile.js?");

/***/ }),

/***/ "./src/js/cat/getCatData.js":
/*!**********************************!*\
  !*** ./src/js/cat/getCatData.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nasync function getCatData(url, apiKey) {\r\n  const request = await fetch(url, {\r\n    headers: {\r\n      'x-api-key': apiKey\r\n    }\r\n  });\r\n  const data = await request.json();\r\n  return data;\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (getCatData);\n\n//# sourceURL=webpack:///./src/js/cat/getCatData.js?");

/***/ }),

/***/ "./src/js/dog/Dog.js":
/*!***************************!*\
  !*** ./src/js/dog/Dog.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Pet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Pet */ \"./src/js/Pet.js\");\n/* harmony import */ var _getDogData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getDogData */ \"./src/js/dog/getDogData.js\");\n/* harmony import */ var _loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../loader */ \"./src/js/loader.js\");\n\r\n\r\n\r\n\r\nclass Dog extends _Pet__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n  constructor(petContainer, quantityOfImages) {\r\n    super(petContainer, quantityOfImages)\r\n    this.loader = document.querySelector('.loader');\r\n  }\r\n\r\n  async addCell() {\r\n    Object(_loader__WEBPACK_IMPORTED_MODULE_2__[\"showLoading\"])(this.loader);\r\n    const images = await Object(_getDogData__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(`https://dog.ceo/api/breeds/image/random/${this.quantityOfImages}`);\r\n    this.carouselCells.forEach((element, index) => {\r\n      this.addBackground(element, images[index]);\r\n      this.addImage(element, images[index]);\r\n    })\r\n    Object(_loader__WEBPACK_IMPORTED_MODULE_2__[\"hideLoading\"])(this.loader);\r\n  }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dog);\n\n//# sourceURL=webpack:///./src/js/dog/Dog.js?");

/***/ }),

/***/ "./src/js/dog/dogsBreeds.js":
/*!**********************************!*\
  !*** ./src/js/dog/dogsBreeds.js ***!
  \**********************************/
/*! exports provided: showAllBreeds, breeds, breedsNames, createBreedButton, addBreed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showAllBreeds\", function() { return showAllBreeds; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"breeds\", function() { return breeds; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"breedsNames\", function() { return breedsNames; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createBreedButton\", function() { return createBreedButton; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addBreed\", function() { return addBreed; });\n/* harmony import */ var _getDogData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getDogData */ \"./src/js/dog/getDogData.js\");\n/* harmony import */ var _loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../loader */ \"./src/js/loader.js\");\n\r\n\r\n\r\nconst breedsContainer = document.querySelector('.breeds');\r\nconst urlAPI = 'https://dog.ceo/api/breeds/list/all';\r\nconst loader = document.querySelector('.loader');\r\nlet breeds = [];\r\nlet numberOfBreedButtons = 0;\r\nlet quantityOfButtons = 19;\r\nlet restBreeds = 0;\r\nconst breedsNames = [];\r\n\r\nfunction createBreedButton(name, type) {\r\n  const breedElement = document.createElement('button');\r\n  breedElement.className = 'breeds__name';\r\n  breedElement.innerText = name;\r\n  breedsContainer.appendChild(breedElement);\r\n\r\n  breedElement.addEventListener('click', async () => {\r\n    Object(_loader__WEBPACK_IMPORTED_MODULE_1__[\"showLoading\"])(loader);\r\n    const urlImg = await Object(_getDogData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\r\n      `https://dog.ceo/api/breed/${type}/images/random/4`,\r\n    );\r\n\r\n    const carouselImgs = [\r\n      ...document.querySelectorAll('.dog-container .carousel-cell__img'),\r\n    ];\r\n    const carouselBackgroundImgs = [\r\n      ...document.querySelectorAll('.dog-container .carousel-cell__background'),\r\n    ];\r\n\r\n    carouselImgs.forEach((img, index) => {\r\n      img.src = `${urlImg[index]}`;\r\n    });\r\n    carouselBackgroundImgs.forEach((bgcImg, index) => {\r\n      bgcImg.style.backgroundImage = `url(${urlImg[index]})`;\r\n    });\r\n    Object(_loader__WEBPACK_IMPORTED_MODULE_1__[\"hideLoading\"])(loader);\r\n  });\r\n}\r\n\r\nfunction createMoreButton() {\r\n  const moreButton = document.createElement('button');\r\n  moreButton.classList.add('breeds__name--more-dog');\r\n  moreButton.classList.add('breeds__name--more');\r\n  moreButton.innerText = 'more breeds';\r\n  breedsContainer.appendChild(moreButton);\r\n\r\n  moreButton.addEventListener('click', () => {\r\n    moreButton.style.display = 'none';\r\n\r\n    for (const breed in breeds) {\r\n      restBreeds++;\r\n      if (restBreeds >= 19) {\r\n        if (breeds[breed].length === 0) {\r\n          addBreed(breed);\r\n        } else {\r\n          for (const subBreed of breeds[breed]) {\r\n            addBreed(breed, subBreed);\r\n          }\r\n        }\r\n      }\r\n    }\r\n  });\r\n}\r\n\r\nfunction addBreed(breed, subBreed) {\r\n  let name;\r\n  let type;\r\n\r\n  if (typeof subBreed === 'undefined') {\r\n    name = breed;\r\n    type = breed;\r\n  } else {\r\n    name = `${breed} ${subBreed}`;\r\n    type = `${breed}/${subBreed}`;\r\n  }\r\n\r\n  createBreedButton(name, type);\r\n}\r\n\r\nasync function showAllBreeds() {\r\n  breeds = await Object(_getDogData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(urlAPI);\r\n\r\n  for (const breed in breeds) {\r\n    if (breeds[breed].length === 0) {\r\n      breedsNames.push(breed);\r\n    } else {\r\n      for (const subBreed of breeds[breed]) {\r\n        breedsNames.push(`${breed} ${subBreed}`);\r\n      }\r\n    }\r\n  }\r\n\r\n  for (const breed in breeds) {\r\n    if (numberOfBreedButtons < quantityOfButtons) {\r\n      if (breeds[breed].length === 0) {\r\n        addBreed(breed);\r\n      } else {\r\n        for (const subBreed of breeds[breed]) {\r\n          addBreed(breed, subBreed);\r\n        }\r\n      }\r\n    } else if (numberOfBreedButtons === quantityOfButtons) {\r\n      createMoreButton();\r\n    }\r\n    numberOfBreedButtons++;\r\n  }\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/js/dog/dogsBreeds.js?");

/***/ }),

/***/ "./src/js/dog/dogsButtonMobile.js":
/*!****************************************!*\
  !*** ./src/js/dog/dogsButtonMobile.js ***!
  \****************************************/
/*! exports provided: dogBtnMobile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dogBtnMobile\", function() { return dogBtnMobile; });\n/* harmony import */ var _searchBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../searchBar */ \"./src/js/searchBar.js\");\n/* harmony import */ var _handleBigButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handleBigButton */ \"./src/js/dog/handleBigButton.js\");\n\r\n\r\n\r\nfunction dogBtnMobile() {\r\n  const dogsButton = document.querySelector('.dog-container .pet-button');\r\n  const catButton = document.querySelector('.cat-container .pet-button');\r\n  const catContainer = document.querySelector('.cat-container');\r\n  const dogContainer = document.querySelector('.dog-container');\r\n  const dogsBreeds = document.querySelector('.breeds');\r\n  const mainPetsContainer = document.querySelector('.main__pets-container');\r\n\r\n  dogsButton.addEventListener('click', (e) => {\r\n    e.preventDefault();\r\n\r\n    catContainer.style.display = 'none';\r\n    catButton.style.display = 'none';\r\n    dogContainer.style.opacity = 0;\r\n\r\n    dogsButton.remove();\r\n\r\n    const newDogButton = document.createElement('button');\r\n    newDogButton.classList.add('dog-container');\r\n    newDogButton.classList.add('pet-button');\r\n    newDogButton.classList.add('pet-button--mobile');\r\n    newDogButton.textContent = 'dogs';\r\n    mainPetsContainer.insertBefore(newDogButton, dogsBreeds);\r\n    mainPetsContainer.style.height = '95%';\r\n\r\n    setTimeout(() => {\r\n      dogContainer.style.opacity = 1;\r\n      dogsBreeds.style.display = 'flex';\r\n      dogsBreeds.style.margin = '0 0 15px 0';\r\n      dogsBreeds.classList.add('breeds--without-cat');\r\n    }, 300);\r\n\r\n    const arrowButton = document.createElement('button');\r\n    const arrow = document.createElement('i');\r\n    arrow.classList.add('fas');\r\n    arrow.classList.add('fa-arrow-left');\r\n    arrowButton.classList.add('pet-button--arrow');\r\n    arrowButton.appendChild(arrow);\r\n    newDogButton.appendChild(arrowButton);\r\n\r\n    Object(_searchBar__WEBPACK_IMPORTED_MODULE_0__[\"searchBreed\"])('dog');\r\n\r\n    arrowButton.addEventListener('click', (e) => {\r\n      e.preventDefault();\r\n\r\n      catContainer.style.display = 'block';\r\n      catButton.style.display = 'block';\r\n      dogsBreeds.style.display = 'none';\r\n      arrowButton.style.display = 'none';\r\n      dogContainer.style.opacity = 1;\r\n      mainPetsContainer.style.height = '85%';\r\n      newDogButton.remove();\r\n      dogContainer.appendChild(dogsButton);\r\n\r\n      document.getElementById('search-wrapper').style.display = 'none';\r\n      document.getElementById('search-bar').value = '';\r\n\r\n      Object(_handleBigButton__WEBPACK_IMPORTED_MODULE_1__[\"showDogBreeds\"])(dogsBreeds)\r\n    });\r\n  });\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/js/dog/dogsButtonMobile.js?");

/***/ }),

/***/ "./src/js/dog/getDogData.js":
/*!**********************************!*\
  !*** ./src/js/dog/getDogData.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nasync function getDogData(url) {\r\n  try {\r\n    const request = await fetch(url);\r\n    const data = await request.json();\r\n    const urls = await data.message;\r\n    return urls;\r\n  } catch (error) {\r\n    console.log(error);\r\n  }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (getDogData);\n\n//# sourceURL=webpack:///./src/js/dog/getDogData.js?");

/***/ }),

/***/ "./src/js/dog/handleBigButton.js":
/*!***************************************!*\
  !*** ./src/js/dog/handleBigButton.js ***!
  \***************************************/
/*! exports provided: handleBigButton, showDogBreeds, showCatBreeds */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"handleBigButton\", function() { return handleBigButton; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showDogBreeds\", function() { return showDogBreeds; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showCatBreeds\", function() { return showCatBreeds; });\n/* harmony import */ var _dogsBreeds__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dogsBreeds */ \"./src/js/dog/dogsBreeds.js\");\n/* harmony import */ var _searchBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../searchBar */ \"./src/js/searchBar.js\");\n/* harmony import */ var _cat_catsBreeds__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cat/catsBreeds */ \"./src/js/cat/catsBreeds.js\");\n\r\n\r\n\r\nlet restBreeds = 0;\r\nlet firstClick = true;\r\nlet firstClickCat = true;\r\n\r\nfunction showDogBreeds(dogBreeds) {\r\n  dogBreeds.innerHTML = '';\r\n  for (const breed in _dogsBreeds__WEBPACK_IMPORTED_MODULE_0__[\"breeds\"]) {\r\n    if (_dogsBreeds__WEBPACK_IMPORTED_MODULE_0__[\"breeds\"][breed].length === 0) {\r\n      Object(_dogsBreeds__WEBPACK_IMPORTED_MODULE_0__[\"addBreed\"])(breed);\r\n    } else {\r\n      for (const subBreed of _dogsBreeds__WEBPACK_IMPORTED_MODULE_0__[\"breeds\"][breed]) {\r\n        Object(_dogsBreeds__WEBPACK_IMPORTED_MODULE_0__[\"addBreed\"])(breed, subBreed);\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\nfunction showCatBreeds(catBreeds) {\r\n  catBreeds.innerHTML = '';\r\n  _cat_catsBreeds__WEBPACK_IMPORTED_MODULE_2__[\"breeds\"].forEach((breed) => {\r\n    Object(_cat_catsBreeds__WEBPACK_IMPORTED_MODULE_2__[\"createBreedButtons\"])(breed.name, breed.id);\r\n  });\r\n}\r\n\r\nfunction handleBigButton() {\r\n  const dogButton = document.querySelector('.dog-container .pet-button');\r\n  const catButton = document.querySelector('.cat-container .pet-button');\r\n  const catContainer = document.querySelector('.cat-container');\r\n  const dogContainer = document.querySelector('.dog-container');\r\n  const catBreeds = document.querySelector('.breeds--cat');\r\n  const dogBreeds = document.querySelector('.breeds');\r\n\r\n  dogButton.addEventListener('click', (e) => {   \r\n    e.preventDefault();\r\n    dogButton.setAttribute('disabled', false);\r\n    catContainer.style.display = 'none';\r\n    catBreeds.style.display = 'none';\r\n    dogBreeds.classList.add('breeds--without-cat');\r\n    dogContainer.classList.add('dog-container--without-cat');\r\n    dogBreeds.style.height = 'fit-content';\r\n\r\n    const arrowButton = document.createElement('button');\r\n    const arrow = document.createElement('i');\r\n    arrow.classList.add('fas');\r\n    arrow.classList.add('fa-arrow-left');\r\n    arrowButton.classList.add('pet-button--arrow');\r\n    arrowButton.appendChild(arrow);\r\n    dogContainer.appendChild(arrowButton);\r\n\r\n    if (firstClick) {\r\n      document.querySelector('.breeds__name--more-dog').style.display = 'none';\r\n      for (const breed in _dogsBreeds__WEBPACK_IMPORTED_MODULE_0__[\"breeds\"]) {\r\n        restBreeds++;\r\n        if (restBreeds >= 19) {\r\n          if (_dogsBreeds__WEBPACK_IMPORTED_MODULE_0__[\"breeds\"][breed].length === 0) {\r\n            Object(_dogsBreeds__WEBPACK_IMPORTED_MODULE_0__[\"addBreed\"])(breed);\r\n          } else {\r\n            for (const subBreed of _dogsBreeds__WEBPACK_IMPORTED_MODULE_0__[\"breeds\"][breed]) {\r\n              Object(_dogsBreeds__WEBPACK_IMPORTED_MODULE_0__[\"addBreed\"])(breed, subBreed);\r\n            }\r\n          }\r\n        }\r\n      }\r\n      firstClick = false;\r\n    }\r\n    \r\n    Object(_searchBar__WEBPACK_IMPORTED_MODULE_1__[\"searchBreed\"])('dog');\r\n\r\n    arrowButton.addEventListener('click', (e) => {\r\n      e.preventDefault();\r\n      catContainer.style.display = 'block';\r\n      catBreeds.style.display = 'flex';\r\n      dogBreeds.classList.remove('breeds--without-cat');\r\n      dogContainer.classList.remove('dog-container--without-cat');\r\n      document.getElementById('search-wrapper').style.display = 'none';\r\n      document.getElementById('search-bar').value = '';\r\n      showDogBreeds(dogBreeds);\r\n      dogButton.removeAttribute('disabled');\r\n      dogBreeds.style.height = '';\r\n      document.querySelector('.pet-button--arrow').remove();\r\n    });\r\n  });\r\n\r\n  catButton.addEventListener('click', (e) => {\r\n    e.preventDefault();\r\n    catButton.setAttribute('disabled', false);\r\n    dogContainer.style.display = 'none';\r\n    dogBreeds.style.display = 'none';\r\n    catBreeds.classList.add('breeds--without-dog');\r\n    catContainer.classList.add('dog-container--without-dog');\r\n    catBreeds.style.height = 'fit-content';\r\n\r\n    const arrowButton = document.createElement('button');\r\n    const arrow = document.createElement('i');\r\n    arrow.classList.add('fas');\r\n    arrow.classList.add('fa-arrow-left');\r\n    arrowButton.classList.add('pet-button--arrow-cat');\r\n    arrowButton.appendChild(arrow);\r\n    catContainer.insertBefore(arrowButton, catButton);\r\n\r\n    if (firstClickCat) {\r\n      document.querySelector('.breeds__name--more-cat').style.display = 'none';\r\n      _cat_catsBreeds__WEBPACK_IMPORTED_MODULE_2__[\"ArrayOfRestBreeds\"].forEach((breed) =>\r\n        Object(_cat_catsBreeds__WEBPACK_IMPORTED_MODULE_2__[\"createBreedButtons\"])(breed.name, breed.id),\r\n      );\r\n      firstClickCat = false;\r\n    }\r\n   \r\n    Object(_searchBar__WEBPACK_IMPORTED_MODULE_1__[\"searchBreed\"])('cat');\r\n\r\n    arrowButton.addEventListener('click', (e) => {\r\n      e.preventDefault();\r\n      dogContainer.style.display = 'block';\r\n      dogBreeds.style.display = 'block';\r\n      catBreeds.classList.remove('breeds--without-dog');\r\n      catContainer.classList.remove('dog-container--without-dog');\r\n      document.getElementById('search-wrapper').style.display = 'none';\r\n      document.getElementById('search-bar').value = '';\r\n      catBreeds.style.height = '';\r\n      showCatBreeds(catBreeds);\r\n      catButton.removeAttribute('disabled');\r\n      document.querySelector('.pet-button--arrow-cat').remove();\r\n    });\r\n  });\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/js/dog/handleBigButton.js?");

/***/ }),

/***/ "./src/js/loader.js":
/*!**************************!*\
  !*** ./src/js/loader.js ***!
  \**************************/
/*! exports provided: showLoading, hideLoading */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showLoading\", function() { return showLoading; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hideLoading\", function() { return hideLoading; });\nfunction showLoading(loader) {\r\n  loader.classList.add('loader--visible');\r\n}\r\n\r\nfunction hideLoading(loader) {\r\n  loader.classList.remove('loader--visible')\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/js/loader.js?");

/***/ }),

/***/ "./src/js/searchBar.js":
/*!*****************************!*\
  !*** ./src/js/searchBar.js ***!
  \*****************************/
/*! exports provided: searchBreed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"searchBreed\", function() { return searchBreed; });\n/* harmony import */ var _dog_dogsBreeds__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dog/dogsBreeds */ \"./src/js/dog/dogsBreeds.js\");\n/* harmony import */ var _loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loader */ \"./src/js/loader.js\");\n/* harmony import */ var _dog_getDogData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dog/getDogData */ \"./src/js/dog/getDogData.js\");\n/* harmony import */ var _cat_catsBreeds__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cat/catsBreeds */ \"./src/js/cat/catsBreeds.js\");\n\r\n\r\n\r\n\r\n\r\nconst dogBreedsContainer = document.querySelector('.breeds');\r\nconst catBreedsContainer = document.querySelector('.breeds--cat');\r\nconst loader = document.querySelector('.loader');\r\nconst loaderCat = document.querySelector('.loader--cat');\r\nconst apiKey = '12cb4a70-1e20-4fb6-b39f-4aa91e55716b';\r\n\r\nconst searchBreed = (pet) => { \r\n  const searchWrapper = document.getElementById('search-wrapper');\r\n  searchWrapper.style.display = 'flex';\r\n\r\n  const searchBar = document.getElementById('search-bar');\r\n\r\n  searchBar.addEventListener('keyup', (e) => {\r\n    const searchBreed = e.target.value.toLowerCase();\r\n    \r\n    if (pet === 'dog') {\r\n      const filteredBreed = _dog_dogsBreeds__WEBPACK_IMPORTED_MODULE_0__[\"breedsNames\"].filter((breed) => {\r\n        return breed.toLowerCase().includes(searchBreed);\r\n      });\r\n      displayBreeds(filteredBreed, dogBreedsContainer);\r\n      getImageByDogBreed();\r\n    } else if (pet === 'cat') {\r\n      const filteredBreed = _cat_catsBreeds__WEBPACK_IMPORTED_MODULE_3__[\"breedsCatNames\"].filter((breed) => {\r\n        return breed.toLowerCase().includes(searchBreed);\r\n      });\r\n      displayBreeds(filteredBreed, catBreedsContainer);\r\n      getImageByCatBreed();\r\n    }\r\n  });\r\n};\r\n\r\nconst displayBreeds = (breeds, breedsContainer) => {\r\n  const htmlString = breeds\r\n    .map((breed) => {\r\n      return `<button class=\"breeds__name\">${breed}</button>`;\r\n    })\r\n    .join('');\r\n  breedsContainer.innerHTML = htmlString;\r\n};\r\n\r\nconst getImageByDogBreed = () => {\r\n  const breeds = document.querySelectorAll(\r\n    '.breeds--without-cat .breeds__name',\r\n  );\r\n  \r\n  breeds.forEach((breed) => {\r\n    breed.addEventListener('click', async () => {\r\n      Object(_loader__WEBPACK_IMPORTED_MODULE_1__[\"showLoading\"])(loader);\r\n\r\n      const breedString = breed.textContent;\r\n      let subbreedString = '';\r\n\r\n      if (breedString.includes(' ')) {\r\n        const stringBreed = breedString.split('');\r\n        const index = breedString.indexOf(' ');\r\n        stringBreed[index] = '/';\r\n        subbreedString = stringBreed.join('');\r\n      }\r\n\r\n      const urlImg = await Object(_dog_getDogData__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\r\n        `https://dog.ceo/api/breed/${\r\n          breedString.includes(' ') ? subbreedString : breedString\r\n        }/images/random/4`,\r\n      );\r\n\r\n      const carouselImgs = [\r\n        ...document.querySelectorAll('.dog-container .carousel-cell__img'),\r\n      ];\r\n      const carouselBackgroundImgs = [\r\n        ...document.querySelectorAll(\r\n          '.dog-container .carousel-cell__background',\r\n        ),\r\n      ];\r\n\r\n      carouselImgs.forEach((img, index) => {\r\n        img.src = `${urlImg[index]}`;\r\n      });\r\n      carouselBackgroundImgs.forEach((bgcImg, index) => {\r\n        bgcImg.style.backgroundImage = `url(${urlImg[index]})`;\r\n      });\r\n      Object(_loader__WEBPACK_IMPORTED_MODULE_1__[\"hideLoading\"])(loader);\r\n    });\r\n  });\r\n};\r\n\r\nconst getImageByCatBreed = () => {\r\n  const breedsCat = document.querySelectorAll(\r\n    '.breeds--without-dog .breeds__name',\r\n  );\r\n\r\n  breedsCat.forEach((breed) => {\r\n    breed.addEventListener('click', async () => {\r\n      Object(_loader__WEBPACK_IMPORTED_MODULE_1__[\"showLoading\"])(loaderCat);\r\n      const nameBreed = breed.textContent;\r\n      const index = _cat_catsBreeds__WEBPACK_IMPORTED_MODULE_3__[\"breedsCatNames\"].indexOf(nameBreed);\r\n      const nameId = _cat_catsBreeds__WEBPACK_IMPORTED_MODULE_3__[\"breedsCatId\"][index];\r\n      const urls = await Object(_cat_catsBreeds__WEBPACK_IMPORTED_MODULE_3__[\"getRandomImagesByBreed\"])(nameId, apiKey);\r\n      Object(_cat_catsBreeds__WEBPACK_IMPORTED_MODULE_3__[\"showImageByBreed\"])(urls);\r\n    });\r\n  });\r\n};\r\n\n\n//# sourceURL=webpack:///./src/js/searchBar.js?");

/***/ }),

/***/ "./src/sass/main.scss":
/*!****************************!*\
  !*** ./src/sass/main.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/sass/main.scss?");

/***/ })

/******/ });