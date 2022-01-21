import React from 'react';

import { reducer } from './reducers';

export const CartContext = React.createContext();

export const CartStorage = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, {
    cart: [],
  });
  const [total, setTotal] = React.useState(0);

  React.useEffect(() => {
    if (state.cart.length > 0) {
      const total = state.cart.reduce((acumulador, itemActual) => {
        return (acumulador += itemActual.preco);
      }, 0);
      setTotal(total);
    }
    if (state.cart.length === 0) {
      setTotal(0);
    }
  }, [state]);

  React.useEffect(() => {
    const local = JSON.parse(window.localStorage.getItem('cart'));
    if (local !== null && local.cart.length > 0) {
      dispatch({
        type: 'INITIAL_STATE',
        content: local,
      });
    }
  }, []);



  const value = { state, dispatch, total, setTotal };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

