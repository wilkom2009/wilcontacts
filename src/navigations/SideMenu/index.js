import React from 'react';
import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import Container from '../../components/common/Container';
import styles from './styles';

const SideMenu = ({navigation}) => {
  const menuItems = [
    {icon: <Text>T</Text>, name: 'Settings'},
    {icon: <Text>T</Text>, name: 'Logout'},
  ];

  return (
    <SafeAreaView>
      <Container>
        <Image
          height={70}
          width={70}
          source={require('../../assets/images/logo.png')}
          style={styles.logoImage}
        />
        
        <View>
          {menuItems.map((name, icon) => (
            <TouchableOpacity key={name} style={styles.item}>
              {icon}
              <Text style={styles.itemText}>{name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </Container>
    </SafeAreaView>
  );
};

export default SideMenu;
