import React, {Component} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

// screens
import {Dashboard} from '../screens/dashboard';
import {DrawerScreen} from '../screens/drawer';
import {Myrides} from '../screens/rides';
import {SettingScreen} from '../screens/settings';
import {ProfileScreen} from '../screens/profile';

export class DrawerNavigator extends Component {
  render() {
    return (
      <Drawer.Navigator
        openByDefault={false}
        drawerContent={(props) => <DrawerScreen {...props} />}>
        <Drawer.Screen name="Dashboard" component={Dashboard} />
        <Drawer.Screen name="ProfileScreen" component={ProfileScreen} />
        <Drawer.Screen name="SettingScreen" component={SettingScreen} />
        <Drawer.Screen name="Myrides" component={Myrides} />
      </Drawer.Navigator>
    );
  }
}
