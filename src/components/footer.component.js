import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  link: {
    margin: theme.spacing.unit,
  },
});

const mailTo = 'mailto:daniel.kinsella2004@gmail.com';

class Footer extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Typography variant="body1" gutterBottom>
          Copyright &copy; 2017 DPKgraphics. All Rights Reserved. Charleston, SC :: 773 240 7711 ::
          <Link href={ mailTo } className={ classes.link }>
            connect@dpkgraphics.com
          </Link>
        </Typography>
      </div>
    )
  }
}

export default withStyles(styles)(Footer);
