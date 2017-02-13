import { observable, computed, action } from 'mobx'
import { routingStore } from './'

class AuthStore {
  @observable session = {}
  @observable error = ''


  constructor(socket) {
    this.socket = socket
    this.socket.on('loginSuccess', this.onLoginSuccess)
    this.socket.on('loginFailure', this.onLoginFailure)
    this.socket.on('disconnect', this.onDisconnect)
  }

  @action onDisconnect = () => {
    this.session = {}
    this.error = ''
    routingStore.push('/login')
  }

  @action onLoginSuccess = (data) => {
    this.session = data
    this.error = ''
    routingStore.push('/mainmenu')
  }

  @action onLoginFailure = (data) => {
    this.error = data.error
  }

  @action attemptLogin = (username, password) => {
    console.log('attempting login with', username, password)
    this.socket.emit('attemptLogin', { username, password })
    this.error = ''
  }
}

export default AuthStore
