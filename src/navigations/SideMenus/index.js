import React from 'react';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {Alert, Image, Text} from 'react-native';
import styles from './styles';
import Container from '../../components/common/Container';
import {SETTINGS} from '../../constants/routeNames';
import logoutUser from '../../context/actions/auth/logoutUser';
import Icon from '../../components/common/Icon';

const SideMenus = ({authDispatch, ...props}) => {
  const {navigation} = props;

  const handleLogout = () => {
    navigation.toggleDrawer();
    Alert.alert('Logout', 'Are you sure you want to logout?', [
      {
        text: 'Cancel',
        onPress: () => {},
      },
      {
        text: 'OK',
        onPress: () => {
          logoutUser()(authDispatch);
        },
      },
    ]);
  };

  const menuItems = [
    {
      icon: () => <Icon type="material" name="settings" size={17} />,
      name: 'Settings',
      onPress: () => {
        navigation.navigate(SETTINGS);
      },
    },
    {
      icon: () => <Icon type="material" name="logout" size={17} />,
      name: 'Logout',
      onPress: handleLogout,
    },
  ];
  return (
    <DrawerContentScrollView {...props}>
      <Container>
        <Image
          height={70}
          width={70}
          source={require('../../assets/images/logo.png')}
          style={styles.logoImage}
        />

        {menuItems.map(({name, icon, onPress}) => (
          <DrawerItem
            key={name}
            label={name}
            onPress={onPress}
            style={styles.item}
            icon={icon}
          />
        ))}
      </Container>
    </DrawerContentScrollView>
  );
};
export default SideMenus;
