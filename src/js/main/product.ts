import { MainProduct } from "../common/products";

export function getMainProductSlidesHTML(slides: MainProduct[]) {
  let html = ``;
  for(let i = 0; i < slides.length; i++) {

    let backgroundHTML = slides[i].presentationType == "video" ? `
      <video class="main-product-slider__video" autoplay muted loop>
        <source class="main-product-slider__video" src="${slides[i].video}" type="video/mp4">
      </video>
    ` : `
      <div class="main-product-slider__image" style="background-image: url(${slides[i].photo})"></div>
    `

    html += `
    <div onclick="window.location.href='.${slides[i].url}'" class="main-product-slider__slide">
      <div class="main-product-slider__slide-wrapper">

        ${backgroundHTML}

        <div class="main-product-slider__slide-top">
          <h1 class="main-product-slider__slide-title">${slides[i].title}</h1>
          <h2 class="main-product-slider__slide-subtitle">${slides[i].subtitle}</h2>
        </div>
        <div class="main-product-slider__slide-bottom">
          <div class="main-product-slider__slide-controls">
            <button class="main-product-swiper-button-prev">
              <span class="material-symbols-outlined">
                arrow_left_alt
              </span>
            </button>
            <button class="main-product-swiper-button-next">
              <span class="material-symbols-outlined">
                arrow_right_alt
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
  return html
}