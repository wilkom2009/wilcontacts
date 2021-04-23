import AsyncStorage from '@react-native-async-storage/async-storage';
import {useFocusEffect, useNavigation} from '@react-navigation/core';
import React, {useContext, useState, useEffect, useRef} from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from '../../components/common/Icon';
import ContactsComponent from '../../components/ContactsComponent';
import {CONTACT_DETAIL} from '../../constants/routeNames';
import getContacts from '../../context/actions/contacts/getContacts';
import {GlobalContext} from '../../context/reducers/Provider';
import {navigate} from '../../navigations/SideMenus/RootNavigator';

const Contact = ({navigation}) => {
  const {setOptions, toggleDrawer} = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [sortBy, setSortBy] = useState(null);
  const contactsRef = useRef([]);

  const {
    contactsDispatch,
    contactsState: {
      getContacts: {data, loading},
    },
  } = useContext(GlobalContext);

  useEffect(() => {
    getContacts()(contactsDispatch);
  }, []);

  useEffect(() => {
    setOptions({
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => {
            toggleDrawer();
          }}>
          <Icon type="material" style={{padding: 17}} name="menu" size={25} />
        </TouchableOpacity>
      ),
    });
  }, []);

  const getSettings = async () => {
    const sortPref = await AsyncStorage.getItem('sortBy');
    if (sortPref) {
      setSortBy(sortPref);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      getSettings();

      return () => {};
    }, []),
  );

  useEffect(() => {
    const prev = contactsRef.current;

    contactsRef.current = data;

    const newList = contactsRef.current;
    if (newList.length - prev.length === 1) {
      const newContact = newList.find(
        item => !prev.map(i => i.id).includes(item.id),
      );
      navigate(CONTACT_DETAIL, {item: newContact});
    }
  }, [data.length]);

  return (
    <ContactsComponent
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}
      data={data}
      loading={loading}
      sortBy={sortBy}
    />
  );
};

export default Contact;
