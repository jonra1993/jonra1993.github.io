import React, {
  Suspense,
  Fragment,
  lazy
} from 'react';
import {
  Switch,
  Redirect,
  Route
} from 'react-router-dom';
//import MainLayout from 'src/layouts/MainLayout';
import HomeView from 'src/views/HomeView';
import LoadingScreen from 'src/components/LoadingScreen';
import MainLayout from 'src/layouts/MainLayout';

export const renderRoutes = (routes = []) => (
  <Suspense fallback={<LoadingScreen />}>
    <Switch>
      {routes.map((route, index) => {
        const Layout = route.layout || Fragment;
        const Component = route.component;

        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            render={(props) => (
              <Layout>
                {route.routes
                  ? renderRoutes(route.routes)
                  : <Component {...props} />}
              </Layout>
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
    layout: MainLayout,
    component: lazy(() => import('src/views/HomeView'))
  },
  {
    exact: true,
    path: '/404',
    component: lazy(() => import('src/views/NoFoundView'))
  },
  {
    path: '*',
    layout: MainLayout,
    routes: [
      {
        exact: true,
        path: '/',
        component: HomeView
      },
      {
        component: () => <Redirect to="/404" />
      }
    ]
  }
];

export default routes;