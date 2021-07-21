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

export default modal;
export {
  closeModal,
  openModal
};
