import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Box,
  Container,
  Grid,
  Typography,
  makeStyles
} from '@material-ui/core';
import ParticlesBg  from "particles-bg";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    paddingTop: 200,
    paddingBottom: 200,
    [theme.breakpoints.down('md')]: {
      paddingTop: 60,
      paddingBottom: 60
    }
  },
  technologyIcon: {
    height: 40,
    margin: theme.spacing(1)
  },
  image: {
    perspectiveOrigin: 'left center',
    transformStyle: 'preserve-3d',
    perspective: 1500,
    '& > img': {
      maxWidth: '90%',
      height: 'auto',
      transform: 'rotateY(-35deg) rotateX(15deg)',
      backfaceVisibility: 'hidden',
      boxShadow: theme.shadows[16]
    }
  },
  shape: {
    position: 'absolute',
    top: 0,
    left: 0,
    '& > img': {
      maxWidth: '90%',
      height: 'auto'
    }
  },
  bubbles: {
    position: 'fixed',
    height: '100%'
 }
}));

const Hero = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <>

    <div
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            xs={12}
            md={5}
          >
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              height="100%"
            >
              <Typography
                variant="overline"
                color="secondary"
              >
                Introducing
              </Typography>
              <Typography
                variant="h1"
                color="textPrimary"
              >
                Devias React Material Kit - PRO
              </Typography>
              <Box mt={3}>
                <Typography
                  variant="body1"
                  color="textSecondary"
                >
                  A professional kit that comes with ready-to-use Material-UI© components
                  developed with one common goal in mind, help you build faster &amp; beautiful
                  applications. Each component is fully customizable,
                  responsive and easy to integrate.
                </Typography>
              </Box>
              <Box mt={3}>
                <Grid
                  container
                  spacing={3}
                >
                  <Grid item>
                    <Typography
                      variant="h1"
                      color="secondary"
                    >
                      30+
                    </Typography>
                    <Typography
                      variant="overline"
                      color="textSecondary"
                    >
                      Demo Pages
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography
                      variant="h1"
                      color="secondary"
                    >
                      UX
                    </Typography>
                    <Typography
                      variant="overline"
                      color="textSecondary"
                    >
                      Complete Flows
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography
                      variant="h1"
                      color="secondary"
                    >
                      300+
                    </Typography>
                    <Typography
                      variant="overline"
                      color="textSecondary"
                    >
                      Components
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
              <Box mt={3}>
                <img
                  alt="Javascript"
                  className={classes.technologyIcon}
                  src="/static/images/javascript.svg"
                />
                <img
                  alt="Typescript"
                  className={classes.technologyIcon}
                  src="/static/images/typescript.svg"
                />
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={7}
          >
            <Box position="relative">
              <div className={classes.shape}>
                <img
                  alt="Shapes"
                  src="https://res.cloudinary.com/dnv0qwkrk/image/upload/v1601438179/wordpress_JRTEC/pexels-photo-220421-2.jpg"
                />
              </div>
              <div className={classes.image}>
                <img
                  alt="Presentation"
                  src="https://res.cloudinary.com/dnv0qwkrk/image/upload/v1601438179/wordpress_JRTEC/pexels-photo-220421-2.jpg"
                />
              </div>
              <ParticlesBg type="circle" bg={true} className={classes.bubbles}/>

            </Box>
          </Grid>
        </Grid>
      </Container>    
    </div>
    <ParticlesBg type="circle" bg={true} className={classes.bubbles}/>
      </>
  );
};

Hero.propTypes = {
  className: PropTypes.string
};

export default Hero;
