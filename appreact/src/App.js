import React from 'react';
import GlobalStore from './store';
import TodoList from './TodoList';

const App = () => (
  <GlobalStore>
    <TodoList />
  </GlobalStore>
);

export default App;
