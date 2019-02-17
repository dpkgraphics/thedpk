import React, { Component } from 'react';
import BrandContainer from './components/brand/brand.container.js';
import HeaderContainer from './components/header/header.container.js';
import SampleContainer from './components/sample/sample.container.js';
import Bio from './components/bio.component.js';
import Footer from './components/footer.component.js';
import './App.css';
import 'typeface-roboto';
import Tag from './shared/tag.component.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderContainer/>
        <Tag/>
        <BrandContainer/>
        <SampleContainer/>
        <Bio/>
        <Tag/>
        <Footer/>
      </div>
    );
  }
}

export default App;
