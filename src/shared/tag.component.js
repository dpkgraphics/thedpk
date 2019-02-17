import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    flexGrow: 1,
    textTransform: 'uppercase',
    fontWeight: '800',
    color: '#afafaf',
    paddingTop: '40px',
    paddingBottom: '40px'
  },
  tag: {
    fontWeight: '800',
    color: '#76c7e9',
    fontSize: '1.76rem',
    lineHeight: 0.96,
  },
  small: {
    color: '#afafaf',
    fontSize: '1.3rem'
  }
};

class Tag extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={ classes.root }>
        <Typography
          variant="h5"
          className={ classes.tag }
          gutterBottom
        >
          <span className={ classes.small }>We</span> design, direct,<br/>
          program <span className={ classes.small }>&</span> interact<br/>
        <span className={ classes.small }>and</span> we do it well.
        </Typography>
        <Typography variant="subtitle2" gutterBottom>
          DPKgraphics :: A digital company
        </Typography>
      </div>
    )
  }
}

export default withStyles(styles)(Tag);
