import {useNavigation} from '@react-navigation/core';
import {useFocusEffect} from '@react-navigation/native';
import React, {useContext, useState} from 'react';
import RegisterComponent from '../../components/Register';
import {LOGIN} from '../../constants/routeNames';
import register, {clearAuthState} from '../../context/actions/auth/register';
import {GlobalContext} from '../../context/reducers/Provider';

const Register = () => {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const {navigate} = useNavigation();
  const {
    authDispatch,
    authState: {error, loading, data},
  } = useContext(GlobalContext);

  /* React.useEffect(() => {
    if (data) {
      navigate(LOGIN);
    }
  }, [data]); */

  useFocusEffect(
    React.useCallback(() => {
      return () => {
        if (data || error) {
          clearAuthState()(authDispatch);
        }
      };
    }, [data, error]),
  );

  const onChange = ({name, value}) => {
    setForm({...form, [name]: value});

    if (value !== '') {
      if (name === 'password') {
        if (value.length < 6) {
          setErrors(prev => {
            return {...prev, [name]: 'This field needs min 6 caracters!'};
          });
        } else {
          setErrors(prev => {
            return {...prev, [name]: null};
          });
        }
      } else {
        setErrors(prev => {
          return {...prev, [name]: null};
        });
      }
    } else {
      setErrors(prev => {
        return {...prev, [name]: 'This field is required!'};
      });
    }
  };

  const onSubmit = () => {
    //validation
    //console.log('Form : ', form);

    if (!form.username) {
      setErrors(prev => {
        return {...prev, username: 'Please add username'};
      });
    }
    if (!form.firstName) {
      setErrors(prev => {
        return {...prev, firstName: 'Please add first name'};
      });
    }
    if (!form.lastName) {
      setErrors(prev => {
        return {...prev, lastName: 'Please add Last Name'};
      });
    }
    if (!form.email) {
      setErrors(prev => {
        return {...prev, email: 'Please add Email'};
      });
    }
    if (!form.password) {
      setErrors(prev => {
        return {...prev, password: 'Please add password'};
      });
    }

    if (
      Object.values(form).length === 5 &&
      Object.values(form).every(item => item.trim()) &&
      Object.values(errors).every(item => !item)
    ) {
      console.log('11111', 33333);
      register(form)(authDispatch)(response => {
        navigate(LOGIN, {data: response});
      });
    }
  };

  return (
    <RegisterComponent
      onChange={onChange}
      onSubmit={onSubmit}
      form={form}
      errors={errors}
      error={error}
      loading={loading}
    />
  );
};

export default Register;
