import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';

class SectionHead extends Component {
  render() {
    const {
      title,
      icon
    } = this.props;
    return (
      <div>
        <Typography variant="h4" gutterBottom>
          <div>{ icon }</div>
          <div>{ title }</div>
        </Typography>
      </div>
    )
  }
}

export default SectionHead;
