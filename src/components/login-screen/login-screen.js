import { observer } from 'mobx-react'
import React from 'react'
import { authStore } from '../../stores'

@observer class LoginScreen extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
    }
  }

  onClick = () => {
    const { username, password } = this.state
    authStore.attemptLogin(username, password)
  }

  onChange = (field) => (event) => {
    this.setState({ [field]: event.target.value })
  }

  render() {
    const error = authStore.error
    return (
      <div>
        { error && (
          <div>
            {error}
          </div>
        )}
        <label>
          Username:
          <input value={this.state.username} onChange={this.onChange('username')} type="text" />
        </label>
        <label>
          Password:
          <input value={this.state.password} onChange={this.onChange('password')} type="password" />
        </label>
        <button onClick={this.onClick}>Login</button>
      </div>
    )
  }
}

export default LoginScreen
