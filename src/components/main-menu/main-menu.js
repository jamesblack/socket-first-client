import { observer } from 'mobx-react'
import { authStore } from '../../stores'

import React from 'react'

@observer class MainMenu extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        Welcome {authStore.session.username}
      </div>
    )
  }
}

export default MainMenu
