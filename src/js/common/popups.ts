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

export function getSendFormPopupHTML() {
  return `
    <div id="SendFormPopup" class="apply-form scroll-bar-hided__container apply-form--not-fixed-height">
    <section class="container container--primary">
      <div class="apply-form__wrapper">
        <div class="apply-form__wrapper-left apply-form__wrapper-left-form">
          <div class="apply-form__success-message apply-form__message">
            <h1>Ваша заяка принята!</h1>
            <p>Какой-то дополнительный текст. Например, наш менеджер свяжется с вами в течении дня.</p>
            <button class="button button--big-button">Хорошо</button>
          </div>
          <div class="apply-form__error-message apply-form__message">
            <h1>Заявка не отправлена!</h1>
            <p>Какой-то дополнительный текст. Например, можно здесь подробнее описать возникшую ошибку.</p>
            <button class="button button--big-button">Попробовать заново</button>
          </div>
          <div class="apply-form__form">
            <h1 class="apply-form__title">Оставить заявку</h1>
            <div class="input-error-wrapper name-input-wrapper">
              <input class="input apply-form__input input--name" type="text" name="name" placeholder="Имя">
              <span class="input-error-wrapper__error">Это поле нужно заполнить</span>
            </div>
            <div class="input-error-wrapper email-input-wrapper">
              <input class="input apply-form__input input--email" type="text" name="email" placeholder="Email">
              <span class="input-error-wrapper__error">Это поле нужно заполнить</span>
            </div>
            <div class="input-error-wrapper phone-input-wrapper">
              <input id="MainApplyFormPhoneInput" class="input apply-form__input input--phone" type="text" name="phone" placeholder="+7 999 999 99 99">
              <span class="input-error-wrapper__error">Это поле нужно заполнить</span>
            </div>
            <div class="apply-form__bottom-wrapper">
              <textarea class="textarea apply-form__input input--task" type="text" name="task" placeholder="Опишите свою задачу"></textarea>
              <div class="apply-form__checkbox">
                <div class="checkbox">
                  <input type="checkbox" class="checkbox__input" id="happy2">
                  <label for="happy2">
                    <img src="/assets/done.svg" alt="">
                  </label>
                </div>
                <span>
                  Я согласен (-а) с <a href="">политикой обработки персональных данных</a> 
                </span>
              </div>
            </div>
            <button class="button button--big-button">
              <img src="../assets/tabbar/black-send.svg" alt="">
              <span>Оставить заявку</span>
            </button>
          </div>
        </div>
        <div class="apply-form__wrapper-right">
          <button class="apply-form__close-button">
            <span class="material-icons">cancel</span>
          </button>
          <div class="apply-form__info">
            <p>Пока остальные говорят, наши разработки обеспечивают безопасность инфраструктурных и государственных объектов.</p>
            <div class="apply-form__companies-logos">
              <img src="assets/gasprom.png" alt="">
              <img src="assets/newopentech.svg" alt="">
              <img src="assets/profitness.svg" alt="">
              <img src="assets/rusal.svg" alt="">
              <span>МО РФ</span>
              <span>ФСИН РФ</span>
              <img src="assets/worldclass.svg" alt="">
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  `
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

function setUpSendFormPopup() {
  let popupWrapper = $('#SendFormPopupWrapper')
  popupWrapper.html(getSendFormPopupHTML())
  console.log('setUpSendFormPopup')
  let popup = $('#SendFormPopup')
  popup.hide();

  $('#HeaderSendButton').click((e) => {
    popup.fadeIn();
  });
  $('#TabbarSendButton').click((e) => {
    popup.fadeIn();
  });

  $('#SendFormPopup .apply-form__close-button').click(() => {
    popup.fadeOut();
  })
}

export const Popup = {
  setUpProductsPopup,
  setUpSendFormPopup
}