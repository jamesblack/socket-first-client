import React, { Component } from 'react'
import './App.css'
import ConnectionState from './components/connection-state/'

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="App">
        <header>
          <ConnectionState />
        </header>
        <main>
          {this.props.children}
        </main>
      </div>
    )
  }
}

export default App;
