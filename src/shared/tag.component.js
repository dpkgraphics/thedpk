import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    flexGrow: 1,
    textTransform: 'uppercase',
    fontWeight: '700',
    color: '#afafaf',
  },
  tag: {
    fontWeight: '800',
    color: '#76c7e9',
    fontSize: '1.75rem',
    lineHeight: 1
  },
  small: {
    color: '#afafaf',
    fontSize: 'smaller'
  }
};


// margin: 0 0 5px 0;
//     font-size: 1.75rem;
//     line-height: 1;
//     text-transform: uppercase;
//     font-weight: bold;
//

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
        <Typography variant="body" gutterBottom>
          DPKgraphics :: A digital company
        </Typography>
      </div>
    )
  }
}

export default withStyles(styles)(Tag);
