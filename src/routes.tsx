import { Suspense, lazy } from 'react';
import type { PartialRouteObject } from 'react-router';
import LoadingScreen from 'src/components/LoadingScreen';
import MainLayout from 'src/components/MainLayout';

const Loadable = (Component) => (props) => (
  <Suspense fallback={<LoadingScreen />}>
    <Component {...props} />
  </Suspense>
);

// Error pages

const AuthorizationRequired = Loadable(lazy(() => import('./pages/error/AuthorizationRequired')));
const NotFound = Loadable(lazy(() => import('./pages/error/NotFound')));
const ServerError = Loadable(lazy(() => import('./pages/error/ServerError')));

// Other pages

const Home = Loadable(lazy(() => import('./pages/landingPage/Home')));

const routes: PartialRouteObject[] = [    
  {
    path: '*',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },      
      {
        path: '401',
        element: <AuthorizationRequired />
      },
      {
        path: '404',
        element: <NotFound />
      },
      {
        path: '500',
        element: <ServerError />
      },
      {
        path: '*',
        element: <NotFound />
      }
    ]
  }
];

export default routes;
