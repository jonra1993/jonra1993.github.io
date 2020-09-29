import React, {
  Suspense,
  Fragment,
} from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';
//import MainLayout from 'src/layouts/MainLayout';
import Home from './views/Home';
import LoadingScreen from './components/LoadingScreen';
//import MainLayout from './layouts/MainLayout';

export const renderRoutes = (routes = []) => (
  <Suspense fallback={<LoadingScreen />}>
    <Switch>
      {routes.map((route, i) => {
        const Guard = route.guard || Fragment;
        const Layout = route.layout || Fragment;
        const Component = route.component;

        return (
          <Route
            key={i}
            path={route.path}
            exact={route.exact}
            render={(props) => (
              <Guard>
                <Layout>
                  {route.routes ? renderRoutes(route.routes) : <Component {...props} />}
                </Layout>
              </Guard>
            )}
          />
        );
      })}
    </Switch>
  </Suspense>
);

const routes = [
  {
    exact: true,
    path: '/',
    component: Home
  }
];

export default routes;