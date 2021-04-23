import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {LOGIN, REGISTER} from '../constants/routeNames';
import Register from '../screens/Register';
import Login from '../screens/Login';

const AuthNavigator = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={LOGIN} component={Login}></Stack.Screen>
      <Stack.Screen name={REGISTER} component={Register}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default AuthNavigator;
