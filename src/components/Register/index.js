import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';

import {Image, View, Text, TouchableOpacity} from 'react-native';
import Container from '../common/Container';
import CustomButton from '../common/CustomButton';
import Input from '../common/input';
import {LOGIN} from '../../constants/routeNames';
import styles from './styles';
import Message from '../common/Message';

const RegisterComponent = ({
  onChange,
  onSubmit,
  form,
  errors,
  loading,
  error,
}) => {
  const {navigate} = useNavigation();
  const [isSecureEntry, setIsSecureEntry] = useState(true);

  return (
    <Container>
      <Image
        height={70}
        width={70}
        source={require('../../assets/images/logo.png')}
        style={styles.logoImage}
      />

      <View>
        <Text style={styles.title}>Welcome to WilContacts App</Text>
        <Text style={styles.subTitle}>Please Register here</Text>

        <View style={[styles.form]}>
          {error?.error && (
            <Message
              danger
              retry
              retryFn={onSubmit}
              onDismiss={() => {}}
              primary
              message={error?.error}
            />
          )}

          <Input
            label="Username"
            style={styles.input}
            placeholder="Enter username here"
            onChangeText={value => {
              onChange({name: 'username', value});
            }}
            error={errors.username || error?.username?.[0]}
          />

          <Input
            label="First name"
            style={styles.input}
            placeholder="Enter first name here"
            onChangeText={value => {
              onChange({name: 'firstName', value});
            }}
            error={errors.firstName || error?.first_name?.[0]}
          />

          <Input
            label="Last name"
            style={styles.input}
            placeholder="Enter last name here"
            onChangeText={value => {
              onChange({name: 'lastName', value});
            }}
            error={errors.lastName || error?.last_name?.[0]}
          />

          <Input
            label="Email"
            style={styles.input}
            placeholder="Enter email here"
            onChangeText={value => {
              onChange({name: 'email', value});
            }}
            error={errors.email || error?.email?.[0]}
          />

          <Input
            label="Password"
            placeholder="Enter password here"
            style={styles.input}
            icon={
              <TouchableOpacity onPress={() => setIsSecureEntry(prev => !prev)}>
                <Text>{isSecureEntry ? 'Show' : 'Hide'}</Text>
              </TouchableOpacity>
            }
            iconPosition="right"
            secureTextEntry={isSecureEntry}
            onChangeText={value => {
              onChange({name: 'password', value});
            }}
            error={errors.password || error?.password?.[0]}
          />

          {console.log('Error === : ', error)}

          <CustomButton
            loading={loading}
            disabled={loading}
            onPress={onSubmit}
            primary
            title="Submit"
          />

          <View style={styles.createSection}>
            <Text style={styles.infoText}>Already have account ?</Text>
            <TouchableOpacity
              onPress={() => {
                navigate(LOGIN);
              }}>
              <Text style={styles.linkBtn}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Container>
  );
};

export default RegisterComponent;
