import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';

const styles = {
  root: {
    flexGrow: 1,
    textTransform: 'uppercase',
    paddingTop: '40px',
    paddingBottom: '25px',
  },
  hr: {
    boxShadow: '0px 1px 1px white',
    width: '5%',
    display: 'inline-block',
    verticalAlign: 'middle',
    marginLeft: '2px',
    marginRight: '2px'
  },
  tag: {
    fontWeight: '800',
    color: '#afafaf',
    display: 'inline'
  },
  gray: {
    color: '#afafaf',
  }
}

class SectionHead extends Component {
  render() {
    const {
      title,
      icon,
      classes
    } = this.props;

    return (
      <div className={ classes.root }>
        <Typography gutterBottom className={ classes.gray }>
          { icon }
        </Typography>
        <Divider className={ classes.hr } />
        <Typography variant="h5" className={ classes.tag }>
          { title }
        </Typography>
        <Divider className={ classes.hr } />
      </div>
    )
  }
}

export default withStyles(styles)(SectionHead);
