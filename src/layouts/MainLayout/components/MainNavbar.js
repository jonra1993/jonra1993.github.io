import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { THEMES } from 'src/constants';
import { Link as RouterLink } from 'react-router-dom';
import {
  AppBar,
  Box,
  Button,
  makeStyles,
  Divider,
  Hidden,
  IconButton,
  Link,
  Toolbar,

} from '@material-ui/core';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import Brightness2Icon from '@material-ui/icons/Brightness2';
import MenuIcon from 'src/icons/Menu';
import Logo from 'src/components/Logo';
import Switch from "react-switch";
import useSettings from 'src/hooks/useSettings';


const useStyles = makeStyles((theme) => ({
  switch: {
    verticalAlign: 'middle',
    marginLeft: '4px',
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
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2)
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
}));

const getValues = (settings) => ({
  compact: settings.compact,
  direction: settings.direction,
  responsiveFontSizes: settings.responsiveFontSizes,
  roundedCorners: settings.roundedCorners,
  theme: settings.theme
});

const MainNavbar = ({ onSidebarMobileOpen }) => {
  const classes = useStyles();
  const { settings, saveSettings } = useSettings();
  const [values, setValues] = useState(getValues(settings));
  const [checked, setChecked] = useState(false);
  const logoBlack = "https://res.cloudinary.com/dnv0qwkrk/image/upload/v1601398543/wordpress_Jonathan/logoblack.png";
  const logoWhite = "https://res.cloudinary.com/dnv0qwkrk/image/upload/v1601398543/wordpress_Jonathan/logo.png";


  useEffect(() => {
    const newValues = getValues(settings);
    setChecked(newValues.theme === THEMES.DARK ? true : false);
    setValues(newValues);
  }, [settings]);


  const handleChangeTheme = (field, value) => {
    const newVal = {
      ...values,
      [field]: value
    }
    saveSettings(newVal);
  };


  const handleSave = (field, value) => {
    const newTheme = value ? THEMES.DARK : THEMES.LIGHT;
    setChecked(!checked);
    handleChangeTheme(field, newTheme);
  };

  return (
    <AppBar
      elevation={0}
      sx={{
        backgroundColor: 'background.paper',
        color: 'text.secondary'
      }}
    >
      <Toolbar sx={{ minHeight: 64 }}>
        <Hidden lgUp>
          <IconButton
            color="inherit"
            onClick={onSidebarMobileOpen}
          >
            <MenuIcon fontSize="small" />
          </IconButton>
        </Hidden>
        <Hidden lgDown>
          <RouterLink to="/">
            <Logo
              sx={{
                height: 40,
                width: 40
              }}
              src={checked ? logoWhite : logoBlack}
            />
          </RouterLink>
        </Hidden>
        <Box sx={{ flexGrow: 1 }} />
        <Hidden mdDown>
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
          <Divider
            orientation="vertical"
            sx={{
              height: 32,
              mx: 2
            }}
          />
          <Button
            className={classes.button}
            color="primary"
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
            sx={{
              display: 'flex',
              mr: '3%'
            }}
          >
            <RouterLink to="/" >
              <Logo className={classes.logo} src={checked ? logoWhite : logoBlack} />
            </RouterLink>
          </Box>
        </Hidden>
        <Switch
          onChange={(event) => handleSave('theme', event)}
          checked={checked}
          className={classes.switch}
          offColor='#B2E0F8'
          onColor='#21154B'
          checkedIcon={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                fontSize: 15,
                color: "#F3E9F0",
                paddingRight: 2
              }}
            >
              <Brightness2Icon />
            </div>
          }
          uncheckedIcon={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                fontSize: 15,
                color: "#FDDD56",
                paddingRight: 2
              }}
            >
              <WbSunnyIcon />
            </div>
          }
        />
      </Toolbar>
      <Divider />
    </AppBar>
  );
};

MainNavbar.propTypes = {
  onSidebarMobileOpen: PropTypes.func
};

export default MainNavbar;
