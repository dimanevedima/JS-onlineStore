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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/modules/calc.js":
/*!****************************!*\
  !*** ./js/modules/calc.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function calc () {

  const ccalResult = document.querySelector('.calculating__result span');
  let sex = 'female',
    height, weight, age,
    ratio = 1.375;

  function calcTotal() {

    if (!sex || !height || !weight || !age || !ratio) {
      ccalResult.textContent = "____";
    } else {
      if (sex === 'female') {
        ccalResult.textContent = Math.floor((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * ratio);
      } else {
        ccalResult.textContent =  Math.floor((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * ratio).toFixed(0);
      }

    }
    const objCcal = {
      'sex': sex,
      'height': height,
      'weight': weight,
      'age': age,
      'ratio': ratio,
      'result': ccalResult.textContent
    }
    console.log(objCcal);

    localStorage.setItem('INFO', JSON.stringify(objCcal));

  }


  const calculateWr = document.querySelector('.calculating');
  calculateWr.addEventListener('input', (e) => {
    if (isNaN(e.target.value) || e.target.value == '') {
      e.target.value = e.target.value.replace(/\D/g, '');
      e.target.style.border = '1px solid red';
    } else {
      e.target.style.border = '1px solid green';
      const target = e.target.value;
      switch (e.target.getAttribute('id')) {
        case 'height':
          height = +target;
          console.log(height);
          break;
        case 'weight':
          weight = +target;
          break;
        case 'age':
          age = +target;
          break;
        default:
      }
      calcTotal();
    }

  });
  const divInf = calculateWr.querySelectorAll('div.calculating__choose-item');
  divInf.forEach(item => {
    item.addEventListener('click', (e) => {
      if (e.target.getAttribute('data-ratio')) {
        ratio = e.target.getAttribute('data-ratio');
        divInf.forEach(item => {
          if (item.getAttribute('id') != 'female' && item.getAttribute('id') != 'male') {
            item.classList.remove('calculating__choose-item_active');
          }
        });
      } else {
        sex = e.target.getAttribute('id');
        divInf.forEach(item => {
          if (item.getAttribute('id') === 'female' || item.getAttribute('id') === 'male') {
            item.classList.remove('calculating__choose-item_active');
          }
        });
      }
      e.target.classList.add('calculating__choose-item_active');
      calcTotal();
    });
  });

  function showCalc() {

    document.querySelectorAll('input').forEach(item => {
      item.value = '';
    });

    if (localStorage.getItem('INFO')) {
      const obj = JSON.parse(localStorage.getItem('INFO'));

      document.querySelectorAll('div#gender div.calculating__choose-item')
        .forEach(item => {
          if (item.getAttribute('id') === `${obj.sex}`) {
            item.classList.add('calculating__choose-item_active');
            sex = `${obj.sex}`;
          } else {
            item.classList.remove('calculating__choose-item_active');
          }
        });

      document.querySelectorAll('div.calculating__choose_big div.calculating__choose-item')
        .forEach(item => {
          if (item.getAttribute('data-ratio') == obj.ratio) {
            item.classList.add('calculating__choose-item_active');
            ratio = item.getAttribute('data-ratio');
          } else {
            item.classList.remove('calculating__choose-item_active');
          }
        });

      if (obj.height != 0 && obj.height) {
        height = document.querySelector('#height').value = obj.height;

      }
      if (obj.weight != 0 && obj.weight) {
        weight = document.querySelector('#weight').value = obj.weight;
      }
      if (obj.age != 0 && obj.age) {
        age = document.querySelector('#age').value = obj.age;
      }
        ccalResult.textContent = obj.result;
    }
  }
  showCalc();
}

/* harmony default export */ __webpack_exports__["default"] = (calc);


/***/ }),

/***/ "./js/modules/cards.js":
/*!*****************************!*\
  !*** ./js/modules/cards.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_services_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/services.js */ "./js/services/services.js");


