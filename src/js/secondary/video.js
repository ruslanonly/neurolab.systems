import $ from 'jquery'

export function setProductBackground() {
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