import "../../styles/main/main.scss"

import $ from "jquery"

import { setUpApplyFormPhoneInput } from "./phone"
import { setUpSwipers } from "./swipers"
import { getProductsPopupHTML } from "../common/popups"

$('#ProductsPopupWrapper').html(getProductsPopupHTML())
$('#HeaderProductsButton').click(() => {
  let isActive = $('#HeaderProductsButton').hasClass('header__menu-item--active')
  if (isActive) {
    $('#HeaderProductsButton').removeClass('header__menu-item--active')
    $('#ProductsPopupWrapper .products-popup').fadeOut(100);
  } else {
    let x = $('#HeaderProductsButton').offset()?.left
    $('#ProductsPopupWrapper .products-popup').css("left", x || 300)
    $('#HeaderProductsButton').addClass('header__menu-item--active')
    $('#ProductsPopupWrapper .products-popup')
    .fadeIn(100);
  }
})

$(document).click(function(event) {
  let area = $('#ProductsPopupWrapper')
  let button = $('#HeaderProductsButton')
  //@ts-ignore
  if (!button.is(event.target) && button.has(event.target).length === 0 && !area.is(event.target) && area.has(event.target).length === 0) {
    $('#HeaderProductsButton').removeClass('header__menu-item--active')
    $('#ProductsPopupWrapper .products-popup').fadeOut(100);
  }
});

setUpSwipers()
setUpApplyFormPhoneInput()