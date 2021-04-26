import React, { Suspense, lazy } from 'react';
import LoadingScreen from 'src/components/LoadingScreen';
import MainLayout from 'src/layouts/MainLayout';

const Loadable = (Component) => (props) => (
  <Suspense fallback={<LoadingScreen />}>
    <Component {...props} />
  </Suspense>
);


const HomeView = Loadable(lazy(() => import('src/views/HomeView')));
const NotFound = Loadable(lazy(() => import('src/views/NoFoundView')));


const routes = [
  {
    path: '*',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <HomeView />
      },          
      {
        path: '404',
        element: <NotFound />
      },
      {
        path: '500',
        element: <NotFound />
      },
      {
        path: '*',
        element: <NotFound />
      }
    ]
  },
];

export default routes;