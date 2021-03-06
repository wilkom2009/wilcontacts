
import {
  EDIT_CONTACT_FAIL,
  EDIT_CONTACT_SUCCESS,
  EDIT_CONTACT_LOADING,
} from '../../../constants/actionsTypes/index';
import axios from '../../../helpers/axiosInterceptor';

export default (form, id) => (dispatch) => (onSuccess) => {
  const requestPayload = {
    country_code: form.phoneCode || '',
    first_name: form.firstName || '',
    last_name: form.lastName || '',
    phone_number: form.phoneNumber || '',
    contact_picture: form.contactPicture || null,
    is_favorite: form.isFavorite || false,
  };

  console.log('requestPayload :>> ', requestPayload);
  dispatch({
    type: EDIT_CONTACT_LOADING,
  });

  axios
    .put(`/contacts/${id}`, requestPayload)
    .then((res) => {
      dispatch({
        type: EDIT_CONTACT_SUCCESS,
        payload: res.data,
      });

      console.log('EDIT DATA : ',res.data);
      onSuccess(res.data);
    })
    .catch((err) => {
      console.log('err', err.response);
      dispatch({
        type: EDIT_CONTACT_FAIL,
        payload: err.response
          ? err.response.data
          : {error: 'Something went wrong, try again'},
      });
    });
};
