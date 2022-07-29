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
    asPromise(() => componentPromises()),
    asPromise(() => Rails.start()),
    asPromise(() => ActiveStorage.start()),
  ]);
})();


