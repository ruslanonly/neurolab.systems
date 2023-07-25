import "../../styles/main/main.scss"

import $ from "jquery"

import { setUpSwipers } from "./swipers"
import { Popup } from "../common/popups"
import { Tabbar } from "../common/tabbar"
import { createFormEventListeners } from "../common/formHandler"

$(document).ready(() => {
  console.log('document is ready')
  let viewWidth = window.innerWidth
  if (viewWidth > 1108) {
    $('#KeyFactsItem14 h2').html('Разработчиков <br/>в оперативном управлении')
  }
})


Popup.setUpProductsPopup()
Popup.setUpSendFormPopup()

Tabbar.setUp()

setUpSwipers()

createFormEventListeners();