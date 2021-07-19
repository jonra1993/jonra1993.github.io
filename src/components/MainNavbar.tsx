import type { FC } from 'react';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import Switch from 'react-switch';
import { AppBar, Box, Button, Divider, IconButton, Toolbar, makeStyles, Link } from '@material-ui/core';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import Brightness2Icon from '@material-ui/icons/Brightness2';
import MenuIcon from 'src/icons/Menu';
import { THEMES } from 'src/constants';
import useSettings from 'src/hooks/useSettings';
import Logo from './Logo';

interface MainNavbarProps {
  onSidebarMobileOpen?: () => void;
}

const useStyles = makeStyles((theme) => ({
  switch: {
    verticalAlign: 'middle',
    marginLeft: '4px',
  },
  button: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2)
  },
  link: {
    fontWeight: theme.typography.fontWeightMedium,
    '& + &': {
      marginLeft: theme.spacing(2)
    }
  },
}));

const getValues = (settings) => ({
  compact: settings.compact,
  direction: settings.direction,
  responsiveFontSizes: settings.responsiveFontSizes,
  roundedCorners: settings.roundedCorners,
  theme: settings.theme
});

const MainNavbar: FC<MainNavbarProps> = (props) => {
  const classes = useStyles();
  const { onSidebarMobileOpen } = props;
  const { settings, saveSettings } = useSettings();
  const [values, setValues] = useState(getValues(settings));
  const [checked, setChecked] = useState(false);
  const logoBlack: string = 'https://res.cloudinary.com/dnv0qwkrk/image/upload/v1601398543/wordpress_Jonathan/logoblack.png';
  const logoWhite: string = 'https://res.cloudinary.com/dnv0qwkrk/image/upload/v1601398543/wordpress_Jonathan/logo.png';

  useEffect(() => {
    const newValues = getValues(settings);
    setChecked(newValues?.theme === THEMES?.DARK ?? false);
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
        color: 'text.secondary',
      }}
    >
      <Toolbar sx={{ minHeight: 64 }}>
        <IconButton
          color="inherit"
          onClick={onSidebarMobileOpen}
          sx={{
            display: {
              md: 'none',
            },
          }}
        >
          <MenuIcon fontSize="small" />
        </IconButton>
        <Box
          sx={{
            display: {
              md: 'flex',
              xs: 'none',
            },
          }}
        >
          <RouterLink to="/">
            <img
              alt="My logo"
              src={checked ? logoWhite : logoBlack}
            />
          </RouterLink>
        </Box>
        <Box sx={{ flexGrow: 1 }} />
        <Box
          sx={{
            alignItems: 'center',
            display: {
              md: 'flex',
              xs: 'none',
            },
          }}
        >
          <Link
            className={classes.link}
            color="primary"
            href="#hero"
          >
            Home
          </Link>
          <Link
            className={classes.link}
            color="primary"
            href="#about"
          >
            About
          </Link>
          <Link
            className={classes.link}
            color="primary"
            href="#resume"
          >
            Resume
          </Link>
          <Link
            className={classes.link}
            color="primary"
            href="#portfolio"
          >
            Portfolio
          </Link>
        </Box>
        <Box
          sx={{
            width: 50,
          }}
        />
        <Box
          sx={{
            alignItems: 'center',
            display: {
              md: 'flex',
              xs: 'none',
            },
          }}
        >
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
        </Box>
        <Box
          sx={{
            display: { xs: 'flex', lg: 'none' },
            mr: '3%'
          }}
        >
          <RouterLink to="/">
            <img
              alt="Logo"
              src={checked ? logoWhite : logoBlack}
            />
          </RouterLink>
        </Box>
        <Switch
          onChange={(event) => handleSave('theme', event)}
          checked={checked}
          className={classes.switch}
          offColor="#B2E0F8"
          onColor="#21154B"
          checkedIcon={
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
                fontSize: 15,
                color: '#F3E9F0',
                paddingRight: 2
              }}
            >
              <Brightness2Icon />
            </div>
          }
          uncheckedIcon={
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
                fontSize: 15,
                color: '#FDDD56',
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
