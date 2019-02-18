import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    flexGrow: 1,
    paddingBottom: '30px'
  },
  link: {
    margin: theme.spacing.unit,
    color: '#76c7e9',
    fontWeight: '800',
    '&:hover': {
      textDecoration: 'none'
    }
  },
  content: {
    color: '#afafaf'
  }
});

const mailTo = 'mailto:daniel.kinsella2004@gmail.com';

class Footer extends Component {
  renderYear() {
    return <div>{(new Date().getFullYear())}</div>;
  }

  render() {
    const { classes } = this.props;
    const year = this.renderYear();
    return (
      <div className={ classes.root }>
        <Typography
          variant="body1"
          gutterBottom
          className={ classes.content }
        >
          Copyright &copy; { year.props.children } DPKgraphics. All Rights Reserved. Charleston, SC :: 773 240 7711 ::
          <Link href={ mailTo } className={ classes.link }>
            connect@dpkgraphics.com
          </Link>
        </Typography>
      </div>
    )
  }
}

export default withStyles(styles)(Footer);
