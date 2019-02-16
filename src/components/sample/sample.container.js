import React, { Component } from 'react';
import Sample from './sample.component.js';
import { data } from '../../data.js';

class SampleContainer extends Component {
  render() {
    return (
      <Sample
        data={ data }
        />
    )
  }
}

export default SampleContainer;
