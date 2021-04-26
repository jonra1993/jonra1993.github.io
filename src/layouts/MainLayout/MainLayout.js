import { useState } from 'react';
import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';
import { experimentalStyled } from '@material-ui/core/styles';
import MainNavbar from './components/MainNavbar';
import MainSidebar from './components/MainSidebar';

const MainLayoutRoot = experimentalStyled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  height: '100%',
  paddingTop: 64
}));

const MainLayout = ({ children }) => {
  const [isSidebarMobileOpen, setIsSidebarMobileOpen] = useState(false);

  return (
    <MainLayoutRoot>
      <MainNavbar onSidebarMobileOpen={() => setIsSidebarMobileOpen(true)} />
      <MainSidebar
        onMobileClose={() => setIsSidebarMobileOpen(false)}
        openMobile={isSidebarMobileOpen}
      />
      {children || <Outlet />}
    </MainLayoutRoot>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node
};

export default MainLayout;