function cards() {
  class menuItem {
    constructor(src, alt, name, text, price, parentSelector) {
      this.src = src;
      this.alt = alt;
      this.name = name;
      this.text = text;
      this.price = price;
      this.transfer = 27;
      this.changeToUAH();
      this.parent = document.querySelector(parentSelector);
    }

    changeToUAH() {
      this.price = this.price * this.transfer;
    }

    render() {
      const element = document.createElement('div');
      element.innerHTML = `
      <div class="menu__item">
          <img src=${this.src} alt=${this.alt}>
          <h3 class="menu__item-subtitle">Меню ${this.name}</h3>
          <div class="menu__item-descr">${this.text}</div>
          <div class="menu__item-divider"></div>
          <div class="menu__item-price">
            <div class="menu__item-cost">Цена:</div>
            <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
          </div>
        </div>
        `;
      this.parent.append(element);
    }
  }

  Object(_services_services_js__WEBPACK_IMPORTED_MODULE_0__["getResourse"])('http://localhost:3000/menu')
    .then(data => {
      data.forEach(({
        img,
        altimg,
        title,
        descr,
        price
      }) => {
        new menuItem(img, altimg, title, descr, price, '.menu .container').render();
      });
    });

}

/* harmony default export */ __webpack_exports__["default"] = (cards);


/***/ }),

/***/ "./js/modules/forms.js":
/*!*****************************!*\
  !*** ./js/modules/forms.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal.js */ "./js/modules/modal.js");
/* harmony import */ var _services_services_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/services.js */ "./js/services/services.js");



function forms(formSelector, modalTimerId) {
  //FORMS

  const forms = document.querySelectorAll(formSelector); // вынимается форма

  const message = {                         // объект - текст со спиннером
    loading: 'spinner.svg',
    succes: 'Спасибо! Скоро мы с Вами свяжемся!',
    failure: 'Что то пошло не так!'
  };

  forms.forEach(form => {  // каждой форме выпрлняется функция blindPostData
    bindPostData(form);
  });


  function bindPostData(form) {                // события для сбора инфы с формы
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const statusMessage = document.createElement('img'); // создание спиннера
      statusMessage.setAttribute("src", message.loading);
      statusMessage.style.cssText = `
        display: block;
        margin: 0 auto;
      `;

      form.insertAdjacentElement('afterend', statusMessage);  // помещение спиннера на сайт
      const formData = new FormData(form); // объект FormData для сбора инфы

      const json = JSON.stringify(Object.fromEntries(formData.entries()));

      Object(_services_services_js__WEBPACK_IMPORTED_MODULE_1__["postData"])('http://localhost:3000/requests', json)
        .then(json => {
          console.log(json);
          thanksMessage(message.succes);
          statusMessage.remove();
        })
        .catch(() => {
          thanksMessage(message.failure);
        })
        .finally(() => {
          form.reset();
        });
    });
  }

  function thanksMessage(message) {  // высвечение модального окна с сообщением

    const oldModal = document.querySelector('.modal__dialog');
    oldModal.classList.add('hide');
    Object(_modal_js__WEBPACK_IMPORTED_MODULE_0__["openModal"])('.modal',modalTimerId);

    const thanksDiv = document.createElement('div');
    thanksDiv.classList.add('modal__dialog');
    thanksDiv.innerHTML = `
    <div class="modal__content">
      <div class="modal__close" data-close>&times;</div>
      <div class="modal__title">${message}</div>
    </div>
    `;
    document.querySelector('.modal').append(thanksDiv);
    setTimeout(() => {
      thanksDiv.remove();
      oldModal.classList.remove('hide');
      oldModal.classList.add('show');
      Object(_modal_js__WEBPACK_IMPORTED_MODULE_0__["closeModal"])('.modal');
    }, 4000)

  }

}

/* harmony default export */ __webpack_exports__["default"] = (forms);


/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/*! exports provided: default, closeModal, openModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeModal", function() { return closeModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openModal", function() { return openModal; });
function closeModal(modalSelector) {
  const modal = document.querySelector(modalSelector);
  modal.classList.add('hide');
  modal.classList.remove('showhide');
  document.body.style.overflow = "";
}

function openModal(modalSelector, modalTimerId) {
  const modal = document.querySelector(modalSelector);
  modal.classList.add('show');
  modal.classList.remove('hide');
  document.body.style.overflow = "hidden";
  if (modalTimerId) {
    clearInterval(modalTimerId);
  }
}

function modal(triggerModal, modalSelector, modalTimerId) {

  const modal = document.querySelector(modalSelector);

  document.querySelectorAll(triggerModal).forEach((item, i) => { // кнопка для открытия можальных окон
    item.addEventListener('click', () => openModal(modalSelector, modalTimerId));
  });

  document.documentElement.addEventListener('click', (e) => { // обращение к HTML и закрытие модального окна

    if (e.target === modal || e.target.getAttribute('data-close') == '') {
      closeModal(modalSelector);
    }
  });

  document.addEventListener('keydown', (e) => { // обращение к документ для закрытия модалки при нажатии ESC
    if (e.code === "Escape" && modal.classList.contains('show')) {
      closeModal(modalSelector);
    }
  });


  function scrollModal() { // функция открытия модалки при дохода вниз страницы
    if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
      openModal(modalSelector, modalTimerId);
      window.removeEventListener('scroll', scrollModal);
    }
  }

  window.addEventListener('scroll', scrollModal); // создания сбытия
}

/* harmony default export */ __webpack_exports__["default"] = (modal);



