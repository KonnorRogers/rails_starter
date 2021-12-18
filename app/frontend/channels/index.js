// Load all the channels within this directory and all subdirectories.
// Channel files must be named *_channel.js.

import { ApplicationChannel } from "./application_channel"

new ApplicationChannel("ExampleChannel")

// Needs to be declared to a variable. This is for if youre loading multiple channels.
// const channels = import.meta.globEager('./**/*_channel.js');
