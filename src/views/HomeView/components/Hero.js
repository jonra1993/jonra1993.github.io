import React, { useState, useEffect, useRef, createRef } from 'react'
import GitHubIcon from '@material-ui/icons/GitHub';
import BusinessIcon from '@material-ui/icons/Business';
import PropTypes from 'prop-types';
import {
  Box,
  Container,
  Grid,
  Typography,
  makeStyles,
  Button
} from '@material-ui/core';
import Clouds from 'vanta/dist/vanta.clouds.min'
import BIRDS from 'vanta/dist/vanta.birds.min'
import TRUNK from 'vanta/dist/vanta.trunk.min'
import * as THREE from 'three'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    paddingTop: 0,
    paddingBottom: 120,
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
      maxWidth: '80%',
      height: 'auto',
      transform: 'rotateY(-15deg) rotateX(5deg)',
      backfaceVisibility: 'hidden',
      boxShadow: theme.shadows[16]
    }
  },
  title: {
    color: '#F4F8F9',
    [theme.breakpoints.down('md')]: {
      alignCenter: true
    }
  },
  description: {
    color: '#D4F8F9',
    [theme.breakpoints.down('md')]: {
    }
  },
  buttons: {
    '& > *': {
      margin: theme.spacing(2),
    },
  },
}));

const Hero = ({ className, data, ...rest }) => {
  const classes = useStyles();
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef();

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(BIRDS({
        THREE,
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        backgroundColor: 0x232c4a,
        color1: 0x115f48,
        color2: 0x971e6,
        // birdSize: 1.20,
        // wingSpan: 23.00,
        // speedLimit: 6.00,
        // separation: 75.00,
        // alignment: 48.00,
        // cohesion: 24.00
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])

  return (
    <div
      id={'hero'}
      className={classes.root}
      ref={vantaRef}
    >
      <Container maxWidth="lg">
        {
          data !== null &&
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
                  variant="h1"
                  className={classes.title}

                >
                  {data.title}
                </Typography>
                <Box mt={3}>
                  <Typography
                    variant="body1"
                    color="textSecondary"
                    className={classes.description}
                  >
                    {data.description}
                  </Typography>
                </Box>
                <Box mt={3} className={classes.buttons}>
                  <Button variant="contained" color="primary" target="_blank" href={data.github} startIcon={<GitHubIcon />}>
                    Github
                </Button>
                  <Button variant="contained" color="primary" target="_blank" href={data.website} startIcon={<BusinessIcon />}>
                    Company
                </Button>
                </Box>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              md={7}
            >
              <Box position="relative">
                <div className={classes.image}>
                  <img
                    alt="Presentation"
                    src="https://res.cloudinary.com/dnv0qwkrk/image/upload/v1604790122/wordpress_Jonathan/oie_42Yv0CR18gxi_qxnjn7.png"
                  />
                </div>
              </Box>
            </Grid>
          </Grid>
        }
      </Container>
    </div>
  );
};

Hero.propTypes = {
  className: PropTypes.string,
  data: PropTypes.object.isRequired,
  id: PropTypes.string,
};

Hero.defaultProps = {
  data: null,
  id: 'hero'
};

export default Hero;
