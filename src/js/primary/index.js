import "../../styles/primary/primary.scss"

import $ from "jquery"

import { setUpAdvantagesSVGs } from "./advantages"
import { setUpAppAreaSwiper } from "./swipers"

import souznikVideo from "../../assets/videos/souznik.mp4"
import { Popup } from "../common/popups"
import { createFormEventListeners } from "../common/formHandler"
import { Tabbar } from "../common/tabbar"

function setUpVideo() {
  $('.souznik-video__video').html(`
    <source src="${souznikVideo}" type="video/mp4">
  `)
}

function openFullPageVideo() {
  let video = document.querySelector('.souznik-video__video')
  if (video.requestFullscreen) {
    video.requestFullscreen();
  }


  function isVideoFullScreen(el) {
    return document.fullscreenElement == el
  }
  
  // Example usage
  const videoElement = document.getElementById('myVideo');
  const isFullScreen = isVideoFullScreen(video);
  if (isFullScreen) {
    //@ts-ignore
    video.setAttribute('controls', true)
  } else {
    //@ts-ignore
    video.removeAttribute('controls')
  }
}

$('.souznik-video__wrapper').click(() => {
  openFullPageVideo()
})

Popup.setUpProductsPopup()
Popup.setUpSendFormPopup()

Tabbar.setUp()

setUpVideo()
setUpAdvantagesSVGs()
setUpAppAreaSwiper()

createFormEventListeners();