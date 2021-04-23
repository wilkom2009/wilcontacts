import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState, useEffect} from 'react';
import {Text, View} from 'react-native';
import SettingsComponent from '../../components/SettingsComponent';

const Settings = () => {
  const [email, setEmail] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [sortBy, setSortBy] = useState(null);

  const settingsOptions = [
    {title: 'My Info', subTitle: 'Setup your profile', onPress: () => {}},
    {title: 'Accounts', subTitle: null, onPress: () => {}},
    {
      title: 'Default account for new contacts',
      subTitle: email,
      onPress: () => {},
    },
    {title: 'Contacts to display', subTitle: 'All contacts', onPress: () => {}},
    {
      title: 'Sort by',
      subTitle: sortBy,
      onPress: () => {
        setModalVisible(true);
      },
    },
    {title: 'Name format', subTitle: 'First name first', onPress: () => {}},
    {title: 'Import', subTitle: null, onPress: () => {}},
    {title: 'Export', subTitle: null, onPress: () => {}},
    {title: 'Blocked numbers', subTitle: null, onPress: () => {}},
    {title: 'About Will Contacts', subTitle: null, onPress: () => {}},
  ];

  const getSettings = async () => {
    const user = await AsyncStorage.getItem('user');
    setEmail(JSON.parse(user).email);

    const sortPref = await AsyncStorage.getItem('sortBy');
    if (sortPref) {
      setSortBy(sortPref);
    }
  };

  const saveSetting = (key, value) => {
    AsyncStorage.setItem(key, value);
  };

  const prefArray = [
    {
      name: 'First name',
      selected: sortBy === 'First name',
      onPress: () => {
        saveSetting('sortBy', 'First name');
        setSortBy('First name');
        setModalVisible(false);
      },
    },
    {
      name: 'Last name',
      selected: sortBy === 'Last name',
      onPress: () => {
        saveSetting('sortBy', 'Last name');
        setSortBy('Last name');
        setModalVisible(false);
      },
    },
  ];

  useEffect(() => {
    getSettings();
  }, []);

  return (
    <SettingsComponent
      settingsOptions={settingsOptions}
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}
      prefArray={prefArray}
    />
  );
};

export default Settings;