/***/ }),

/***/ "./js/modules/slider.js":
/*!******************************!*\
  !*** ./js/modules/slider.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function slider({
  container,
  slide,
  nextArrow,
  prevArrow,
  totalCounter,
  currentCounter,
  wrapper,
  field
}) {

  //slider 2 variant

  const sliders = document.querySelectorAll(slide),
    prev = document.querySelector(prevArrow),
    next = document.querySelector(nextArrow),
    total = document.querySelector(totalCounter),
    current = document.querySelector(currentCounter),
    slidersWrapper = document.querySelector(wrapper),
    slidersField = document.querySelector(field),
    width = window.getComputedStyle(slidersWrapper).width;
  let slideIndex = 1;
  let offset = 0;

  document.querySelector('#total').textContent = `0${sliders.length}`;
  document.querySelector('#current').textContent = `0${slideIndex}`;

  slidersField.style.width = 100 * sliders.length + '%';
  slidersField.style.display = 'flex';
  slidersField.style.transition = '0.5s all';

  slidersWrapper.style.overflow = 'hidden';
  sliders.forEach(slide => slide.style.width = width);

  function showIndex() {
    document.querySelector('#current').textContent = `0${offset/parseInt(width) + 1}`;
  }

  next.addEventListener('click', () => {
    dots[offset / parseInt(width)].style.opacity = 0.5;
    if (offset == parseInt(width) * (sliders.length - 1)) {
      offset = 0;

    } else {
      offset += parseInt(width);
    }
    slidersField.style.transform = `translateX(-${offset}px)`;
    showIndex();
    dots[offset / parseInt(width)].style.opacity = 1;

    console.log(offset);
  });

  prev.addEventListener('click', () => {
    dots[offset / parseInt(width)].style.opacity = 0.5;
    if (offset == 0) {
      offset = parseInt(width) * (sliders.length - 1);

    } else {
      offset -= parseInt(width);
    }
    slidersField.style.transform = `translateX(-${offset}px)`;
    showIndex();
    dots[offset / parseInt(width)].style.opacity = 1;

    console.log(offset);
  });

  // points

  const sliderAll = document.querySelector(container);
  sliderAll.style.position = 'relative';

  const pointWrapper = document.createElement('ol');
  pointWrapper.classList.add("carousel_indicators");
  sliderAll.append(pointWrapper);

  for (let i = 0; i < sliders.length; i++) {

    const dot = document.createElement('li');
    dot.classList.add("dot");
    dot.setAttribute('data-slide-to', i + 1);
    pointWrapper.append(dot);
  }

  const dots = document.querySelectorAll('.dot');
  dots[offset / parseInt(width)].style.opacity = 1;

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      dots[offset / parseInt(width)].style.opacity = 0.5;
      offset = i * parseInt(width);
      slidersField.style.transform = `translateX(-${offset}px)`;
      dot.style.opacity = 1;
      showIndex();
      console.log(offset);
    });
  });
}

/* harmony default export */ __webpack_exports__["default"] = (slider);


/***/ }),

/***/ "./js/modules/tabs.js":
/*!****************************!*\
  !*** ./js/modules/tabs.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, activeClass) {
  //Tabs
  const tabs = document.querySelectorAll(tabsSelector),
    tabContent = document.querySelectorAll(tabsContentSelector),
    tabParent = document.querySelector(tabsParentSelector);
  function hideAllTabs() {
    tabContent.forEach((item, i) => {
      //item.style.display = 'none';
      item.classList.add('hide');
      item.classList.remove('show', 'fade');
    });

    tabs.forEach((item) => {
      item.classList.remove(activeClass);
    });
  }
  function showTab(i = 0) {
    tabContent[i].classList.add('show', 'fade');
    tabContent[i].classList.remove('hide');
    tabs[i].classList.add(activeClass);
  }
  hideAllTabs();
  showTab();
  tabParent.addEventListener('click', (e) => {
    const target = e.target;
    if (target && target.classList.contains(tabsSelector.slice(1))) {
      tabs.forEach((item, i) => {
        if (target == item) {
          hideAllTabs();
          showTab(i);
        }
      });
    }
  })
}

/* harmony default export */ __webpack_exports__["default"] = (tabs);


