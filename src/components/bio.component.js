import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import bioImage from '../images/dpk-footer-profile.png';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  imgFluid: {
    maxWidth: '100%',
    height: 'auto'
  },
  link: {
    margin: theme.spacing.unit,
  }
});

const urlFile = '../images/DanielKinsellaResume2018.pdf';
const mailTo = 'mailto:daniel.kinsella2004@gmail.com';

class Bio extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid container spacing={24}>
        <Grid item xs>
          <div>
            <img
              src={ bioImage }
              className={ classes.imgFluid }
              alt="DPKgraphics :: A Digital Company"/>
            </div>
            <Typography variant="body1" gutterBottom>
              Consultant :: Daniel Kinsella
            </Typography>
        </Grid>
        <Grid item xs>
          <Typography variant="body1" gutterBottom>
            Hybrid designer developer with experience working in both creative and engineering teams who enjoys building pixel perfect markup using HTML5, Sass, and JavaScript. As a designer, I’ve worked with small and large teams producing high profile websites and mobile applications. As a developer, I’ve acted as the liaison between creative and engineering teams delivering core features by combining my development skills with my visual design expertise using Bootstrap, AngularJS, and Sass.
          </Typography>
        </Grid>
        <Grid item xs>
          <Typography variant="body1" gutterBottom>
            DPKgraphics
            Charleston, SC
            773 240 7711
            <Link href={ urlFile } className={ classes.link } target="_blank">
              DPK Resume
            </Link>
            <Link href={ mailTo } className={ classes.link }>
              connect@dpkgraphics.com
            </Link>
          </Typography>
        </Grid>
      </Grid>
    )
  }
}

export default withStyles(styles)(Bio);
