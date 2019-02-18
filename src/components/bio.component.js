import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import bioImage from '../images/dpk-footer-profile.png';
import bioBackground from '../images/bg-footer-repeat.png';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Divider from '@material-ui/core/Divider';

const styles = theme => ({
  root: {
    textAlign: 'left',
    flexGrow: 1,
    backgroundColor: '#e7e7e7',
    margin: '0 auto',
    backgroundImage: `url(${bioBackground})`,
    backgroundRepeat: 'repeat',
    padding: '30px'
  },
  title: {
    fontWeight: '800',
    color: '#5e5f61',
    lineHeight: 0.96,
    textTransform: 'uppercase'
  },
  hr: {
    boxShadow: '1px 0px 0px white',
    marginRight: '25px',
    width: '1px',
    height: '100%',
    float: 'left',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  content: {
    color: '#a2a2a2'
  },
  imgFluid: {
    maxWidth: '100%',
    height: 'auto'
  },
  link: {
    color: '#76c7e9',
    fontWeight: '800',
    '&:hover': {
      textDecoration: 'none'
    }
  }
});

const urlFile = '../images/DanielKinsellaResume2019.pdf';
const mailTo = 'mailto:daniel.kinsella2004@gmail.com';

class Bio extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div id="about-me" className={ classes.root }>
        <Grid container spacing={24}>
          <Grid item xs={12} sm={4} md={3}>
            <img
              src={ bioImage }
              className={ classes.imgFluid }
              alt="DPKgraphics :: A Digital Company"
            />
            <Typography
              variant="subtitle2"
              gutterBottom
              className={ classes.content }
            >
              Consultant :: Daniel Kinsella
            </Typography>
          </Grid>
          <Grid item xs={12} sm={8} md={6}>
            <Divider className={ classes.hr } />
            <Typography
              variant="h5"
              className={ classes.title }
              gutterBottom
            >
              Something about me <AccountCircle/>
            </Typography>
            <Typography
              variant="body1"
              className={ classes.content }
              gutterBottom
            >
              Hybrid designer developer with experience working in both creative and engineering teams who enjoys building pixel perfect markup using HTML5, Sass, and JavaScript. As a designer, I’ve worked with small and large teams producing high profile websites and mobile applications. As a developer, I’ve acted as the liaison between creative and engineering teams delivering core features by combining my development skills with my visual design expertise using Bootstrap, AngularJS, and Sass.
            </Typography>
          </Grid>
          <Grid item xs={12} md={3}>
            <Divider className={ classes.hr } />
            <Typography
              variant="body1"
              gutterBottom
              className={ classes.content }
            >
              <strong>DPKgraphics</strong><br/>
              Charleston, SC<br/><br/>
              <Link href={ urlFile } className={ classes.link } target="_blank">
                DPK Resume
              </Link><br/>
              <strong>773 240 7711</strong><br/>
              <Link href={ mailTo } className={ classes.link }>
                connect@dpkgraphics.com
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default withStyles(styles)(Bio);
