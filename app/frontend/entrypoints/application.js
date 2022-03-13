import * as ActiveStorage from "@rails/activestorage"
import Rails from "mrujs"
import "@hotwired/turbo"
import "../channels"
import "../controllers"
import { asPromise, preventDoubleClick } from "../src"
import { componentPromises } from "../components"

;(async function () {
  // Import all images
  const images = import.meta.globEager('../images/**/*');

  // wait for shoelace components to be defined.
  await Promise.allSettled([
    // ...shoelacePromises,
    componentPromises(),
    asPromise(preventDoubleClick),
    asPromise(Rails.start.bind(Rails)),
    asPromise(ActiveStorage.start),
  ]);
})();


// Uncomment the belown code to fix the errors found on /signup
// It works by resetting the shoelace components *BEFORE* morphdom fires.
// document.addEventListener("ajax:error", resetShoelaceComponents)

// function resetShoelaceComponents () {
//   document.querySelectorAll("sl-card, sl-button, sl-input").forEach((el) => {
//     el.outerHTML = ""
//   })
// }
