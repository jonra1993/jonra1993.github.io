import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';
import TopBar from './components/TopBar';
import Footer from './components/Footer'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    display: 'flex',
    height: '100%',
    overflow: 'hidden',
    width: '100%'
  },
  wrapper: {
    display: 'flex',
    flex: '1 1 auto',
    width: '100%',
    overflow: 'hidden',
    paddingTop: 64,

  },
  contentContainer: {
    display: 'flex',
    flex: '1 1 auto',
    width: '100%',
    overflow: 'hidden'
  },
  content: {
    flex: '1 1 auto',
    width: '100%',
    height: '100%',
    overflow: 'auto'
  }
}));

const MainLayout = ({ children }) => {
  const classes = useStyles();
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setMobileNavOpen( Boolean(open) );
  };

  return (
    <div className={classes.root}>
      <TopBar isMobileNavOpen={isMobileNavOpen} toggleDrawer={toggleDrawer}/>
      <div className={classes.wrapper}>
        <div className={classes.contentContainer}>
          <div className={classes.content}>
            {
              children
            }
          </div>
        </div>
      </div>
      
      {
       //<Footer/>
      }
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node
};

export default MainLayout;
