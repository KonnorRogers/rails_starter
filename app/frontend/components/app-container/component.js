import { LitElement, html, css } from 'lit'
import { classMap } from 'lit/directives/class-map.js'
import { normalize } from '../helpers/normalize.js'

/**
 * A simple form group component
 *
 * @slot - Default slot
 *
 * @csspart base - Default slot wrapper
 */
export class AppContainer extends LitElement {
  static get styles () {
    return css`
      ${normalize}

      :host {
        --min-width: 0px;
        --relative-width: 75%;
        --max-width: 1536px;
        --width: clamp(var(--min-width), var(--relative-width), var(--max-width));
        display: block;
        margin: 0 auto;
        width: var(--width);
      }

      app-container--x-small {
        --max-width: 400px;
      }

      app-container--small {
        --max-width: 640px;
      }

      app-container--medium {
        --max-width: 768px;
      }

      app-container--large {
        --max-width: 1024px;
      }

      app-container--x-large {
        --max-width: 1280px;
      }
    `
  }

  static get properties () {
    return {
      size: { reflect: true, type: String }
    }
  }

  render () {
    return html`
      <div class=${classMap({
        'app-container': true,
        'app-container--x-small': this.size === 'x-small',
        'app-container--small': this.size === 'small',
        'app-container--medium': this.size === 'medium',
        'app-container--large': this.size === 'large',
        'app-container--x-large': this.size === 'x-large'
      })} part="base">
        <slot></slot>
      </div>
    `
  }
}
