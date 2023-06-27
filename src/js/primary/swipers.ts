import Swiper, { Navigation, Pagination } from "swiper"

import $ from "jquery"

Swiper.use([Navigation, Pagination])
export function setUpAppAreaSwiper() {
  let viewWidth = window.innerWidth
  let slidesPerView = viewWidth > 1108 ? 2 : 1
  const swiper = new Swiper('.app-area__slider-swiper', {
    spaceBetween: 30,
    slidesPerView: slidesPerView,
    direction: 'horizontal',
    speed: 1000,
    wrapperClass: "app-area__slider__wrapper",
    slideClass: "app-area__slide",
    pagination: {
      enabled: true,
      type: "custom",
      el: ".app-area__dots",
      renderCustom(swiper, current, total) {
        console.log(current, total)
        let html = ''
        for(let i = 0; i < total; i++) {
          html += `<div class="app-area__dot ${i + 1 == current ? "app-area__dot--active" : ''}"></div>`
        }
        return html
      },
    }
  });
  
  $(".app-area__controls .app-area__controls-prev").click(() => {
    swiper.slidePrev();
  })
  
  $(".app-area__controls .app-area__controls-next").click(() => {
    swiper.slideNext();
  })
}