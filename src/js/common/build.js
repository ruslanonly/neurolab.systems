const prefixNumber = (str) => {
  if (str === "7") {
    return "7 ";
  }
  if (str === "8") {
    return "8 ";
  }
  if (str === "9") {
    return "7 9";
  }
  return "7 ";
};

function setUpApplyFormPhoneInput(selector) {
  $(selector).on("input", () => {
    const inputValue = $(selector).val() || '';
  
    let value = inputValue.replace(/\D+/g, '');
  
    const numberLength = 11;
  
    let result;
    if (inputValue.includes("+8") || inputValue[0] === "8") {
      result = "";
    } else {
      result = "+";
    }
  
    for (let i = 0; i < value.length && i < numberLength; i++) {
      switch (i) {
        case 0:
          result += prefixNumber(value[i]);
          continue;
        case 4:
          result += " ";
          break;
        case 7:
          result += " ";
          break;
        case 9:
          result += " ";
          break;
        default:
          break;
      }
      result += value[i];
    }
  
    $(selector).val(result)
  })
}


function isEmail(email) {
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return emailPattern.test(email);
}

function handleForm(wrapperSelector) {
  setUpApplyFormPhoneInput(`${wrapperSelector} .apply-form__input.input--phone`)
  $(`${wrapperSelector} .apply-form__form .button`).click(() => {
    let formState = {
      name: $(`${wrapperSelector} .apply-form__input.input--name`).val(),
      email: $(`${wrapperSelector} .apply-form__input.input--email`).val(),
      phone: $(`${wrapperSelector} .apply-form__input.input--phone`).val(),
      taskText: $(`${wrapperSelector} .apply-form__input.input--task`).val(),
      checkbox: $(`${wrapperSelector} .apply-form__input.input--checkbox`).is(":checked")
    }

    let hasError = false
    let phoneNumber = $(`${wrapperSelector} .input--phone`).val();
    phoneNumber = phoneNumber.replace(/\s/g, '').replace('+', '')
    if (phoneNumber.length < 11) {
      $(`${wrapperSelector} .phone-input-wrapper .input-error-wrapper__error`).html('Это поле нужно заполнить')
      $(`${wrapperSelector} .phone-input-wrapper`).addClass('input-error-wrapper--has-error')
      hasError = true
    } else {
      $(`${wrapperSelector} .phone-input-wrapper`).removeClass('input-error-wrapper--has-error')
    }
    if (!isEmail($(`${wrapperSelector} .input--email`).val())) {
      $(`${wrapperSelector} .email-input-wrapper .input-error-wrapper__error`).html('Это поле нужно заполнить')
      $(`${wrapperSelector} .email-input-wrapper`).addClass('input-error-wrapper--has-error')
      hasError = true
    } else {
      $(`${wrapperSelector} .email-input-wrapper`).removeClass('input-error-wrapper--has-error')
    }

    if (!$(`${wrapperSelector} .input--name`).val()) {
      $(`${wrapperSelector} .name-input-wrapper .input-error-wrapper__error`).html('Это поле нужно заполнить')
      $(`${wrapperSelector} .name-input-wrapper`).addClass('input-error-wrapper--has-error')
      hasError = true
    } else {
      $(`${wrapperSelector} .name-input-wrapper`).removeClass('input-error-wrapper--has-error')
    }

    if (hasError) return

    console.log(formState)
    // логика отправки запросы
    const isSuccess = true
    let message = "success"
    if (!isSuccess) {
      message = "error"
    }

    $(`${wrapperSelector} .apply-form__wrapper-left`).removeClass('apply-form__wrapper-left-form')
    $(`${wrapperSelector} .apply-form__wrapper-left`).addClass(`apply-form__wrapper-left apply-form__wrapper-left-${message}`)

    if (isSuccess) {
      $(`${wrapperSelector} input`).val('')
    }

    $(document).on('click', `${wrapperSelector} .apply-form__message .button`, () => {
      $(`${wrapperSelector} .apply-form__wrapper-left`).addClass('apply-form__wrapper-left-form')
      $(`${wrapperSelector} .apply-form__wrapper-left`).removeClass(`apply-form__wrapper-left-${message}`)

      if (wrapperSelector == "#SendFormPopup" && isSuccess) {
        $(wrapperSelector).fadeOut()
      }
    })
  })
}

function createFormEventListeners() {
  let ids = ["#MainApplyForm", "#SendFormPopup"]
  for(let i = 0; i < ids.length; i++) {
    handleForm(ids[i])
  }
}

















function handleDocumentClick(event) {
  let area = $('#ProductsPopupWrapper')
  let button = $('#HeaderProductsButton')
  //@ts-ignore
  if (!button.is(event.target) && button.has(event.target).length === 0 && !area.is(event.target) && area.has(event.target).length === 0) {
    $('#HeaderProductsButton').removeClass('header__menu-item--active')
    $('#ProductsPopupWrapper .products-popup').fadeOut(100);
    $(document).off("click", handleDocumentClick);
  }
}

function setUpProductsPopup() {
  // $('#ProductsPopupWrapper').html(getProductsPopupHTML())
  $('.products-popup .products-popup__close-button').click(() => {
    $('#HeaderProductsButton').removeClass('header__menu-item--active')
    $('#ProductsPopupWrapper .products-popup').fadeOut(100);

    $(document).off("click", handleDocumentClick);
  })
  $('#HeaderProductsButton').click(() => {
    let isActive = $('#HeaderProductsButton').hasClass('header__menu-item--active')
    if (isActive) {
      $('#HeaderProductsButton').removeClass('header__menu-item--active')
      $('#ProductsPopupWrapper .products-popup').fadeOut(100);

      $(document).off("click", handleDocumentClick);
    } else {
      let x = $('#HeaderProductsButton').offset()?.left
      $('#ProductsPopupWrapper .products-popup').css("left", x || 300)
      $('#HeaderProductsButton').addClass('header__menu-item--active')
      $('#ProductsPopupWrapper .products-popup')
      .fadeIn(100);

      $(document).on("click", handleDocumentClick);
    }
  })
}

function setUpSendFormPopup() {
  let popupWrapper = $('#SendFormPopupWrapper')
  // popupWrapper.html(getSendFormPopupHTML())
  let popup = $('#SendFormPopup')
  popup.hide();

  $('#HeaderSendButton').click((e) => {
    popup.fadeIn();
  });
  $('#TabbarSendButton').click((e) => {
    popup.fadeIn();
  });

  $('#SendFormPopup .apply-form__close-button').click(() => {
    popup.fadeOut();
  })
}

var Popup = {
  setUpProductsPopup,
  setUpSendFormPopup
}









function setUp() {
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
}

var Tabbar = {
  setUp
}