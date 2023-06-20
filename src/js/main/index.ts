import "../../styles/main/main.scss"

import $ from "jquery"

import { setUpApplyFormPhoneInput } from "./phone"
import { setUpSwipers } from "./swipers"
import { Popup, getProductsPopupHTML } from "../common/popups"
import { Tabbar } from "./tabbar"

Popup.setUpProductsPopup()

Tabbar.setUp()

setUpSwipers()
setUpApplyFormPhoneInput()