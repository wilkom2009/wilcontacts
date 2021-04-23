import React, {useState, useContext, useRef, useEffect} from 'react';
import {useNavigation, useRoute} from '@react-navigation/core';
import CreateContactComponent from '../../components/CreateContactComponent';
import createContact from '../../context/actions/contacts/createContact';
import {GlobalContext} from '../../context/reducers/Provider';
import {CONTACT_DETAIL, CONTACT_LIST} from '../../constants/routeNames';
import uploadImage from '../../helpers/uploadImage';
import editContact from '../../context/actions/contacts/editContact';
import countryCodes from '../../utils/countryCodes';

const CreateContact = () => {
  const [form, setForm] = useState({});
  const [localFile, setLocalFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);

  const {
    contactsDispatch,
    contactsState: {
      createContact: {loading, error},
    },
  } = useContext(GlobalContext);

  const {navigate, setOptions} = useNavigation();

  const {params} = useRoute();

  const sheetRef = useRef(null);

  useEffect(() => {
    if (params?.contact) {
      setOptions({title: 'Update contact'});
      const {
        first_name: firstName,
        phone_number: phoneNumber,
        last_name: lastName,
        is_favorite: isFavorite,
        country_code: countryCode,
      } = params?.contact;

      setForm(prev => {
        return {
          ...prev,
          firstName,
          isFavorite,
          phoneNumber,
          lastName,
          phoneCode: countryCode,
        };
      });

      const country = countryCodes.find(item => {
        return item.value.replace('+', '') === countryCode;
      });

      if (country) {
        setForm(prev => {
          return {
            ...prev,
            countryCode: country.key.toUpperCase(),
          };
        });
      }

      if (params?.contact?.contact_picture) {
        setLocalFile(params?.contact.contact_picture);
      }
    }
  }, []);

  const onChangeText = ({name, value}) => {
    setForm({...form, [name]: value});
  };

  const toggleValueChange = () => {
    setForm({...form, isFavorite: !form.isFavorite});
  };

  const onSubmit = () => {
    if (params?.contact) {
      if (localFile?.size) {
        setIsUploading(true);
        uploadImage(localFile)(url => {
          setIsUploading(false);
          editContact(
            {...form, contactPicture: url},
            params?.contact.id,
          )(contactsDispatch)(item => {
            navigate(CONTACT_DETAIL, {item});
          });
        })(err => {
          setIsUploading(false);
        });
      } else {
        editContact(form, params?.contact.id)(contactsDispatch)(item => {
          navigate(CONTACT_DETAIL, {item});
        });
      }
    } else {
      if (localFile?.size) {
        setIsUploading(true);
        uploadImage(localFile)(url => {
          setIsUploading(false);
          createContact({...form, contactPicture: url})(contactsDispatch)(
            () => {
              navigate(CONTACT_LIST);
            },
          );
        })(err => {
          setIsUploading(false);
        });
      } else {
        createContact(form)(contactsDispatch)(() => {
          navigate(CONTACT_LIST);
        });
      }
    }
  };

  const closeSheet = () => {
    if (sheetRef.current) {
      sheetRef.current.close();
    }
  };
  const openSheet = () => {
    if (sheetRef.current) {
      sheetRef.current.open();
    }
  };

  const onFileSelected = images => {
    closeSheet();
    setLocalFile(images);
  };

  return (
    <CreateContactComponent
      onChangeText={onChangeText}
      form={form}
      setForm={setForm}
      onSubmit={onSubmit}
      loading={loading || isUploading}
      error={error}
      toggleValueChange={toggleValueChange}
      closeSheet={closeSheet}
      openSheet={openSheet}
      sheetRef={sheetRef}
      onFileSelected={onFileSelected}
      localFile={localFile}
    />
  );
};

export default CreateContact;
