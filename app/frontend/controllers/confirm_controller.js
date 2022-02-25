import { Controller } from "stimulus"

export default class ConfirmController extends Controller {
  static get targets() {
    return ["dialog"]
  }

  connect () {
    this.shouldShow = true
  }

  show (event) {
    if (!this.shouldShow) {
      return
    }

    this.trigger = event.currentTarget
    this.dialogTarget.show()
  }

  hide () {
    this.dialogTarget.hide()
  }

  confirm () {
    this.dialogTarget.hide()
    this.trigger.click()
  }
}

