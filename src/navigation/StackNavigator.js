import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();

// screens
import {WelcomeScreen} from '../screens/welcome';
import {Signin} from '../screens/signin';
import {Signup} from '../screens/signup';
import {Dashboard} from '../screens/dashboard';
import {OrderScreen} from '../screens/order';
import {DrawerNavigator} from './DrawerNavigator';
import {Myrides} from '../screens/rides';

export class StackNavigator extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="DrawerNavigator"
            component={DrawerNavigator}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="OrderScreen"
            component={OrderScreen}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="WelcomeScreen"
            component={WelcomeScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Signin"
            component={Signin}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Signup"
            component={Signup}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
