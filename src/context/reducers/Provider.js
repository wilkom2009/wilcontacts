import React, {createContext, useReducer} from 'react';
import authInitState from '../initialsStates/authInitState';
import contactsInitState from '../initialsStates/contactsInitState';
import auth from './auth';
import contacts from './contacts';

export const GlobalContext = createContext({});

const GlobalProvider = ({children}) => {
  const [authState, authDispatch] = useReducer(auth, authInitState);
  const [contactsState, contactsDispatch] = useReducer(
    contacts,
    contactsInitState,
  );
  return (
    <GlobalContext.Provider
      value={{
        authState,
        contactsState,
        authDispatch,
        contactsDispatch,
      }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
