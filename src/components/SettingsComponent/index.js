import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import colors from '../../assets/theme/colors';
import AppModal from '../../components/common/AppModal';
import styles from './styles';
import Icon from '../common/Icon';

const SettingsComponent = ({
  settingsOptions,
  modalVisible,
  setModalVisible,
  prefArray,
}) => {
  return (
    <>
      <AppModal
        closeOnTouchOutside={false}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        modalBody={
          <View>
            {prefArray?.map(({name, selected, onPress}) => (
              <View key={name}>
                <TouchableOpacity onPress={onPress} style={styles.modalTouch}>
                  {selected && <Icon size={17} name="check" type="material" />}
                  <Text style={{fontSize: 17, paddingLeft: selected ? 15 : 30}}>
                    {name}
                  </Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        }
        modalFooter={<></>}
        title="Sort By"
      />
      <ScrollView style={styles.container}>
        {settingsOptions.map(({title, subTitle, onPress}, index) => (
          <TouchableOpacity key={title} onPress={onPress}>
            <View style={styles.item}>
              <Text style={styles.itemTitle}>{title}</Text>
              {subTitle && <Text style={styles.itemSubTitle}>{subTitle}</Text>}
            </View>

            <View style={{height: 0.5, backgroundColor: colors.grey}} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </>
  );
};

export default SettingsComponent;
