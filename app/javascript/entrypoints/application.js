import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "../channels"
import "../controllers"
import "./application.css"

Rails.start()
Turbolinks.start()
ActiveStorage.start()
