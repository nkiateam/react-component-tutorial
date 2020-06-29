import React, { Component } from 'react'
import './App.css'
import Counter from './examples/03_hook/useState/Counter'
import HocTest from './examples/02_hoc/HocTest'
// import ContainerComponent from './examples/todoAnswer/ContainerComponent'
import './Container.css';
class App extends Component {
  render () {
    return (
      <div>
        {/* <ContainerComponent /> */}
        <HocTest />
        <Counter />
      </div>
    )
  }
}

export default App
