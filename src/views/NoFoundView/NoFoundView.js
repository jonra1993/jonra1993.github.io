import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Typography,makeStyles } from '@material-ui/core';
import Page from 'src/components/Page';


const useStyles = makeStyles(() => ({
  root: {}
}));

const NotFoundView = () => {
  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title="Home"
    >
      <Typography>
        Not Found View
      </Typography>

      <RouterLink                 
        to="/app/dashboard"
        variant="h5"
        color="textPrimary"
        underline="none">DashboardView</RouterLink>

    </Page>
  );
};

export default NotFoundView;
