import { observable, action } from 'mobx'

export default class SocketStore {
  @observable connected = false

  constructor(socket) {
    this.socket = socket
    this.socket.on('connect', this.onConnect)
    this.socket.on('disconnect', this.onDisconnect)
  }

  @action onConnect = () => {
    this.connected = true
  }

  @action onDisconnect = () => {
    this.connected = false
  }
}
