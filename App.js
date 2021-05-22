import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer,createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {BottomNavigator} from './components/BottomNavigator';
import WelcomeScreen from './screens/welcomeScreen'


export default function App() {
  return (
      <AppContainer/>
  );
}

 const SwitchNavigator = createSwitchNavigator({
    WelcomeScreen:WelcomeScreen,
  BottomNavigator:BottomNavigator,

  
 })

 const AppContainer = createAppContainer(SwitchNavigator);
