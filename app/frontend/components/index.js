// import * as appContainer from "./app-container"
// import * as appFormGroup from "./app-form-group"
// import * as appLink from "./app-link"
import { shoelacePromises } from "./shoelace"
import "konnors-pc"

function appPromises() {
  return [
    appContainer,
    appFormGroup,
    appLink
  ].map(component => customElements.whenDefined(component.name));
}

export function componentPromises () {
  return [].concat(shoelacePromises)
}
