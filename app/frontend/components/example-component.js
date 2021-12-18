import { LitElement, html, css } from 'lit'

import { normalize } from './mixins/normalize.js'

/**
 * A simple form group component
 *
 * @slot - Default slot
 */
export class ExampleComponent extends LitElement {
  static get styles () {
    return css`
      ${normalize}

      :host {
        display: block;
      }
    `
  }

  static get properties () {
    return {
      label: { reflect: true, type: String },
      size: {
        reflect: true,
        type: String,
      }
    }
  }

  render () {
    return html`
      <slot></slot>
    `
  }
}

window.customElements.define('example-component', ExampleComponent)
