import Rails from "mrujs"
import { Shoelace } from "mrujs/plugins"
import * as ActiveStorage from "@rails/activestorage"
import "@hotwired/turbo"
import "./channels"
import "./controllers"
import "./components"
import "./stylesheets/application.css"

// Import all images

// Vite
// const images = import.meta.globEager('../images/**/*');

// ESBuild
// import * as images from "./images/**/*.*"

// Parcel
// import * as images from '../images/**/*.*'

// if (images != null) {
 // circumvent treeshaking
// }


ActiveStorage.start()

Rails.start({
  plugins: [
    Shoelace(),
  ]
})
