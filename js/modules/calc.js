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

export default calc;
