import React, {Component} from 'react';
import {Button, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';

const Drawer = createDrawerNavigator();

// screens
import {Dashboard} from '../screens/dashboard';
import {DrawerScreen} from '../screens/drawer';

export class DrawerNavigator extends Component {
  render() {
    return (
      <Drawer.Navigator
        openByDefault={false}
        drawerContent={(props) => <DrawerScreen {...props} />}>
        <Drawer.Screen name="Dashboard" component={Dashboard} />
      </Drawer.Navigator>
    );
  }
}
