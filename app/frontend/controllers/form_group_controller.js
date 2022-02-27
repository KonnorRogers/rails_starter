import { Controller } from "stimulus"

export default class FormGroupController extends Controller {
  initialize () {
  }
  connect () {

  }
  disconnect () {

  }

  clearError () {
    // this.element.classList.remove("form-group-error")
  }

  get events () {
    return [
      "sl-focus",
      "focus"
    ]
  }
}

