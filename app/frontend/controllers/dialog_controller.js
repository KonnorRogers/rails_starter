import { Controller } from "stimulus"

export default class DialogController extends Controller {
  static targets = ["dialog"]

  get confirmedAttr () {
    return "data-confirmed"
  }

  show (event) {
    if (event.currentTarget.getAttribute(this.confirmedAttr) === "false") {
      this.trigger = event.currentTarget
      event.preventDefault()
      event.stopImmediatePropagation()
      console.log(this.trigger)
      this.dialogTarget.show()
    }
  }

  hide () {
    this.dialogTarget.hide()
  }

  dismiss () {
    this.hide()
  }

  confirm () {
    this.trigger.setAttribute(this.confirmedAttr, "true")
    this.trigger.click()
    this.hide()

    setTimeout(() => this.afterConfirm())
  }

  afterConfirm () {
    this.trigger.setAttribute(this.confirmedAttr, "false")
    this.trigger = undefined
  }
}

