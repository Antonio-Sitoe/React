import React from 'react';
import useLocalStorage from './hooks/useLocalStorage';

export const UserContext = React.createContext();

export function UserStorage({ children }) {
  const [local, setLocal] = useLocalStorage('token');
  const [logado, setLoagado] = React.useState(() => {
    return local ? true : false;
  });
  const value = { logado, setLoagado };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
