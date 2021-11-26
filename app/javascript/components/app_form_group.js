import { LitElement, html, css } from 'lit'

import { normalize } from './mixins/normalize.js'

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
        margin: 1em auto;
        padding: var(--padding);
      }
    `
  }

  static get properties () {
    return {
      label: { reflect: true, type: String },
      size: {
        reflect: true,
        type: String,
        hasChanged: sizeHasChanged
      }
    }
  }

  constructor () {
    super()
    this.label = ''
    this.size = 'medium'
  }

  connectedCallback () {
    super.connectedCallback()
  }

  render () {
    return html`
      <slot></slot>
    `
  }
}

function sizeHasChanged (_oldVal, newVal) {
  switch (newVal) {
    case 'small':
      this.style.setProperty('--padding', '0.5em')
      break
    case 'medium':
      this.style.setProperty('--padding', '1em 0.5em')
      break
    case 'large':
      this.style.setProperty('--padding', '1.25em 0.5em')
      break
  }
}

window.customElements.define('app-form-group', AppFormGroup)
