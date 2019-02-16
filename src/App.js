import React, { Component } from 'react';
import HeaderContainer from './components/header/header.container.js';
import SampleContainer from './components/sample/sample.container.js';
import Bio from './components/bio.component.js';
import Footer from './components/footer.component.js';
import './App.css';
import 'typeface-roboto';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderContainer/>
        <SampleContainer/>
        <Bio/>
        <Footer/>
      </div>
    );
  }
}

export default App;
