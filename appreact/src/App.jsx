import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Content from './components/Content/Content';
import Header from './components/Header/Header';
import useLocalStorage from './components/hooks/uselocalstorage';
import List from './components/List/List';
import PageError from './components/PageError/PageError';
import { GlobalStyle } from './styles/GlobalStyle';
function App() {
  const [menu, setMenu] = React.useState(true);
  const {theme, setTheme} = useLocalStorage('theme', false);

  function openMenu() {
    setMenu(true);
  }
  function closeMenu() {
    setMenu(false);
  }
  React.useEffect(() => {
    if (window.innerWidth < 700) {
      closeMenu();
    }
  }, []);

  React.useEffect(() => {
    function onResize() {
      if (window.innerWidth > 700) {
        openMenu();
      } else {
        closeMenu();
      }
    }
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <BrowserRouter>
      <Header openMenu={openMenu} setTheme={setTheme}  theme={theme} />
      <div className='container'>
        <List closeMenu={closeMenu} menu={menu} theme={theme} />
        <Routes>
          <Route path='' element={<Content closeMenu={closeMenu} />} />
          <Route
            path='docs/:route/*'
            element={<Content closeMenu={closeMenu} />}
          />
          <Route path='*' element={<PageError />} />
        </Routes>
      </div>
      <GlobalStyle theme={theme} />
    </BrowserRouter>
  );
}

export default App;