/***/ }),

/***/ "./js/modules/timer.js":
/*!*****************************!*\
  !*** ./js/modules/timer.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function timer (id, deadline) {
  // Timer
  document.querySelector('#deadline').innerHTML = `Акция закончится ${deadline}`;

  function getTimeRemaining(endTime) {
    const t = Date.parse(endTime) - Date.parse(new Date());

    const days = Math.floor(t / (1000 * 60 * 60 * 24));
    const hours = Math.floor(t / (1000 * 60 * 60) % 24);
    const minutes = Math.floor(t / (1000 * 60) % 60);
    const seconds = Math.floor((t / 1000) % 60)
    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }

  function getZero(num) {
    if (num >= 0 && num < 10) {
      return `0${num}`
    } else {
      return `${num}`
    }
  }

  function setClock(selector, endTime) {
    const timer = document.querySelector(selector),
      days = timer.querySelector('#days'),
      hours = timer.querySelector('#hours'),
      minutes = timer.querySelector('#minutes'),
      seconds = timer.querySelector('#seconds'),
      timeInter = setInterval(updateClock, 1000);

    updateClock();

    function updateClock() {
      const t = getTimeRemaining(endTime);
      days.innerHTML = getZero(t.days);
      hours.innerHTML = getZero(t.hours);
      minutes.innerHTML = t.minutes;
      seconds.innerHTML = t.seconds;
      days.innerHTML = t.days;

      if (t.total <= 0) {
        clearInterval(timeInter);
      }
    }
  }

  setClock(id, deadline);

}

/* harmony default export */ __webpack_exports__["default"] = (timer);


/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/calc */ "./js/modules/calc.js");
/* harmony import */ var _modules_cards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/cards */ "./js/modules/cards.js");
/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/forms */ "./js/modules/forms.js");
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/modal */ "./js/modules/modal.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/slider */ "./js/modules/slider.js");
/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/tabs */ "./js/modules/tabs.js");
/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/timer */ "./js/modules/timer.js");










document.addEventListener('DOMContentLoaded', () => {

  const modalTimerId = setTimeout(() => Object(_modules_modal__WEBPACK_IMPORTED_MODULE_3__["openModal"])('.modal', modalTimerId), 30000); // октрытие окна через 30 секунд

  Object(_modules_calc__WEBPACK_IMPORTED_MODULE_0__["default"])();
  Object(_modules_cards__WEBPACK_IMPORTED_MODULE_1__["default"])();
  Object(_modules_forms__WEBPACK_IMPORTED_MODULE_2__["default"])('form', modalTimerId);
  Object(_modules_modal__WEBPACK_IMPORTED_MODULE_3__["default"])('[data-modal]', '.modal', modalTimerId);
  Object(_modules_slider__WEBPACK_IMPORTED_MODULE_4__["default"])({
    container: '.offer__slider',
    slide: '.offer__slide',
    nextArrow: '.offer__slider-next',
    prevArrow: '.offer__slider-prev',
    totalCounter: '#total',
    currentCounter: '#current',
    wrapper: '.offer__slider-wrapper',
    field: '.offer__slider-inner'
  });
  Object(_modules_tabs__WEBPACK_IMPORTED_MODULE_5__["default"])('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
  Object(_modules_timer__WEBPACK_IMPORTED_MODULE_6__["default"])('.timer', '2020-09-11');

  setTimeout(function() {
    localStorage.clear();
  }, 100000);

});


/***/ }),

/***/ "./js/services/services.js":
/*!*********************************!*\
  !*** ./js/services/services.js ***!
  \*********************************/
/*! exports provided: postData, getResourse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postData", function() { return postData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getResourse", function() { return getResourse; });
const postData = async (url, data) => { // переменная содержащая функцию отправки на сервер необходимый заголовок и конструктор для данных
  const res = await fetch(url, {
    method: "POST",
    headers: {
      'Content-type': 'application/json'
    },
    body: data
  });

  return await res.json();
};

const getResourse = async (url) => {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Couldnt get from ${url} status: ${res.status}`);
  }
  return await res.json();
};

  
  


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map