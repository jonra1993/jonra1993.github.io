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


const useStyles = makeStyles((theme) => ({
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

  return (

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
                  src="https://res.cloudinary.com/dnv0qwkrk/image/upload/v1602952758/wordpress_Jonathan/Pngtree_technology_network_data_globe_4869521_tcupiz.png"
                />
              </div>
            </Box>
          </Grid>
        </Grid>
      }
    </Container>
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
