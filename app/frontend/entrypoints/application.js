// import Rails from "mrujs"
import * as ActiveStorage from "@rails/activestorage"
import "@hotwired/turbo"
import "../channels"
import "../controllers"
import "../components"

// Import all images
const images = import.meta.globEager('../images/**/*');

ActiveStorage.start()
Rails.start()

document.addEventListener("ajax:complete", (event) => {
  if (event.defaultPrevented) return

  // Morphdom doesnt play nicely with these shoelace elements.
  document.querySelectorAll("sl-card, sl-dropdown, sl-checkbox, sl-input, sl-button, sl-button-group").forEach((el) => {
    el.outerHTML = ""
  })
})
