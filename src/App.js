import React, { Component } from 'react'
import './App.css'
import './Container.css';
import InputBox from "./todo/01_todoList/01_input/InputBox";
// import MapList from "./todo/01_todoList/component/02_map/MapList";
// import Fillter from "./todo/01_todoList/component/03_fillter/Fillter";
// import ContainerComponent from './todo/01_todoList/ContainerComponent'

// import Counter from './examples/03_hook/useState/Counter'
// import Main from './examples/02_hoc/Main'


class App extends Component {
  render () {
    return (
       <InputBox />
        // <MapList/>
       // <Fillter />
       // <ContainerComponent />
      // <Main />
      // <Counter />
    )
  }
}

export default App
