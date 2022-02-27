import { Controller } from "stimulus"

/**
 * Devise does not re-render full page HTML responses when logging in. This is a cheap, easy way
 * to get around it without re-implementing logic.
 *
 * @example
 *
 *  <form data-controller="devise">
 *     <%= render FlashComponent.new(
 *       variant: "warning", message: "", closable: false,
 *       html_attributes: { "hidden" => true, "data-devise-target" => "alert" }
 *     ) %>
 *  </form>
 */
export default class  extends Controller {
  static get targets() {
    return ["alert"]
  }

  initialize () {
    this.showAlert = this._showAlert.bind(this)
  }

  connect () {
    this.originalHTML = this.alertTarget.innerHTML
    this.element.addEventListener("ajax:error", this.showAlert)
  }

  disconnect () {
    this.element.removeEventListener("ajax:error", this.showAlert)
  }

  _showAlert (event) {
    event.preventDefault()
    event.detail.fetchResponse.text().then((text) => {
      this.alertTarget.innerHTML = this.originalHTML + text
      this.alertTarget.removeAttribute("hidden")
    })
  }
}

