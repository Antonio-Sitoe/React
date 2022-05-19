import Produto from './components/Produto'
import { UserStorage } from './UserContext'

const App = () => {
  return (
    <UserStorage>
      <Produto />
    </UserStorage>
  )
}

export default App