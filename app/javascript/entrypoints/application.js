import Rails from "mrujs"
import { ActiveStorage, Shoelace } from "mrujs/plugins"
import "@hotwired/turbo"
import "../channels"
import "../controllers"
import "../components"

import "../stylesheets/application.css"


// Import all images
const images = import.meta.globEager('../images/**/*');

Rails.start({
  plugins: [
    Shoelace(),
    ActiveStorage()
  ]
})
