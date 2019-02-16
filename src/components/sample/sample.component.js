import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const styles = {
  root: {
    flexGrow: 1,
  },
  imgFluid: {
    maxWidth: '100%',
    height: 'auto'
  }
};

class Sample extends Component {
  renderSample = (sample, index) => {
    const { classes } = this.props;
    return (
      <div key={ index }>
        <div>
          <img
            src={ sample.image }
            className={ classes.imgFluid }
            alt="DPK client work"/>
        </div>
        <Typography variant="h3" gutterBottom>
          { sample.name }
        </Typography>
        <Typography variant="body1" gutterBottom>
          { sample.description }
        </Typography>
      </div>
    )
  }
  renderSamples() {
    const { data } = this.props;
    return data.map(this.renderSample)
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Typography variant="h4" gutterBottom>
              <span>Some of the</span>
              <span>work created</span>
            </Typography>
            { this.renderSamples() }
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default withStyles(styles)(Sample);
