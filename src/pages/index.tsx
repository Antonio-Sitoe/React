import React from 'react'
import Exemplo from '../Components/Exemplo';


function reducer(state: number, action: string): number {
  switch (action) {
    case 'AUMENTAR':
      return state + 1
    case 'DIMINUIR':
      return state - 1
    default:
      throw new Error("Erro");
  }
}

function Home() {

  const [state, dispatch] = React.useReducer(reducer, 0)


  return (
    <div>
      <button onClick={() => dispatch('AUMENTAR')}>+</button>
      <p>{state}</p>
      <button onClick={() => dispatch('DIMINUIR')}>-</button>

      <Exemplo />
    </div>
  )
}

export default Home