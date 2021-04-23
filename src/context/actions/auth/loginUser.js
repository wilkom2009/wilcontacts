import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  LOGIN_FAIL,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
} from '../../../constants/actionsTypes';
import axiosInstance from '../../../helpers/axiosInterceptor';

export default ({password, username}) => dispatch => {
  dispatch({
    type: LOGIN_LOADING,
  });
  axiosInstance
    .post('auth/login', {
      password,
      username,
    })
    .then(res => {
      console.log('SUCCESS ===: ', res.data);
      AsyncStorage.setItem('token', res.data.token); //store the token locally to avoid making call to the server when login
      AsyncStorage.setItem('user', JSON.stringify(res.data.user));//
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
    })
    .catch(err => {
      dispatch({
        type: LOGIN_FAIL,
        payload: err.response
          ? err.response.data
          : {error: 'Something goes wrong, try again!'},
      });
    });
};
