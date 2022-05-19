import { GlobalStorage } from "./Context/GlobalContext"
import Produto from "./Produto"

const App = () => {
  console.log('sdsdsdsdsds')

  return (
    <GlobalStorage>
      <Produto />
    </GlobalStorage>
  )
}

export default App