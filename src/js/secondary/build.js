function setProductBackground() {
  const video = document.getElementById('ProductVideo');
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;

  console.log('seeked');
  context.drawImage(video, 0, 0, canvas.width, canvas.height);

  const imageData = context.getImageData(canvas.width - 10, Math.floor(canvas.height / 2), 1, 1);
  const pixelData = imageData.data;

  const red = pixelData[0];
  const green = pixelData[1];
  const blue = pixelData[2];

  const hexColor = rgbToHex(red, green, blue);
  console.log(hexColor);

  // $('.product .product__wrapper').css('background', hexColor);
  $('.product').animate({ opacity: 1 }, 300);

  $('.product').addClass(isDarkColor(red, green, blue) ? 'product--dark-theme' : 'product--light-theme');
}

//@ts-ignore
function rgbToHex(r, g, b) {
  //@ts-ignore
  const componentToHex = (c) => {
    const hex = c.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  };

  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function isDarkColor(red, green, blue) {
  var brightness = (red * 299 + green * 587 + blue * 114) / 1000;
  return brightness <= 127;
}



console.log('secondary')



function getSearchParamValue(param) {
  const queryString = window.location.search
  const urlParams = new URLSearchParams(queryString)
  return urlParams.get(param)
}

function setUpSecondaryProductPage() {
  // let productId = getSearchParamValue("product")

  // let currentProduct = mainProducts.find((prod, index) => {
  //   return prod.id == productId
  // }) || mainProducts[0]

  // $('.product .product__wrapper').css('background', currentProduct.content.bg);

  // $("#section-breadcrumb .breadcrumb__item--active").html(currentProduct.title)

  // $('.product .product__title').html(currentProduct.title)
  // $('.product .product__subtitle').html(currentProduct.subtitle)

  // $('.product .product__video').html(`
  //   <source class="product__video" src="${currentProduct.video}" type="video/mp4">
  // `)

  // $('.product .product__right-header-title h1')
  // .html(currentProduct.content?.headerTitle || '')

  // $('.product .product__right-header-subtitle p')
  // .html(currentProduct.content?.headerSubtitle || '')

  // $('.product .product__right-content-text')
  // .html(currentProduct.content?.textHTML || '')

  // if (currentProduct.content.dropdown)
  setUpProductDropdown()

  const videoLoaded = $.Deferred();

  const video = $('#ProductVideo')[0];
  $(video).on('loadeddata', () => {
    videoLoaded.resolve();
  });

  $.when(videoLoaded).done(() => {
    console.log('Video loaded');
    setProductBackground()
  });
}

function setUpProductDropdown() {
  // let itemsHTML = ''
  // for(let i = 0; i < dropdown!.length; i++) {
  //   let contentItems = ''
  //   let elements = dropdown![i].elements
  //   for(let j = 0; j < elements.length; j++) {
  //     contentItems += `
  //       <div class="dropdown__content-item">
  //         <h4>${elements[j].heading}</h4>
  //         <p>${elements[j].text}</p>
  //       </div>
  //     `
  //   }
  //   itemsHTML += `
  //     <div class="dropdown__item item--${i}"data-no="${i}">
  //       <div class="dropdown__item-heading">
  //         <span class="dropdown__item-heading-title">${dropdown![i].title}</span>
  //         <span class="material-symbols-rounded dropdown__item-heading-icon">expand_more</span>
  //       </div>
  //       <div class="dropdown__content scroll-bar__container">
  //         ${contentItems}
  //       </div>
  //     </div>
  //   `
  // } 
  // $('.product__dropdown').html(itemsHTML)
  $('.product__dropdown .dropdown__item').click((event) => {
    console.log('dropdown click')
    let no = event.currentTarget.getAttribute("data-no")
    let cur = $(`.product__dropdown .dropdown__item.item--${no}`)
    let isActive = cur.hasClass('dropdown__item--active')
    if (isActive) {
      console.log('isActive')
      cur.removeClass('dropdown__item--active')
    } else {
      $(`.product__dropdown .dropdown__item.dropdown__item--active`).removeClass('dropdown__item--active')
      cur.addClass('dropdown__item--active')
    }
  })
}



Popup.setUpProductsPopup()
Popup.setUpSendFormPopup()

Tabbar.setUp()

setUpSecondaryProductPage()

createFormEventListeners()