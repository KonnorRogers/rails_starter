import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path.js'

import alert from '@shoelace-style/shoelace/dist/components/alert/alert.js'
import button from '@shoelace-style/shoelace/dist/components/button/button.js'
import buttonGroup from '@shoelace-style/shoelace/dist/components/button-group/button-group.js'
import checkbox from '@shoelace-style/shoelace/dist/components/checkbox/checkbox.js'
import card from '@shoelace-style/shoelace/dist/components/card/card.js'
import dialog from '@shoelace-style/shoelace/dist/components/dialog/dialog.js'
import dropdown from '@shoelace-style/shoelace/dist/components/dropdown/dropdown.js'
import icon from '@shoelace-style/shoelace/dist/components/icon/icon.js'
import iconButton from '@shoelace-style/shoelace/dist/components/icon-button/icon-button.js'
import input from '@shoelace-style/shoelace/dist/components/input/input.js'
import menu from '@shoelace-style/shoelace/dist/components/menu/menu.js'
import tag from '@shoelace-style/shoelace/dist/components/tag/tag.js'
import visuallyHidden from '@shoelace-style/shoelace/dist/components/visually-hidden/visually-hidden.js'
setBasePath('/shoelace');

export function shoelacePromises () {
  const components = [
    alert,
    button,
    buttonGroup,
    checkbox,
    card,
    dialog,
    dropdown,
    icon,
    iconButton,
    input,
    menu,
    tag,
    visuallyHidden
  ];

  return components.map(component => customElements.whenDefined(new component().localName));
}
