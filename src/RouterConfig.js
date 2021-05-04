import React from 'react';
import Navigation from './components/Navigation/index';
import Signup from './components/signup'
import Home from './components/Home';
import ContentsWrite from './components/ContentsWrite';
import Login from './components/login';
import Image from './components/image';
export const RouterConfig = [{
    path: '/signup',
    exact: true,
    component: () => <Signup></Signup> ,
  },
  {path: '/',
  exact: true,
  component: () => <><Navigation/><Home></Home></> ,},
  {path: '/write',
  exact: true,
  component: () => <ContentsWrite></ContentsWrite> ,},
  {path: '/login',
  exact: true,
  component: () => <Login></Login> ,},
  {
    path:'/image',
    exact : true,
    component:()=><Image></Image>
  }

];
