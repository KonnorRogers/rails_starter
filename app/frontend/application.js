import Rails from "mrujs"
import { Shoelace } from "mrujs/plugins"
import * as ActiveStorage from "@rails/activestorage"
import "@hotwired/turbo"
import "./channels"
import "./controllers"
import "./components"

// Import all images

// Vite
// const images = import.meta.globEager('../images/**/*');

// ESBuild
// import "../images/**/*.*"
import image from "./images/annotation.svg"
console.log(image)

// Parcel


ActiveStorage.start()

Rails.start({
  plugins: [
    Shoelace(),
  ]
})
