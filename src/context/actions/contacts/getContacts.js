import React from 'react';
import {
  GET_CONTACTS_FAIL,
  GET_CONTACTS_LOADING,
  GET_CONTACTS_SUCCESS,
} from '../../../constants/actionsTypes';
import axios from '../../../helpers/axiosInterceptor';

export default () => dispatch => {
  dispatch({
    type: GET_CONTACTS_LOADING,
  });

  axios
    .get('/contacts/')
    .then(res => {
      dispatch({
        type: GET_CONTACTS_SUCCESS,
        payload: res.data,
      });
    })
    .catch(err => {
      dispatch({
        type: GET_CONTACTS_FAIL,
        payload: err.response
          ? err.response.data
          : {error: 'Something goes wrong, try again!'},
      });
    });
};
