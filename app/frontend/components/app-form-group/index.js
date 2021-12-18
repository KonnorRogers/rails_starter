import { LitElement, html, css } from 'lit'
import { classMap } from 'lit/directives/class-map.js'

import { normalize } from '../helpers/normalize.js'

/**
 * A simple form group component
 *
 * @slot - Default slot
 */
export class AppFormGroup extends LitElement {
  static get styles () {
    return css`
      ${normalize}

      :host {
        display: block;
        width: 100%;
        margin: auto;
      }

      .form-group {
        width: 100%;
        margin: 0.5em 0;
      }

      .form-group--small {
        padding: 0.5em;
      }

      .form-group--medium {
        padding: 0.75em 0.5em;
      }

      .form-group--large {
        padding: 1.25em 0.5em;
      }
    `
  }

  static get properties () {
    return {
      size: { reflect: true, type: String }
    }
  }

  constructor () {
    super()
    this.size = 'medium'
  }

  render () {
    return html`
      <div class=${classMap({
        "form-group": true,
        "form-group--small": this.size === "small",
        "form-group--medium": this.size === "medium",
        "form-group--large": this.size === "large"
      })} part="base">
        <slot></slot>
      </div>
    `
  }
}

window.customElements.define('app-form-group', AppFormGroup)
