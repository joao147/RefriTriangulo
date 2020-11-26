import React from 'react';

import Context from './context'
import useStogare from '../utils/useStorage'

const StorageProvider = ({children}) => {

  const [token, setToken] = useStogare('token');
  const [isValid, setIsValid] = useStogare('isValid');

  return (
    <Context.Provider
      value={{
        token,
        setToken,
        isValid,
        setIsValid
      }}
    >
      {children}
    </Context.Provider>
  )
}

export default StorageProvider;
