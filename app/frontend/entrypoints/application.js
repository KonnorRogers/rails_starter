import Rails from "mrujs"
import { Shoelace } from "mrujs/plugins"
import * as ActiveStorage from "@rails/activestorage"
import "@hotwired/turbo"
import "../channels"
import "../controllers"
import "../components"
import "../stylesheets/application.css"


// Import all images
const images = import.meta.globEager('../images/**/*');

ActiveStorage.start()

Rails.start({
  plugins: [
    Shoelace(),
  ]
})
