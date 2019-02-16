import React, { Component } from 'react';

class Footer extends Component {
  render() {
    const { bio } = this.props;
    return (
      <div>
        { bio.name }
        { bio.description }
        { bio.image }
      </div>
    )
  }
}

export default Footer;
