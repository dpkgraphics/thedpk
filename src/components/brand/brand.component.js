import React, { Component } from 'react';
import SectionHead from '../../shared/sectionHead.component.js';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import BlurOn from '@material-ui/icons/BlurOn';
import sampleCircles from '../../images/dpk-grey-circles.png';


const styles = {
  root: {
    flexGrow: 1,
    backgroundImage: `url(${sampleCircles})`,
    backgroundRepeat: 'repeat-x',
    backgroundPosition: 'top center',
    backgroundPositionY: '0px',
  },
  imgFluid: {
    maxWidth: '100%',
    height: 'auto'
  }
};

const header = {
  icon: <BlurOn/>,
  title: 'We\'ve worked on some cool brands'
}

class Brand extends Component {
  renderBrand = (brand, index) => {
    const { classes } = this.props;
    return (
      <Grid
        key={ index }
        item
        xs={4}>
        <img
          src={ brand.image }
          className={ classes.imgFluid }
          alt="DPKgraphics :: A Digital Company"/>
      </Grid>
    )
  }

  renderBrands() {
    const { brand } = this.props;
    return brand.map(this.renderBrand);
  }

  render() {
    const { classes } = this.props;
    const {
      title,
      icon
    } = header;

    return (
      <div className={ classes.root }>
        <Grid container justify="center">
          <Grid item xs={8}>
            <SectionHead
              icon={ icon }
              title={ title }
            />
            <Grid container>
              { this.renderBrands() }
            </Grid>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default withStyles(styles)(Brand);
