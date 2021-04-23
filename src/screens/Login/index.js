import {useNavigation, useRoute} from '@react-navigation/core';
import React, {useState, useContext} from 'react';
import LoginComponent from '../../components/Login';
import loginUser from '../../context/actions/auth/loginUser';
import {GlobalContext} from '../../context/reducers/Provider';

const Login = () => {
  const [form, setForm] = useState({});
  const [justSignedUp, setJustSignedUp] = useState(false);
  const {params} = useRoute();
  const {navigate} = useNavigation();
  const {
    authDispatch,
    authState: {error, loading},
  } = useContext(GlobalContext);

  React.useEffect(() => {
    if (params?.data) {
      console.log('Params ==== ', params);
      setJustSignedUp(true);
      setForm({...form, username: params.data.username});
    }
  }, [params]);

  const onSubmit = () => {
    if (form.username && form.password) {
      loginUser(form)(authDispatch);
    }
  };

  const onChange = ({name, value}) => {
    setJustSignedUp(false);
    setForm({...form, [name]: value});
  };

  return (
    <LoginComponent
      onChange={onChange}
      onSubmit={onSubmit}
      form={form}
      error={error}
      loading={loading}
      justSignedUp={justSignedUp}
    />
  );
};

export default Login;
