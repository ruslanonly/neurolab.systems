import $ from "jquery"

function setUp() {
  $('#TabbarFactsItem').click(() => {
    
  })
  $('#TabbarSolvedTasksItem').click(() => {
    
  })
  $('#TabbarProductsItem').click(() => {
    console.log('hello')
    let isActive = $('#HeaderProductsButton').hasClass('header__menu-item--active')
    if (isActive) {
      $('#HeaderProductsButton').removeClass('header__menu-item--active')
      $('#ProductsPopupWrapper .products-popup').fadeOut(100);
    } else {
      let x = $('#HeaderProductsButton').offset()?.left
      $('#ProductsPopupWrapper .products-popup').css("left", 0)
      $('#ProductsPopupWrapper .products-popup').css("top", 0)
      $('#HeaderProductsButton').addClass('header__menu-item--active')
      $('#ProductsPopupWrapper .products-popup')
      .fadeIn(100);
    }
  })
  $('#TabbarPrinciplesItem').click(() => {
    
  })
  $('#TabbarSendItem').click(() => {
    
  })
}

export const Tabbar = {
  setUp
}