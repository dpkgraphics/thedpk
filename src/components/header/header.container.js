import React, { Component } from 'react';
import Header from './header.component.js';

class HeaderContainer extends Component {
  state = {
    anchorEl: null,
    mobileMoreAnchorEl: null,
  };

  handleProfileMenuOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
    this.handleMobileMenuClose();
  };

  handleMobileMenuOpen = event => {
    this.setState({ mobileMoreAnchorEl: event.currentTarget });
  };

  handleMobileMenuClose = () => {
    this.setState({ mobileMoreAnchorEl: null });
  };

  render() {
    const { anchorEl, mobileMoreAnchorEl } = this.state;
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    return (
      <Header
        anchorEl={ anchorEl }
        mobileMoreAnchorEl={ mobileMoreAnchorEl }
        isMenuOpen={ isMenuOpen }
        isMobileMenuOpen={ isMobileMenuOpen }
        handleProfileMenuOpen={ this.handleProfileMenuOpen }
        handleMenuClose={ this.handleMenuClose }
        handleMobileMenuOpen={ this.handleMobileMenuOpen }
        handleMobileMenuClose={ this.handleMobileMenuClose }
        />
    )
  }
}

export default HeaderContainer;
