import React from 'react';
import {Text, View, Switch, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import Container from '../common/Container';
import Input from '../common/input';
import CustomButton from '../common/CustomButton';
import CountryPicker from 'react-native-country-picker-modal';
import {DEFAULT_IMAGE_URI} from '../../constants/general';
import ImagePicker from '../common/ImagePicker';

const CreateContactComponent = ({
  onChangeText,
  form,
  setForm,
  onSubmit,
  error,
  loading,
  toggleValueChange,
  sheetRef,
  openSheet,
  localFile,
  onFileSelected,
}) => {
  return (
    <View style={styles.container}>
      <Container>
        <Image
          height={150}
          width={150}
          source={{uri: localFile?.path || localFile || DEFAULT_IMAGE_URI}}
          style={styles.imageView}
        />
        <TouchableOpacity onPress={openSheet}>
          <Text style={styles.chooseText}>Choose image</Text>
        </TouchableOpacity>

        <Input
          label="First name"
          style={styles.input}
          placeholder="Enter first name"
          value={form.firstName || ''}
          onChangeText={value => {
            onChangeText({name: 'firstName', value: value});
          }}
          error={error?.first_name?.[0]}
        />

        <Input
          label="Last name"
          style={styles.input}
          placeholder="Enter last name"
          value={form.lastName || ''}
          onChangeText={value => {
            onChangeText({name: 'lastName', value: value});
          }}
          error={error?.last_name?.[0]}
        />

        <Input
          error={error?.phone_number?.[0]}
          label="Phone number"
          style={styles.input}
          placeholder="Enter phone number"
          value={form.phoneNumber || ''}
          onChangeText={value => {
            onChangeText({name: 'phoneNumber', value: value});
          }}
          icon={
            <CountryPicker
              countryCode={form.countryCode || undefined}
              withFilter
              withFlag
              withCountryNameButton={false}
              withCallingCode
              withCallingCodeButton
              withEmoji
              onSelect={v => {
                const phoneCode = v.callingCode[0];
                const cCode = v.cca2;
                setForm({...form, phoneCode, countryCode: cCode});
                console.log('V', v);
              }}
            />
          }
          iconPosition="left"
          style={{paddingLeft: 10}}
        />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 10,
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 17}}>Add to favorites</Text>
          <Switch
            trackColor={{false: '#767577', true: '#81b0ff'}}
            thumbColor={form.isFavorite ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleValueChange}
            value={form.isFavorite}
          />
        </View>

        <CustomButton
          loading={loading}
          disabled={loading}
          onPress={onSubmit}
          primary
          title="Submit"
        />
      </Container>
      <ImagePicker onFileSelected={onFileSelected} ref={sheetRef} />
    </View>
  );
};

export default CreateContactComponent;
