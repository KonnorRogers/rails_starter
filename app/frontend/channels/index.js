// Load all the channels within this directory and all subdirectories.
// Channel files must be named *_channel.js.

// Needs to be declared to a variable. This is for if youre loading multiple channels.
import SessionsChannel from "./sessions_channel.js"
import UsersChannel from "./users_channel.js"

new SessionsChannel();
new UsersChannel();
