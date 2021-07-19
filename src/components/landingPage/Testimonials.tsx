import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Box,
  Container,
  Typography,
  makeStyles
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    // color: '#000524',
    paddingTop: 128,
    paddingBottom: 128,
    background: 'linear-gradient(0deg, rgba(48, 151, 202, 0.3), rgba(48, 151, 202, 0.3)), url(https://res.cloudinary.com/dnv0qwkrk/image/upload/v1604789269/wordpress_Jonathan/testimonials-bg_qbf97c.jpg)',
  },
  title: {
    fontWeight: theme.typography.fontWeightRegular,
    color: '#DFF4F5'
  },
  phrase: {
    color: '#DFF4F5'
  }
}));

const Testimonials = ({ data, ...rest }) => {
  const classes = useStyles();

  return (
    <div
      className={clsx(classes.root)}
      {...rest}
    >
      <Container maxWidth="md">
        { data.map((testimonial) => (
          <Box key={testimonial.phrase}>
            <Typography
              variant="h3"
              align="center"
              color="textPrimary"
              className={classes.title}
            >
              &quot;
              {testimonial.phrase}
              &quot;
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
  data: PropTypes.array
};
Testimonials.defaultProps = {
  data: [],
};

export default Testimonials;
