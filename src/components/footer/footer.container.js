import React, { Component } from 'react';
import Footer from './footer.component.js';
import { bio } from '../../data.js';

class FooterContainer extends Component {
  render() {
    return (
      <Footer
        bio={ bio }
        />
    )
  }
}

export default FooterContainer;
