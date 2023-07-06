import $ from "jquery"
import { setUpApplyFormPhoneInput } from "../main/phone"

function isEmail(email: string) {
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return emailPattern.test(email);
}

type FormState = {
  name: string,
  email: string,
  phone: string,
  taskText: string,
  checkbox: boolean
}

function handleForm(wrapperSelector: string) {
  setUpApplyFormPhoneInput(`${wrapperSelector} .apply-form__input.input--phone`)
  $(`${wrapperSelector} .apply-form__form .button`).click(() => {
    let formState: FormState = {
      name: $(`${wrapperSelector} .apply-form__input.input--name`).val() as string,
      email: $(`${wrapperSelector} .apply-form__input.input--email`).val() as string,
      phone: $(`${wrapperSelector} .apply-form__input.input--phone`).val() as string,
      taskText: $(`${wrapperSelector} .apply-form__input.input--task`).val() as string,
      checkbox: $(`${wrapperSelector} .apply-form__input.input--checkbox`).is(":checked")
    }

    let hasError = false
    let phoneNumber = $(`${wrapperSelector} .input--phone`).val() as string;
    phoneNumber = phoneNumber.replace(/\s/g, '').replace('+', '')
    if (phoneNumber.length < 11) {
      $(`${wrapperSelector} .phone-input-wrapper .input-error-wrapper__error`).html('Это поле нужно заполнить')
      $(`${wrapperSelector} .phone-input-wrapper`).addClass('input-error-wrapper--has-error')
      hasError = true
    } else {
      $(`${wrapperSelector} .phone-input-wrapper`).removeClass('input-error-wrapper--has-error')
    }
    if (!isEmail($(`${wrapperSelector} .input--email`).val() as string)) {
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

export function createFormEventListeners() {
  let ids = ["#MainApplyForm", "#SendFormPopup"]
  for(let i = 0; i < ids.length; i++) {
    handleForm(ids[i])
  }
}