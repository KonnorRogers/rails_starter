import { Controller } from "stimulus"

export default class ConfirmController extends Controller {
  static get targets() {
    return ["dialog"]
  }

  connect () {
    this.shouldShow = true
  }

  show (event) {
    if (event.target !== this.triggerTarget) return
    if (!this.shouldShow) {
      return
    }

    event.preventDefault()
    event.stopPropagation()
    event.stopImmediatePropagation()
    this.trigger = event.currentTarget
    this.dialogTarget.show()
  }

  hide () {
    this.dialogTarget.hide()
  }

  confirm () {
    this.dialogTarget.hide()
    this.element.requestSubmit()
  }
}

