import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeNavigator from './HomeNavigator';
import {HOME_NAVIGATOR} from '../constants/routeNames';
import SideMenus from './SideMenus';
import {useContext} from 'react';
import {GlobalContext} from '../context/reducers/Provider';

const DrawerNavigator = () => {
  const Drawer = createDrawerNavigator();
  const {authDispatch} = useContext(GlobalContext);

  const getDrawerContent = props => {
    // return <SideMenu navigation={navigation} />;
    return <SideMenus authDispatch={authDispatch} {...props} />;
  };

  return (
    <Drawer.Navigator
      screenOptions={{drawerType: 'slide', headerShown: false}}
      drawerContent={props => getDrawerContent(props)}>
      <Drawer.Screen
        name={HOME_NAVIGATOR}
        component={HomeNavigator}></Drawer.Screen>
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
