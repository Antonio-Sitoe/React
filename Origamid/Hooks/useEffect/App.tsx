import React from "react";
import Produto from "./Produto";
interface Data {
  nome: string
  id: string
  preco: string
  usuario_id: string
}
const App = () => {
  const [count, setCount] = React.useState(0);
  const [dados, setDados] = React.useState<Data | null>(null)
  const [modal, setModal] = React.useState(false)

  React.useEffect(() => {
    console.log('Executou')
  }, [])

  React.useEffect(() => {
    window.document.title = `${count}`
  }, [count])

  React.useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto/notebook')
      .then(response => response.json())
      .then(j => { setDados(j) })
  }, [])

  return (
    <div>
      {dados && <div>
        <h1>{dados.nome}</h1>
        <h3>{dados.preco}</h3>
        <p>{dados.usuario_id}</p>
      </div>}

      {modal && <Produto />}
      <button onClick={() => setCount(count + 1)}>{count}</button>
      <button onClick={() => setModal(!modal)}>Ativar</button>
    </div>
  )
}

export default App