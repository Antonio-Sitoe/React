import React from 'react'
import UserContext, { IUserContext } from '../UserContext'

const Produto = () => {
  const constex = React.useContext(UserContext);

  if (constex?.produto) {
    return (
      <div>
        {constex.produto.map(({ nome, preco, id }) => {
          return <li key={id}>
            <h1>{nome}</h1>
            <p>{preco}</p>
          </li>
        })}

        <button onClick={constex?.limparDados}>Limpar Dados</button>
      </div>
    )
  }
  return null



}

export default Produto