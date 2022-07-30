import { Controller } from "@hotwired/stimulus"

class ConfirmEvent extends Event {
  constructor(answer, options = {}) {
    ["bubbles", "composable", "cancelable"].forEach((str) => {
      const option = options[str]

      if (option == null) {
        options[str] = true
      }
    })

    super("confirm", options)
    this.answer = answer
  }
}

export default class extends Controller {
  accept () {
    this.element.dispatchEvent(new ConfirmEvent(true))
  }

  decline () {
    this.element.dispatchEvent(new ConfirmEvent(false))
  }
}
