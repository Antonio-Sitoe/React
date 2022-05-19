import React from 'react';


interface Storage {
  nome: string,
  sobrenome: string,
  cunt: Number,
  handleCLick: () => void,
}

export const GlobalContext = React.createContext<Storage | null>(null)


export const GlobalStorage = ({ children }: { children: JSX.Element }) => {

  const [cunt, setCount] = React.useState(0);

  function handleCLick() {
    setCount(cunt + 1)
  }
  const value = {
    nome: 'antonio',
    sobrenome: 'sitoe',
    handleCLick,
    cunt
  }

  return <GlobalContext.Provider value={value}>
    {children}
  </GlobalContext.Provider>
}
