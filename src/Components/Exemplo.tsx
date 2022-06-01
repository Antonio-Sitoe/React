
import React from 'react'

type State = {
  content: Array<string>
}

type Actions = { type: string, content: string }


function reducer(state: State, action: Actions) {

  switch (action.type) {
    case 'REMOVER':
      return { content: state.content.filter((item => item !== action.content)) }
    case 'ADD':

      state.content.push(action.content)

      return { content: state.content }

    default:
      break;
  }



}

interface Props {

  reducer: () => void,
  state: State

}

const Exemplo = () => {

  const [state, dispatch] = React.useReducer<Props>(reducer, { content: ['banana', 'Uva'] })



  return (
    <div>

      <button onClick={() => dispatch({ type: 'REMOVER', content: 'banana' })}>REmover banana</button>
      <button onClick={() => dispatch({ type: 'ADD', content: 'turanja' })}>Add turanja</button>

      <p>{state.content.map(i => <p>{i}</p>)}</p>
    </div>
  )
}

export default Exemplo