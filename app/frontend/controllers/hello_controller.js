// Visit The Stimulus Handbook for more details
// https://stimulusjs.org/handbook/introduction
//
// This example controller works with specially annotated HTML like:
//
// <div data-controller="hello">
//   <h1 data-target="hello.output"></h1>
// </div>

import { Controller } from "stimulus"

export class HelloController extends Controller {
  static targets = [ "output" ]

  static get name () {
    return "hello"
  }

  connect() {
    this.outputTarget.textContent = 'Hello, Stimulus!'
  }
}
