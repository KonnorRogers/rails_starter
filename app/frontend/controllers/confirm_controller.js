import { Controller } from "@hotwired/stimulus"

export default class ConfirmController extends Controller {
  connect () {
    this.element.addEventListener("click", this.confirm, { capture: true })
  }

  confirm = (event) => {
    this.currentTarget = event.currentTarget

    if (this.currentTarget.hasAttribute("has-been-confirmed")) {
      return
    }

    event.preventDefault()
    event.stopImmediatePropagation()

    return new Promise((resolve, _reject) => {
      const handleConfirm = (confirmEvent) => {
        const answer = confirmEvent.answer

        if (answer) {
          this.currentTarget.setAttribute("has-been-confirmed", "")
          this.element[this.action]()
        }

        document.removeEventListener("confirm", handleConfirm)
        this.currentTarget.removeAttribute("has-been-confirmed")
        this.currentTarget = undefined
        this.dialog.hide()
        resolve(answer)
      }

      const dialog = this.dialog
      dialog.show()

      document.addEventListener("confirm", handleConfirm)
    })
  }

  show () {
    this.dialog.show()
  }

  hide () {
    this.dialog.hide()
  }

  get dialog () {
    return document.getElementById(this.element.getAttribute("data-dialog-id") || "dialog")
  }

  get action () {
    return this.element.dataset.dialogAction || "click"
  }
}

