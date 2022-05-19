import UserContext from "./Context/UserContext"
import Produto from "./Produto"

const App = () => {

  const value = {
    nome: 'antonio',
    sobrenome: 'sitoe'
  }
  return (
    <UserContext.Provider value={value}>
      <Produto />
    </UserContext.Provider>
  )
}

export default App