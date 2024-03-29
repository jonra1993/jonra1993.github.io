import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Avatar,
  Button,
  Box,
  Container,
  Grid,
  Typography,
  makeStyles
} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import Icon from '@material-ui/core/Icon';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    paddingTop: 100,
    paddingBottom: 100
  },
  avatar: {
    height: 200,
    width: 200,
  }
}));

const About = ({ data, ...rest }) => {
  const classes = useStyles();

  console.log('data.image', data.image)
  return (
    <div
      id="about"
      className={clsx(classes.root)}
      {...rest}
    >
      {
        <Container maxWidth="lg">
          <Box mt={8}>
            <Grid
              container
              spacing={3}
            >
              <Grid
                item
                xs={12}
                md={4}
              >
                <Box 
                  display="flex" 
                  ml={10} 
                  alignContent="center" 
                  alignItems="center"
                >
                  <Avatar alt="Me" src={data.image} className={classes.avatar} />
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                md={8}
              >
                <Box display="flex">
                  <Box ml={2}>
                    <Typography
                      variant="h4"
                      gutterBottom
                      color="textPrimary"
                    >
                      {data.name}
                    </Typography>
                    <Typography
                      variant="body1"
                      color="textPrimary"
                      gutterBottom
                    >
                      {data.bio}
                    </Typography>
                    <Typography
                      variant="h4"
                      gutterBottom
                      color="textPrimary"
                    >
                      Contact
                    </Typography>
                    <Typography
                      variant="body1"
                      color="textPrimary"
                      gutterBottom
                    >
                      {data.email}
                    </Typography>
                    <Typography
                      variant="body1"
                      color="textPrimary"
                      gutterBottom
                    >
                      {`${data.address.street}${data.address.city}${data.address.state}`} 
                    </Typography>
                    <Typography
                      variant="h4"
                      gutterBottom
                      color="textPrimary"
                    >
                      Social
                    </Typography>
                    <Grid container>
                      {
                        data.social.map((net, index) => (
                          <Grid item key={net.name}>
                            <IconButton
                              color="primary"
                              component="a"
                              href={net.url}
                              target="_blank"
                            >
                              <Icon style={{ color: net.color }} className={net.iconName} />
                            </IconButton>
                          </Grid>
                        ))
                      }
                    </Grid>
                    <Button
                      variant="outlined"
                      component="a"
                      href={data.resumedownload}
                      target="_blank"
                      startIcon={<CloudDownloadIcon />}
                    >
                      Download Resume
                    </Button>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>

      }
    </div>
  );
};

About.propTypes = { 
  data: PropTypes.object,
};

About.defaultProps = {
  data: null,
};

export default About;
