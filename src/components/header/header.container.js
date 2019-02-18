import React, { Component } from 'react';
import Header from './header.component.js';
import BlurOn from '@material-ui/icons/BlurOn';
import Work from '@material-ui/icons/Work';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { scroller } from 'react-scroll'

const navItems = [{
  link: 'brand-experience',
  title: 'Brand Experience',
  icon: <BlurOn/>
}, {
  link: 'the-work',
  title: 'The Work',
  icon: <Work/>
}, {
  link: 'about-me',
  title: 'About Me',
  icon: <AccountCircle/>
}]

class HeaderContainer extends Component {
  state = {
    anchorEl: null,
    mobileMoreAnchorEl: null
  };

  scrollTo(link) {
    scroller.scrollTo(link, {
      duration: 800,
      delay: 0,
      offset: -50,
      smooth: 'easeInOutQuart'
    })
  }

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
        scrollTo={ this.scrollTo }
        navItems={ navItems }
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
