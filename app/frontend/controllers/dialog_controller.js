import { Controller } from "@hotwired/stimulus"

export default class DialogController extends Controller {
  static targets = ["dialog"]

  get confirmedAttr () {
    return "needs-confirmation"
  }

  show (event) {
    if (!event.currentTarget.hasAttribute(this.confirmedAttr)) return

    this.trigger = event.currentTarget
    event.preventDefault()
    event.stopImmediatePropagation()
    this.dialogTarget.show()
  }

  hide () {
    this.dialogTarget.hide()
  }

  dismiss () {
    this.hide()
  }

  confirm () {
    this.trigger.removeAttribute(this.confirmedAttr)
    this.trigger.click()
    this.hide()

    this.trigger.setAttribute(this.confirmedAttr, "")
    this.trigger = undefined
  }
}

