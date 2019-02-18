import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import headerCircles from '../../images/dpk-branded-circles.png';
import logo from '../../images/logo.png';
import Button from '@material-ui/core/Button';
import classNames from 'classnames';

const styles = theme => ({
  root: {
    width: '100%'
  },
  customAppBar: {
    overflow: 'visible',
    backgroundImage: `url(${headerCircles})`,
    backgroundRepeat: 'no-repeat',
    backgroundPositionY: '-330px',
    position: 'fixed',
    backgroundColor: 'transparent',
    boxShadow: 'none',
    minHeight: '125px'
  },
  customToolBar: {
    minHeight: '54px'
  },
  grow: {
    flexGrow: 1,
  },
  logo: {
    width: '150px',
    marginLeft: '11px'
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  button: {
    margin: theme.spacing.unit,
    color: '#5e5f61'
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
    lineHeight: 1
  },
  menuButton: {
    color: '#5e5f61'
  }
});

class Header extends Component {
  handleMenuClose = () => {
    this.props.handleMenuClose();
  };

  handleMobileMenuOpen = event => {
    this.props.handleMobileMenuOpen(event);
  }

  scrollTo = (event, link) => {
    this.props.scrollTo(link);
    this.props.handleMobileMenuClose();
  }

  renderNavItem = (item, index) => {
    const { classes } = this.props;
    return (
      <Button
        key={ index }
        size="small"
        className={ classes.button }
        color="inherit"
        onClick={ (event) => this.scrollTo(event, item.link) }
        spy="true"
        smooth="true"
        duration={500}
      >
        <span
          className={ classNames(classes.leftIcon) }
          >
          { item.icon }
        </span>
        { item.title }
      </Button>
    )
  }

  renderMenuItem = (item, index) => {
    const { classes } = this.props;
    return (
      <MenuItem
        className={ classes.menuButton }
        key={ index }
        onClick={ (event) => this.scrollTo(event, item.link) }
        spy="true"
        smooth="true"
        duration={500}
      >
        <IconButton color="inherit">
          { item.icon }
        </IconButton>
        <p>{ item.title }</p>
      </MenuItem>
    )
  }

  renderNavItems() {
    const { navItems } = this.props;
    return navItems.map(this.renderNavItem);
  }

  renderMenuItems() {
    const { navItems } = this.props;
    return navItems.map(this.renderMenuItem);
  }

  renderMobileMenu = () => {
    const {
      mobileMoreAnchorEl,
      isMobileMenuOpen
    } = this.props;
    return (
      <Menu
        anchorEl={ mobileMoreAnchorEl }
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={ isMobileMenuOpen }
        onClose={ this.handleMenuClose }
      >
      { this.renderMenuItems() }
      </Menu>
    )
  }

  render() {
    const {
      classes
    } = this.props

    return (
      <div className={classes.root}>
        <AppBar
          className={ classes.customAppBar }
          color="default"
        >
          <Toolbar className={ classes.customToolBar }>
            <img
              src={ logo }
              className={ classes.logo }
              alt="DPKgraphics :: A Digital Company"
              />
            <div className={ classes.grow } />
            <div className={ classes.sectionDesktop }>
              { this.renderNavItems() }
            </div>
            <div className={ classes.sectionMobile }>
              <IconButton
                aria-haspopup="true"
                onClick={ this.handleMobileMenuOpen }
                className={ classes.menuButton }
              >
                <MenuIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        { this.renderMobileMenu() }
        <Toolbar className={ classes.customToolBar }>
        </Toolbar>
      </div>
    )
  }
}

export default withStyles(styles)(Header);
