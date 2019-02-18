import React, { Component } from 'react';
import Work from './work.component.js';
import { data } from '../../data.js';

class WorkContainer extends Component {
  render() {
    return (
      <Work
        data={ data }
        />
    )
  }
}

export default WorkContainer;
