import React, { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  AppBar,
  Box,
  Button,
  Divider,
  Toolbar,
  Hidden,
  IconButton,
  Link,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import WorkIcon from '@material-ui/icons/Work';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import InfoIcon from '@material-ui/icons/Info';
import HomeIcon from '@material-ui/icons/Home';
import Logo from 'src/components/Logo';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { THEMES } from 'src/constants';
//import Settings from './Settings';

const useStyles = makeStyles((theme) => ({
  root: {
    zIndex: theme.zIndex.drawer + 100,
    ...theme.name === THEMES.LIGHT ? {
      //boxShadow: 'none',
      backgroundColor: theme.palette.primary.paleBlue
    } : {},
    ...theme.name === THEMES.ONE_DARK ? {
      backgroundColor: theme.palette.background.default
    } : {}
  },
  link: {
    fontWeight: theme.typography.fontWeightMedium,
    '& + &': {
      marginLeft: theme.spacing(2)
    }
  },
  divider: {
    width: 1,
    height: 32,
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2)
  },
  toolbar: {
    height: 64
  },
  button: {
    marginLeft: 20
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
}));

const TopBar = ({
  className,
  toggleDrawer,
  isMobileNavOpen,
  ...rest
}) => {
  const classes = useStyles();

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {[['Home', '#hero', <HomeIcon />], ['Resume', '#resume', <AccountBoxIcon />], ['About', '#about', <InfoIcon />], ['Portfolio', '#portfolio', <WorkIcon />]].map((element, index) => (
          <ListItem button key={element[0]}>
            <ListItemIcon>{element[2]}</ListItemIcon>
            <Link
              className={classes.link}
              color="textSecondary"
              onClick={toggleDrawer(false)}
              href= {element[1]}
            >
              {element[0]}
            </Link>
          </ListItem>
        ))}
      </List>
      <Button
        className={classes.button}
        color="secondary"
        component="a"
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.upwork.com/fl/jonathanvargas21"
        variant="contained"
        size="small"
      >
        Want my help
        </Button>
    </div>
  );

  return (
    <AppBar
      className={clsx(classes.root, className)}
      //color="default"
      {...rest}
    >
      <Toolbar className={classes.toolbar}>
        <Hidden lgUp>
          <IconButton
            color="inherit"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon color="primary" />
          </IconButton>
        </Hidden>
        <Hidden mdDown>
          <RouterLink to="/">
            <Logo className={classes.logo} src={"https://res.cloudinary.com/dnv0qwkrk/image/upload/v1601398543/wordpress_Jonathan/logoblack.png"} />
          </RouterLink>
          <Box
            ml={2}
            flexGrow={1}
          />
          <Link
            className={classes.link}
            color="textSecondary"
            href="#hero"
            to="#hero"
          >
            Home
          </Link>
          <Link
            className={classes.link}
            color="textSecondary"
            href="#about"
          >
            About
          </Link>
          <Link
            className={classes.link}
            color="textSecondary"
            href="#resume"
          >
            Resume
          </Link>
          <Link
            className={classes.link}
            color="textSecondary"
            href="#portfolio"
          >
            Portfolio
          </Link>
          <Divider className={classes.divider} />
          <Button
            className={classes.button}
            color="secondary"
            component="a"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.upwork.com/fl/jonathanvargas21"
            variant="contained"
            size="small"
          >
            Want my help
        </Button>
        </Hidden>
        <Hidden lgUp>
          <Box
            ml={2}
            flexGrow={1}
          />
          <RouterLink to="/">
            <Logo className={classes.logo} src={"https://res.cloudinary.com/dnv0qwkrk/image/upload/v1601398543/wordpress_Jonathan/logoblack.png"} />
          </RouterLink>
          <Drawer anchor={'left'} open={isMobileNavOpen} onClose={toggleDrawer(false)}>
            {list('left')}
          </Drawer>
        </Hidden>

      </Toolbar>
    </AppBar>
  );
};

TopBar.propTypes = {
  className: PropTypes.string,
  toggleDrawer: PropTypes.func,
  isMobileNavOpen: PropTypes.bool,
};

export default TopBar;
