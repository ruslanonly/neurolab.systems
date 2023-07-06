import "../../styles/main/main.scss"

import $ from "jquery"

import { setUpSwipers } from "./swipers"
import { Popup } from "../common/popups"
import { Tabbar } from "../common/tabbar"
import { createFormEventListeners } from "../common/formHandler"

let viewWidth = window.innerWidth
console.log(viewWidth, viewWidth > 1108 ? 3 : 1)
if (viewWidth > 1108) {
  $('#KeyFactsItem14 h2').html('Разработчиков <br/>в оперативном управлении')
}

Popup.setUpProductsPopup()
Popup.setUpSendFormPopup()

Tabbar.setUp()

setUpSwipers()

createFormEventListeners();