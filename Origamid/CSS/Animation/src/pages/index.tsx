import React, { useState } from 'react'
import Produto from '../components/Produto'

const Home = () => {
  const [state, setState] = useState(false)

  return (
    <div>
      <button onClick={
        () => {
          setState(!state)
        }
      }>Ativar</button>

      {state
        &&
        <Produto />
      }



    </div>
  )
}

export default Home