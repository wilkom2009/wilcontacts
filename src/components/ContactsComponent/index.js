import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  Modal,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  Image,
} from 'react-native';
import colors from '../../assets/theme/colors';
import {CONTACT_CREATE, CONTACT_DETAIL} from '../../constants/routeNames';
import Icon from '../common/Icon';
import Message from '../common/Message';
//import {data} from './dumdata';
import styles from './styles';

const ContactsComponent = ({loading, data, sortBy}) => {
  console.log('DATA ==== ', data);
  const {navigate} = useNavigation();

  const ListEmptyComponent = () => {
    console.log('Empty');
    return (
      <View style={{paddingHorizontal: 100, paddingVertical: 100}}>
        <Message info message="No Contact to show" />
      </View>
    );
  };

  const renderItem = ({item}) => {
    const {
      contact_picture,
      first_name,
      last_name,
      phone_number,
      country_code,
    } = item;
    console.log('contact_picture ==== ', contact_picture);

    return (
      <TouchableOpacity
        style={styles.itemContainer}
        onPress={() => {
          navigate(CONTACT_DETAIL, {item});
        }}>
        <View style={styles.item}>
          {contact_picture ? (
            <Image
              source={{uri: contact_picture}}
              style={{
                width: 45,
                height: 45,
                borderRadius: 100,
              }}
            />
          ) : (
            <View
              style={{
                width: 45,
                height: 45,
                backgroundColor: colors.grey,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 100,
              }}>
              <Text style={[styles.name, {color: colors.white}]}>
                {first_name[0]}
              </Text>
              <Text style={[styles.name, {color: colors.white}]}>
                {last_name[0]}
              </Text>
            </View>
          )}
          <View style={{paddingLeft: 20}}>
            <View
              style={{
                flexDirection: 'row',
              }}>
              <Text style={styles.name}>{first_name}</Text>
              <Text style={styles.lastname}>{last_name}</Text>
            </View>
            <Text
              style={
                styles.phoneNumber
              }>{`${country_code}  ${phone_number}`}</Text>
          </View>
        </View>
        <Icon name="chevron-right" type="evil" size={25} color={colors.grey} />
      </TouchableOpacity>
    );
  };

  return (
    <>
      <View style={{backgroundColor: colors.white}}>
        {loading && (
          <View style={{paddingHorizontal: 100, paddingVertical: 100}}>
            <ActivityIndicator size="large" color={colors.primary} />
          </View>
        )}

        {!loading && (
          <View style={{paddingVertical: 20}}>
            <FlatList
              renderItem={renderItem}
              keyExtractor={item => String(item.id)}
              data={
                sortBy
                  ? data.sort((a, b) => {
                      if (sortBy === 'First name') {
                        return a.first_name > b.first_name;
                      }
                      if (sortBy === 'Last name') {
                        return a.last_name > b.last_name;
                      }
                    })
                  : data
              }
              ListEmptyComponent={ListEmptyComponent}
              ListFooterComponent={<View style={{height: 100}}></View>}
              ItemSeparatorComponent={() => (
                <View
                  style={{height: 0.5, backgroundColor: colors.grey}}></View>
              )}
            />
          </View>
        )}
      </View>

      <TouchableOpacity
        style={styles.floatingActionButton}
        onPress={() => {
          navigate(CONTACT_CREATE);
        }}>
        <Icon type="evil" name="plus" size={15} color={colors.white} />
      </TouchableOpacity>
    </>
  );
};

export default ContactsComponent;
