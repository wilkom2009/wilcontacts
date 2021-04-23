import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Text, View} from 'react-native';
import {
  CONTACT_CREATE,
  CONTACT_DETAIL,
  CONTACT_LIST,
  HOME_NAVIGATOR,
  LOGOUT,
  SETTINGS,
} from '../constants/routeNames';
import ContactDetail from '../screens/ContactDetail';
import Contact from '../screens/Contact';
import CreateContact from '../screens/CreateContact';
import Settings from '../screens/Settings';
import Logout from '../screens/Logout';

const HomeNavigator = () => {
  const HomeStack = createStackNavigator();

  return (
    <HomeStack.Navigator initialRouteName={CONTACT_LIST}>
      <HomeStack.Screen
        name={CONTACT_LIST}
        component={Contact}></HomeStack.Screen>
      <HomeStack.Screen
        name={CONTACT_DETAIL}
        component={ContactDetail}></HomeStack.Screen>
      <HomeStack.Screen
        name={CONTACT_CREATE}
        component={CreateContact}></HomeStack.Screen>
      <HomeStack.Screen name={SETTINGS} component={Settings}></HomeStack.Screen>
      <HomeStack.Screen name={LOGOUT} component={Logout}></HomeStack.Screen>
    </HomeStack.Navigator>
  );
};

//screens >>> Home >>> Drawer
//screens >>> Auth >>>
export default HomeNavigator;
