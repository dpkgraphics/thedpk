import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import sampleCircles from '../../images/dpk-grey-circles.png';
import SectionHead from '../../shared/sectionHead.component.js';
import Work from '@material-ui/icons/Work';

const styles = {
  root: {
    flexGrow: 1,
    backgroundImage: `url(${sampleCircles})`,
    backgroundRepeat: 'repeat-x',
    backgroundPosition: 'top center',
    backgroundPositionY: '310px',
  },
  imgFluid: {
    maxWidth: '100%',
    height: 'auto'
  }
};

const header = {
  icon: <Work/>,
  title: 'Some of the work created'
}

class Sample extends Component {
  renderSample = (sample, index) => {
    const { classes } = this.props;
    return (
      <div key={ index }>
        <div>
          <img
            src={ sample.image }
            className={ classes.imgFluid }
            alt="DPKgraphics :: A Digital Company"/>
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
    const {
      title,
      icon
    } = header;

    return (
      <div className={ classes.root }>
        <SectionHead
          icon={ icon }
          title={ title }
        />
      <Grid container>
          <Grid item xs={12}>
            { this.renderSamples() }
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default withStyles(styles)(Sample);
