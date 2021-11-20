import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "../channels"
import "../controllers"
import "../stylesheets/application.css"

if (window.Rails == null) {
  Rails.start()
}

Turbolinks.start()
ActiveStorage.start()
