import { createContext } from 'react';

const StorageContext = createContext({
  token: null,
  setToken: () => {},
  isValid: false,
  setIsValid: () => {},
});

export default StorageContext;
