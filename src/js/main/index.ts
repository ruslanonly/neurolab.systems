import "../../styles/main/main.scss"

import $ from "jquery"

import { setUpSwipers } from "./swipers"
import { Popup } from "../common/popups"
import { Tabbar } from "../common/tabbar"
import { createFormEventListeners } from "../common/formHandler"

Popup.setUpProductsPopup()
Popup.setUpSendFormPopup()

Tabbar.setUp()

setUpSwipers()

createFormEventListeners();