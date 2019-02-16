import React, { Component } from 'react';
import HeaderContainer from './components/header/header.container.js';
import SampleContainer from './components/sample/sample.container.js';
import FooterContainer from './components/footer/footer.container.js';
import './App.css';
import 'typeface-roboto';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderContainer/>
        <SampleContainer/>
        <FooterContainer/>
      </div>
    );
  }
}

export default App;
