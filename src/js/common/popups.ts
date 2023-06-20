import $ from "jquery"
import { mainProducts } from "./products";

export function getProductsPopupHTML() {
  let productsPopupHTML = `
    <div class="products-popup">
      <div class="products-popup__wrapper">
  `;

  for(let i = 0; i < mainProducts.length; i++) {
    let p = mainProducts[i];
    productsPopupHTML += `
      <div class="products-popup__product">
        <div class="products-popup__product-top">
          <div class="products-popup__product-image"></div>
          <div class="products-popup__product-title">${p.title}</div>
        </div>
        <div class="products-popup__product-subtitle">${p.subtitle}</div>
      </div>
    `
  }

  productsPopupHTML += `
      </div>
    </div>
  `

  return productsPopupHTML
}