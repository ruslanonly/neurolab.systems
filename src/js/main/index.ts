import "../../styles/main/main.scss"

import $ from "jquery"
import Swiper from "swiper"

type MainProductSlide = {
  title: string,
  subtitle: string
}

const mainProductSlides: MainProductSlide[] = [
  {title: "СОЮЗНИК", subtitle: "Система обеспечения безопасности периметра"},
  {title: "ПАКРОВ", subtitle: "Программно-аппаратный комплекс раннего обнаружения возгорания"},
  {title: "ИСБ", subtitle: "Интеллектуальные системы безопасности"},
  {title: "ПрофТренер", subtitle: "Тренажер по общению с клиентами для сотрудников "},
  {title: "DMS", subtitle: "Система автоматического предотвращения происшествий"},
  {title: "Распознование", subtitle: "Сиcтема контроля доступа с биометирией"},
]

function setUpMainProductSlides(slides: MainProductSlide[]) {
  let html = ``;
  for(let i = 0; i < slides.length; i++) {
    html += `
    <div class="main-product-slider__slide">
      <div class="main-product-slider__slide-wrapper">
        <div class="main-product-slider__slide-top">
          <h1 class="main-product-slider__slide-title">${slides[i].title}</h1>
          <h2 class="main-product-slider__slide-subtitle">${slides[i].subtitle}</h2>
        </div>
        <div class="main-product-slider__slide-bottom">
          <div class="main-product-slider__slide-controls">
            <button class="main-product-swiper-button-prev">
              <span class="material-symbols-outlined">
                west
              </span>
            </button>
            <button class="main-product-swiper-button-next">
              <span class="material-symbols-outlined">
                east
              </span>
            </button>
          </div>
          <div class="main-product-slider__slide-scroll">
            <div class="main-product-slider__scroll-top">
              <span>0${i + 1} / 06</span>
              <span>скролл</span>
            </div>
            <div class="main-product-slider__scroll-line">
              <div 
              class="main-product-slider__scroll-subline"
              style="width: ${(i + 1) * 100 / slides.length}%;"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    `
  }
  $('.main-product-slider__wrapper').html(html)
}

setUpMainProductSlides(mainProductSlides)

const swiper = new Swiper('.main-product-slider-swiper', {
  slidesPerView: 1,
  direction: 'horizontal',
  loop: true,
  speed: 1000,
  wrapperClass: "main-product-slider__wrapper",
  slideClass: "main-product-slider__slide",
  rewind: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});

$(".main-product-slider .main-product-swiper-button-prev").click(() => {
  swiper.slidePrev();
})

$(".main-product-slider .main-product-swiper-button-next").click(() => {
  swiper.slideNext();
})

const prefixNumber = (str: string) => {
  if (str === "7") {
    return "7 ";
  }
  if (str === "8") {
    return "8 ";
  }
  if (str === "9") {
    return "7 9";
  }
  return "7 ";
};

$("#ApplyFormPhoneInput").on("input", (event) => {
  const inputValue = $("#ApplyFormPhoneInput").val() as string || '';

  let value = inputValue.replace(/\D+/g, '');

  const numberLength = 11;

  let result;
  if (inputValue.includes("+8") || inputValue[0] === "8") {
    result = "";
  } else {
    result = "+";
  }

  for (let i = 0; i < value.length && i < numberLength; i++) {
    switch (i) {
      case 0:
        result += prefixNumber(value[i]);
        continue;
      case 4:
        result += " ";
        break;
      case 7:
        result += " ";
        break;
      case 9:
        result += " ";
        break;
      default:
        break;
    }
    result += value[i];
  }

  $("#ApplyFormPhoneInput").val(result)
})