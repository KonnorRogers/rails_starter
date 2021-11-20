// Load all the channels within this directory and all subdirectories.
// Channel files must be named *_channel.js.

// Needs to be declared to a variable
const channels = import.meta.globEager('./**/*_channel.js');
