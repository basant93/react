import React, { Component } from 'react';

import './App.css';
import Main from './main';

class App extends Component {

  constructor(){
    super();
    this.name = "Basant";
  }
  render() {
  
    return (
      <Main />
    );
  }
}

export default App;
