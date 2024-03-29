import { useEffect } from 'react';
import type { FC } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Box, Button, Chip, Drawer, Link } from '@material-ui/core';
import type { Theme } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Logo from './Logo';

interface MainSidebarProps {
  onMobileClose: () => void;
  openMobile: boolean;
}

const MainSidebar: FC<MainSidebarProps> = (props) => {
  const { onMobileClose, openMobile } = props;
  const location = useLocation();
  const lgUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('lg'));

  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
  }, [location.pathname]);

  return (
    <Drawer
      anchor="left"
      onClose={onMobileClose}
      open={!lgUp && openMobile}
      variant="temporary"
      PaperProps={{
        sx: {
          backgroundColor: 'background.default',
          width: 256
        }
      }}
    >
      <Box
        sx={{
          alignItems: 'flex-start',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          p: 2
        }}
      >
        <Box
          sx={{
            display: 'flex',
            pb: 2,
          }}
        >
          <Link
            color="textSecondary"
            href="#hero"
            underline="none"
            variant="body1"
          >
            Home
          </Link>
        </Box>
        <Box
          sx={{
            display: 'flex',
            pb: 2,
          }}
        >
          <Link
            color="textSecondary"
            href="#about"
            underline="none"
            variant="body1"
          >
            About
          </Link>
        </Box>
        <Box
          sx={{
            display: 'flex',
            pb: 2,
          }}
        >
          <Link
            color="textSecondary"
            href="#resume"
            underline="none"
            variant="body1"
          >
            Resume
          </Link>
        </Box>
        <Box
          sx={{
            display: 'flex',
            pb: 2,
          }}
        >
          <Link
            color="textSecondary"
            href="#portfolio"
            underline="none"
            variant="body1"
          >
            Portfolio
          </Link>
        </Box>
        <Button
          color="primary"
          component="a"
          rel="noopener noreferrer"
          href="https://www.upwork.com/fl/jonathanvargas21"
          size="small"
          sx={{ mt: 4 }}
          target="_blank"
          variant="contained"
        >
          Want my help
        </Button>
      </Box>
    </Drawer>
  );
};

MainSidebar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool
};

export default MainSidebar;
