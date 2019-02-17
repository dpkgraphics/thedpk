import React, { Component } from 'react';
import SectionHead from '../../shared/sectionHead.component.js';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import BlurOn from '@material-ui/icons/BlurOn';

const styles = {
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
        <SectionHead
          icon={ icon }
          title={ title }
        />
        <Grid container spacing={24}>
          { this.renderBrands() }
        </Grid>
      </div>
    )
  }
}

export default withStyles(styles)(Brand);
