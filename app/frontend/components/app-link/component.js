import { LitElement, html } from 'lit'
import { ifDefined } from 'lit/directives/if-defined.js'
import { classMap } from 'lit/directives/class-map.js'
import { styles } from './styles'

/**
 * A link component
 *
 * @slot - Default slot
 *
 * @csspart base - Link that wraps everything
 */
export class AppLink extends LitElement {
  static get styles () {
    return styles
  }

  static get properties () {
    return {
      href: { reflect: true, type: String },
      rel: { reflect: true, type: String },
      target: { reflect: true, type: String },
      type: { type: String },
      external: { type: Boolean }
    }
  }

  static get types () {
    return [
      'default',
      'primary',
      'success',
      'neutral',
      'warning',
      'danger'
    ]
  }

  constructor () {
    super()
    this.type = 'default'
    this.external = false
  }

  get externalRel () {
    return this.external ? `${this.rel} external nofollow noopener noreferrer` : this.rel
  }

  get externalTarget () {
    return this.external ? '_top' : this.target
  }

  get classes () {
    const klasses = {
      link: true
    }

    this.constructor.types.forEach((linkType) => {
      klasses[`link--${linkType}`] = this.type === linkType
    })

    return klasses
  }

  render () {
    return html`
      <a part="base" href=${this.href} class=${classMap(this.classes)}
         rel=${ifDefined(this.externalRel)} target=${ifDefined(this.externalTarget)}>
        <slot></slot>
      </a>
    `
  }
}
