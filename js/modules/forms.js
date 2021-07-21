import {closeModal, openModal} from './modal.js';
import {postData} from '../services/services.js'

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

      postData('http://localhost:3000/requests', json)
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
    openModal('.modal',modalTimerId);

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
      closeModal('.modal');
    }, 4000)

  }

}

export default forms;
