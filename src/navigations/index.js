import React, {useContext, useEffect, useState} from 'react';

import {NavigationContainer} from '@react-navigation/native';

import DrawerNavigator from './DrawerNavigator';
import AuthNavigator from './AuthNavigator';
import {GlobalContext} from '../context/reducers/Provider';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ActivityIndicator} from 'react-native';
import {navigationRef} from './SideMenus/RootNavigator';
//import SplashScreen from 'react-native-splash-screen';

const AppNavContainer = () => {
  const {
    authState: {isLoggedIn},
  } = useContext(GlobalContext);
  const [isAuthenticated, setIsAuthenticated] = useState(isLoggedIn);
  const [authLoaded, setAuthLoaded] = useState(false);

  const getUser = async () => {
    try {
      const user = await AsyncStorage.getItem('user');

      if (user) {
        setAuthLoaded(true);
        setIsAuthenticated(true);
      } else {
        setAuthLoaded(true);
        setIsAuthenticated(false);
      }
    } catch (error) {}
  };

  useEffect(() => {
    getUser();
  }, [isLoggedIn]);

 /*  useEffect(() => {
    SplashScreen.hide();
  }, [authLoaded]); */

  console.log('AUTHENT : :>> ' + JSON.stringify(isLoggedIn));

  return (
    <>
      {authLoaded ? (
        <NavigationContainer ref={navigationRef}>
          {isAuthenticated ? <DrawerNavigator /> : <AuthNavigator />}
        </NavigationContainer>
      ) : (
        <ActivityIndicator />
      )}
    </>
  );
};

//screens >>> Home >>> Drawer
//screens >>> Auth >>> 
export default AppNavContainer;
