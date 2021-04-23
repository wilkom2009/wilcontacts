import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Image, View, Text, TouchableOpacity} from 'react-native';
import Container from '../../components/common/Container';
import CustomButton from '../../components/common/CustomButton';
import Input from '../../components/common/input';
import {REGISTER} from '../../constants/routeNames';
import Message from '../common/Message';
import styles from './styles';

const LoginComponent = ({
  error,
  form,
  justSignedUp,
  loading,
  onChange,
  onSubmit,
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
        <Text style={styles.subTitle}>Please Login In here</Text>

        <View style={[styles.form]}>
          {justSignedUp && (
            <Message
              onDismiss={() => {}}
              success
              message="Account created successfully"
            />
          )}

          {error && !error.error && (
            <Message
              onDismiss={() => {}}
              danger
              message="Invalid cridentials"
            />
          )}

          {error?.error && (
            <Message danger onDismiss primary message={error?.error} />
          )}
          <Input
            label="Username"
            style={styles.input}
            placeholder="Enter username here"
            onChangeText={value => {
              onChange({name: 'username', value});
            }}
            value={form.username || null}
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
          />

          <CustomButton
            loading={loading}
            disabled={loading}
            onPress={onSubmit}
            primary
            title="Submit"
          />

          <View style={styles.createSection}>
            <Text style={styles.infoText}>Need a new account ?</Text>
            <TouchableOpacity
              onPress={() => {
                navigate(REGISTER);
              }}>
              <Text style={styles.linkBtn}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Container>
  );
};

export default LoginComponent;
