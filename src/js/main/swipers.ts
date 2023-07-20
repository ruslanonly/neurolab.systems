import Swiper, { Navigation, Pagination } from "swiper"

import $ from "jquery"
import { getMainProductSlidesHTML } from "./product";
import { mainProducts } from "../common/products";
import { devPrinciples, getDevPrinciplesSlidesHTML } from "./dev-principles";

Swiper.use([Navigation, Pagination])

function setUpMainProductSwiper() {
  // $('.main-product-slider__wrapper').html(getMainProductSlidesHTML(mainProducts))
  const swiper = new Swiper('.main-product-slider-swiper', {
    slidesPerView: 1,
    direction: 'horizontal',
    speed: 1000,
    wrapperClass: "main-product-slider__wrapper",
    slideClass: "main-product-slider__slide",
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });
  
  $(".main-product-slider .main-product-swiper-button-prev").click((e) => {
    e.stopPropagation()
    swiper.slidePrev();
  })
  
  $(".main-product-slider .main-product-swiper-button-next").click((e) => {
    e.stopPropagation()
    swiper.slideNext();
  })
}

function setUpDevPrinciplesSwiper() {
  // $('.dev-principles__slider-wrapper').html(getDevPrinciplesSlidesHTML(devPrinciples))

  let viewWidth = window.innerWidth
  console.log(viewWidth, viewWidth > 1108 ? 3 : 1)
  const swiper = new Swiper('.dev-principles__slider-swiper', {
    slidesPerView: viewWidth > 1108 ? 3 : 1,
    direction: 'horizontal',
    spaceBetween: "30px",
    speed: 500,
    wrapperClass: "dev-principles__slider-wrapper",
    slideClass: "dev-principles__slide",
    pagination: {
      enabled: true,
      el: ".dev-principles__nav-fracs-current",
      type: "custom",
      renderCustom(swiper, current, total) {
        return `0${current}`
      },
    },
  });
  
  $(".dev-principles__nav-controls .dev-principles__nav-controls-prev").click(() => {
    swiper.slidePrev();
  })
  
  $(".dev-principles__nav-controls .dev-principles__nav-controls-next").click(() => {
    swiper.slideNext();
  })
}

export function setUpSwipers() {
  setUpMainProductSwiper()
  setUpDevPrinciplesSwiper()
}