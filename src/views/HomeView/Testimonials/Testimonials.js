import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Avatar,
  Box,
  Container,
  Typography,
  makeStyles
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#000524',
    paddingTop: 128,
    paddingBottom: 128
  },
  title: {
    fontWeight: theme.typography.fontWeightRegular,
    color: '#DFF4F5'
  },
  phrase: {
    color: '#DFF4F5'
  },  
}));

const Testimonials = ({ className, data, ...rest }) => {
  const classes = useStyles();

  console.log(data)

  return (
    <div
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Container maxWidth="md">
        {data.map((testimonial, index) => (
          <Box>
            <Typography
              variant="h3"
              align="center"
              color="textPrimary"
              className={classes.title}
            >
              &quot;{testimonial.phrase}&quot;
            </Typography>
            <Box
              mt={6}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Box ml={2}>
                <Typography
                  variant="body1"
                  color="textPrimary"
                  className={classes.phrase}
                >
                  {testimonial.author}
                </Typography>
              </Box>
            </Box>
          </Box>
        ))}
      </Container>
    </div>
  );
};

Testimonials.propTypes = {
  className: PropTypes.string,
  data: PropTypes.object.isRequired
};

export default Testimonials;
