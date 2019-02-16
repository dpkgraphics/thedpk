import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import MailIcon from '@material-ui/icons/Mail';
import headerCircles from '../../images/dpk-branded-circles.png';
import logo from '../../images/logo.png';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import classNames from 'classnames';

const styles = theme => ({
  root: {
    width: '100%',
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
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  }
});

class Header extends Component {
  handleMenuClose = () => {
    this.props.handleMenuClose();
  };

  handleMobileMenuOpen = event => {
    this.props.handleMobileMenuOpen(event);
  }

  handleMobileMenuClose = () => {
    this.props.handleMobileMenuClose();
  }

  render() {
    const {
      mobileMoreAnchorEl,
      isMobileMenuOpen,
      classes
    } = this.props

    const renderMobileMenu = (
      <Menu
        anchorEl={ mobileMoreAnchorEl }
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={ isMobileMenuOpen }
        onClose={ this.handleMenuClose }
      >
        <MenuItem onClick={ this.handleMobileMenuClose }>
          <IconButton color="inherit">
            <MailIcon />
          </IconButton>
          <p>Messages</p>
        </MenuItem>
      </Menu>
    );

    return (
      <div className={classes.root}>
        <AppBar className={ classes.customAppBar } color="default">
          <Toolbar className={ classes.customToolBar }>
            <img
              src={ logo }
              className={ classes.logo }
              alt="DPKgraphics :: A Digital Company"
              />
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <Button size="small" className={classes.button} color="inherit">
                <SaveIcon
                  className={classNames(classes.leftIcon)}
                />
                Brand Experience
              </Button>
              <Button size="small" className={classes.button} color="inherit">
                <SaveIcon
                  className={classNames(classes.leftIcon)}
                />
                The Work
              </Button>
              <Button size="small" className={classes.button} color="inherit">
                <SaveIcon
                  className={classNames(classes.leftIcon)}
                />
                About Me
              </Button>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton
                aria-haspopup="true"
                onClick={ this.handleMobileMenuOpen }
                color="inherit">
                <MenuIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        { renderMobileMenu }
        <Toolbar className={ classes.customToolBar }>
        </Toolbar>
      </div>
    )
  }
}

export default withStyles(styles)(Header);
