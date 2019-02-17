import React, { Component } from 'react';
import Brand from './brand.component.js';
import { brand } from '../../data.js';

class BrandContainer extends Component {
  render() {
    return (
      <Brand
        brand={ brand }
        />
    )
  }
}

export default BrandContainer;
