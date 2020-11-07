import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Box,
  Container,
  Divider,
  Grid,
  Typography,
  makeStyles,
  IconButton,
  Icon
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#242C4A',
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
    '& dt': {
      marginTop: theme.spacing(2)
    },
    paddingLeft: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center'
  },
  designedBy: {
    color: '#d4d4d4'
  }
}));

const Footer = ({ className, data, ...rest }) => {
  const classes = useStyles();

  return (
    <div
      className={clsx(classes.root, className)}
      {...rest}
    >
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
                <Icon style={{ color: '#d4d4d4' }} className={net.iconName} />
              </IconButton>
            </Grid>
          ))
        }
      </Grid>
      <Box my={3}>
        <Divider />
      </Box>
      <Grid
        container
        spacing={3}
        component="dl"
      >
        <Grid
          item
          xs={12}
          md={12}
        >
          <Typography
            variant="overline"
            className={classes.designedBy}
            align='center'
          >
            Diseñado por: Jonathan Vargas
            </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
  data: PropTypes.object.isRequired
};

Footer.defaultProps = {
  data: {},
};

export default Footer;
