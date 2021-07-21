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

export default slider;
