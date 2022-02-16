import React from 'react';

const useLocalStorage = (key, initial = '') => {
  const [theme, setTheme] = React.useState(() => {
    const themes = window.localStorage.getItem(key);
    return themes ? JSON.parse(themes) : initial;
  });

  React.useEffect(() => {
    window.localStorage.setItem(key, theme);
  }, [theme, key]);
  return { theme, setTheme };
};

export default useLocalStorage;
