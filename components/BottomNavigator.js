import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import { createAppContainer,createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import HomeScreen from '../screens/HomeScreen';
import Exchange from '../screens/Exchange';
import WelcomeScreen from '../screens/WelcomeScreen';

export const BottomNavigator = createBottomTabNavigator({
   List:{
    screen:HomeScreen,
   navigationOptions:{
    tabBarLabel:"HomeScreen"
   }

   } ,

    Exchange:{
   screen:Exchange,
   navigationOptions:{
   tabBarLabel:"Exchange"
   }

   } 
}) 
