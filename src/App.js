import React, { Component } from 'react'
import './App.css'
import './Container.css';
import InputBox from "./todo/01_todoList/01_input/InputBox";
// import Counter from './examples/03_hook/useState/Counter'
// import HocTest from './examples/02_hoc/HocTest'
// import ContainerComponent from './examples/todoAnswer/ContainerComponent'
class App extends Component {
  render () {
    return (
        <InputBox />
        // <MapList/>
        // <Fillter />
        // <ContainerComponent />
      // <div>
      //   {/* <ContainerComponent /> */}
      //   <HocTest />
      //   <Counter />
      // </div>
    )
  }
}

export default App
