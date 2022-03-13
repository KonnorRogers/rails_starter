import { AppContainer } from './component'

const name = 'app-container'
window.customElements.define(name, AppContainer)

export {
  name,
  AppContainer as class
}
