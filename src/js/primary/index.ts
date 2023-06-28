import "../../styles/primary/primary.scss"

import $ from "jquery"

import { setUpAdvantagesSVGs } from "./advantages"
import { setUpAppAreaSwiper } from "./swipers"

import souznikVideo from "../../assets/videos/souznik.mp4"
import { Popup } from "../common/popups"

function setUpVideo() {
  $('.souznik-video__video').html(`
    <source src="${souznikVideo}" type="video/mp4">
  `)
}

Popup.setUpProductsPopup()
setUpVideo()
setUpAdvantagesSVGs()
setUpAppAreaSwiper()