import React from 'react';
import Exemplo from './Exemplo';

function reducer(state, action) {
  switch (action) {
    case 'aumentar':
      return state + 1;
    case 'diminuir':
      return state - 1;
    default:
      return new Error();
  }
}

const App = () => {
  const [state, dispatch] = React.useReducer(reducer, 0);

  function aumentar() {
    dispatch('aumentar');
  }
  function diminuir() {
    dispatch('diminuir');
  }
  return (
    <div>
      <button onClick={aumentar}>+</button>
      <button onClick={diminuir}>+</button>
      <p>{state}</p>
      <Exemplo/>
    </div>
  );
};

export default App;
