import $ from "jquery"
import { mainProducts } from "./products";

export function getProductsPopupHTML() {
  let productsPopupHTML = `
    <div class="products-popup">
      <div class="products-popup__wrapper">
        <div class="products-popup__top">
          <h1>Продукты</h1>
          <button class="products-popup__close-button">
            <span class="material-icons">cancel</span>
          </button>
          
        </div>
        <div class="products-popup__products">
  `;

  for(let i = 0; i < mainProducts.length; i++) {
    let p = mainProducts[i];

    let backgroundHTML = p.presentationType == "video" ? `
      <video class="products-popup__video" autoplay muted loop>
        <source src="${p.video}" type="video/mp4">
      </video>
    ` : `
      <div class="products-popup__image" style="background-image: url(${p.photo})"></div>
    `
    
    productsPopupHTML += `
      <a href="${p.url}" class="products-popup__product">
        <div class="products-popup__product-top">
          <div class="products-popup__product-ph-img">
            ${backgroundHTML}
          </div>
          <div class="products-popup__product-title">${p.title}</div>
        </div>
        <div class="products-popup__product-subtitle">${p.subtitle}</div>
      </a>
    `
  }

  productsPopupHTML += `
        </div>
      </div>
    </div>
  `

  return productsPopupHTML
}

function handleDocumentClick(event: JQuery.ClickEvent<Document, undefined, Document, Document>) {
  let area = $('#ProductsPopupWrapper')
  let button = $('#HeaderProductsButton')
  //@ts-ignore
  if (!button.is(event.target) && button.has(event.target).length === 0 && !area.is(event.target) && area.has(event.target).length === 0) {
    $('#HeaderProductsButton').removeClass('header__menu-item--active')
    $('#ProductsPopupWrapper .products-popup').fadeOut(100);
    $(document).off("click", handleDocumentClick);
  }
}

function setUpProductsPopup() {
  $('#ProductsPopupWrapper').html(getProductsPopupHTML())
  $('.products-popup .products-popup__close-button').click(() => {
    $('#HeaderProductsButton').removeClass('header__menu-item--active')
    $('#ProductsPopupWrapper .products-popup').fadeOut(100);

    $(document).off("click", handleDocumentClick);
  })
  $('#HeaderProductsButton').click(() => {
    let isActive = $('#HeaderProductsButton').hasClass('header__menu-item--active')
    if (isActive) {
      $('#HeaderProductsButton').removeClass('header__menu-item--active')
      $('#ProductsPopupWrapper .products-popup').fadeOut(100);

      $(document).off("click", handleDocumentClick);
    } else {
      let x = $('#HeaderProductsButton').offset()?.left
      $('#ProductsPopupWrapper .products-popup').css("left", x || 300)
      $('#HeaderProductsButton').addClass('header__menu-item--active')
      $('#ProductsPopupWrapper .products-popup')
      .fadeIn(100);

      $(document).on("click", handleDocumentClick);
    }
  })
}

export const Popup = {
  setUpProductsPopup
}