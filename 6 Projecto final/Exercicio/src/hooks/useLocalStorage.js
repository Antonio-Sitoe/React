import React from 'react';

function useLocalStorage(key, initial = '') {
  const [local, setLocal] = React.useState(() => {
    const localStorage = window.localStorage.getItem(key);
    return localStorage ? localStorage : initial;
  });

  React.useEffect(() => {
    window.localStorage.setItem(key, local);
  }, [key, local]);

  return [local, setLocal];
}

export default useLocalStorage;
