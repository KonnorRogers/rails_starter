// Load all the controllers within this directory and all subdirectories.
// Controller files must be named *_controller.js.

import StimulusReflex from 'stimulus_reflex'
import consumer from '../channels/consumer'
import CableReady from 'cable_ready'

import { Application } from 'stimulus'
import { ApplicationController } from './application_controller'
import { HelloController } from './hello_controller'
import { ExampleController } from './example_controller'

const application = Application.start()
application.consumer = consumer

application.register('hello', HelloController)
application.register('example', ExampleController)

StimulusReflex.initialize(application, { controller: ApplicationController, isolate: true })
StimulusReflex.debug = process.env.NODE_ENV === "development"
CableReady.initialize({ consumer })
