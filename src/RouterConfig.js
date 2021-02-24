import React from 'react';
import Navigation from './components/Navigation/index';
import Signup from './components/signup'
import Home from './components/Home'
export const RouterConfig = [{
    path: '/signup',
    exact: true,
    component: () => <><Navigation/><Signup></Signup></> ,
  },
  {path: '/',
  exact: true,
  component: () => <><Navigation/><Home></Home></> ,}
];
