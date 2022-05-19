import React from 'react'

type Produto = Array<IProduto>

export interface IUserContext {
  produto: Produto
  limparDados: () => void
  
}

interface IUserStorage {
  children: JSX.Element
}

interface IProduto {
  id: string, nome: string, preco: string
}




export const UserContext = React.createContext<IUserContext | null>(null)



export const UserStorage = ({ children }: IUserStorage) => {
  const [produto, setProduto] = React.useState<Produto>([])

  React.useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto')
      .then(r => r.json())
      .then(j => setProduto(j))
  }, [])
  function limparDados() {
    setProduto([])
  }
  const value: IUserContext = {
    produto,
    limparDados
  }


  return (
    <UserContext.Provider value={value}>{children}</UserContext.Provider>
  )
}

export default UserContext