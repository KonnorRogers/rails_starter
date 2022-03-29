import CableReady from "cable_ready"
import consumer from "./consumer"

export default class ApplicationChannel {
  constructor(channel) {
    consumer.subscriptions.create(channel, this)
  }

  connected () {
    // Called when the subscription is ready for use on the server
  }

  disconnect () {
    // Called when the subscription has been terminated by the server
  }

  received(data) {
    // Called when there's incoming data on the websocket for this channel
    if (data == null) return
    if (data.cableReady) CableReady.perform(operations);
  }
}
