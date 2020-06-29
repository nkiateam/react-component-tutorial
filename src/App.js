import React, { Component } from 'react'
import './App.css'
// import Counter from './examples/03_hook/useState/Counter'
// import Main from './examples/02_hoc/Main'
import ContainerComponent from './examples/todoAnswer/ContainerComponent'

class App extends Component {
  render () {
    return (
      <ContainerComponent />
      // <Main />
      // <Counter />
    )
  }
}

export default App
