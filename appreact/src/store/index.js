import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducers from './reducers';
const store = createStore(reducers);
export default function GlobalStore({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
