import $ from "jquery"
import { setUpApplyFormPhoneInput } from "../main/phone"

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

    console.log(formState)
    // логика отправки запросы
    const isSuccess = true
    let message = "success"
    if (!isSuccess) {
      message = "error"
    }

    $(`${wrapperSelector} .apply-form__wrapper-left`).removeClass('apply-form__wrapper-left-form')
    $(`${wrapperSelector} .apply-form__wrapper-left`).addClass(`apply-form__wrapper-left apply-form__wrapper-left-${message}`)

    
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