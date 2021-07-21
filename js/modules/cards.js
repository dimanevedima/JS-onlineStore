import {getResourse} from '../services/services.js';

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

  getResourse('http://localhost:3000/menu')
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

export default cards;
