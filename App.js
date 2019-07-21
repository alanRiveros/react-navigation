/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';

import { createStackNavigator }  from 'react-navigation'

import {
  Text
} from 'react-native'

import Home from './src/screens/home'
import About from './src/screens/about'
import Profile from './src/screens/profile'
import Login from './src/screens/login'

const AppNavigator = createStackNavigator({
  Home: {
    screen: Home,
    path: 'home/',
    navigationOptions: {
      title: 'Esta es la Home'
    }
  },
  About,
  Profile,
  Login
}, {
  initialRouteName: 'Home',
  navigationOptions: {
    title: 'Un titulo generico',
    headerTitleAllowFontScaling: true,
    headerBackTitle: 'Atras',
    gesturesEnabled: true,
    headerBackImage: <Text>{`<=`}</Text>
    //header: <Text>Esto es un Header</Text>
  }, 
  initialRouteKey: 'home',
  initialRouteParams: {
    nombre: 'Alan Riveros'
  },
  headerMode: 'float',
  mode: 'card',
  cardStyle: {
    borderWidth: 2,
    backgroundColor: 'red'
  },
  headerTransitionPreset: 'uikit'
})

const Main = createStackNavigator(
  {
    Main: {
      screen: AppNavigator
    },
    Login: {
      screen: Login
    }
  },
  {
    mode: 'modal',
    headerMode: 'none'
  }
)

export default Main;
