import React from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'remover':
      return state.filter((item) => item !== action.content);
    case 'add':
      return [...state, action.content];

    default:
      break;
  }
}

const Exemplo = () => {
  const [state, dispatch] = React.useReducer(reducer, ['banana', 'uva']);

  return (
    <div>
      <h1>{state}</h1>

      <button onClick={() => dispatch({ type: 'remover', content: 'banana' })}>
        remover banana
      </button>
      <p></p>
      <button onClick={() => dispatch({ type: 'add', content: 'Limao' })}>
        adicionar Limao
      </button>
    </div>
  );
};

export default Exemplo;
