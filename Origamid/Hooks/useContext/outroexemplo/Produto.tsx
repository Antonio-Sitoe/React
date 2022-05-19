import React from 'react'
import { GlobalContext } from './Context/GlobalContext'

const Produto = () => {
  const context = React.useContext(GlobalContext)



  return (
    <div>
      <p>{context?.nome}</p>
      <p>{context?.sobrenome}</p>
      <button onClick={context?.handleCLick}>{context.cunt}</button>
    </div>
  )
}

export default Produto