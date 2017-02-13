import io from 'socket.io-client'

import { RouterStore } from 'mobx-react-router'
import SocketStore from './socket-store'
import AuthStore from './auth-store'

const socket = io('http://localhost:1337')

export const routingStore = new RouterStore()
export const socketStore = new SocketStore(socket)
export const authStore = new AuthStore(socket)
