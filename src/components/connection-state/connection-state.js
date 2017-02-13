import React from 'react'
import { pipe, toUpper, adjust, join } from 'ramda'

import { observer } from 'mobx-react'
import { socketStore } from '../../stores'

import styles from './connection-state.css'

function ConnectionState() {
  const status = socketStore.connected ? 'connected' : 'disconnected'
  return (
    <div className={styles[status]}>
      {
        pipe(
          adjust(toUpper, 0),
          join('')
        )(status)
      }
    </div>
  )
}

export default observer(ConnectionState)
