import CableReady from 'cable_ready'
import ApplicationChannel from "./application_channel.js"
import consumer from './consumer'

export default class SessionsChannel extends ApplicationChannel {
  constructor () {
    super("SessionsChannel")
    this.reconnecting = false
  }

  connected () {
    this.reconnecting = false
    document.addEventListener('reconnect', this.reconnect)
  }

  received (data) {
    if (data.cableReady) {
      CableReady.perform(data.operations, {
        emitMissingElementWarnings: false
      })
    }
  }

  disconnected () {
    document.removeEventListener('reconnect', this.reconnect)
    if (this.reconnecting) {
      setTimeout(consumer.connect, 25)
    }
  }

  reconnect () {
    this.reconnecting = true
    consumer.disconnect()
  }
}
