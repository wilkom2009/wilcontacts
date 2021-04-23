import AsyncStorage from '@react-native-async-storage/async-storage';
import {LOGOUT_USER} from '../../../constants/actionsTypes';

export default () => dispatch => {
  console.log('LOGOUT ===: ');
  AsyncStorage.removeItem('token'); //remove token from local
  AsyncStorage.removeItem('user'); //
  dispatch({
    type: LOGOUT_USER,
  });
};
