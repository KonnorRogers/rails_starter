import { Controller } from "stimulus"

/**
 * Devise does not re-render full page HTML responses when logging in. This is a cheap, easy way
 * to get around it without re-implementing logic.
 *
 * @example
 *
 *  <form data-controller="devise">
 *    <div data-devise-target="alert" hidden></div>
 *  </form>
 */
export default class DeviseController extends Controller {
  static targets = ["alert"]
  connect () {
    this.originalHTML = this.alertTarget.innerHTML
    this.element.addEventListener("ajax:error", this.showAlert)
  }

  disconnect () {
    this.element.removeEventListener("ajax:error", this.showAlert)
  }

  showAlert = (event) => {
    event.preventDefault()
    event.detail.fetchResponse.text().then((text) => {
      this.alertTarget.innerHTML = this.originalHTML + text
      this.alertTarget.removeAttribute("hidden")
      this.element.querySelectorAll("[loading]").forEach((el) => el.removeAttribute("loading"))
    })
  }
}

