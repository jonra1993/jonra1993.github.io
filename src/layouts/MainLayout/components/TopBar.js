import React from 'react';
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
import Logo from 'src/components/Logo';
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
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {[['Resume', <AccountBoxIcon/>], ['About', <InfoIcon/>], ['Projects',<WorkIcon/>]].map((element, index) => (
          <ListItem button key={element[0]}>
            <ListItemIcon>{element[1]}</ListItemIcon>
            <ListItemText primary={element[0]} />
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
            component={RouterLink}
            to="/app"
            underline="none"
            variant="body2"
          >
            About
          </Link>
          <Link
            className={classes.link}
            color="textSecondary"
            component={RouterLink}
            to="/docs"
            underline="none"
            variant="body2"
          >
            Resume
          </Link>
          <Link
            className={classes.link}
            color="textSecondary"
            component={RouterLink}
            to="/docs"
            underline="none"
            variant="body2"
          >
            Projects
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
