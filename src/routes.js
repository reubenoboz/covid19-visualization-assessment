import React from 'react';
import { Redirect } from 'react-router-dom';
import { lazy } from 'react';

const Dashboard = lazy(() => import('./pages/Dashboard'))

//specify routes and their respective components
const routes = [
    {
        title: 'Dashboard',
        path: '/',
        exact: true,
        component: Dashboard
    },
    {
        title: 'Dashboard',
        path: '/dashboard',
        exact: true,
        component: () => <Redirect to="/" />
      },
]

export default routes;