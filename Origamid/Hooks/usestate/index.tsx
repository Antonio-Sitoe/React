
import React from 'react'
import Produto from './components/Produto';

export interface Data {
  nome: string,
  preco: string,
  fotos: Array<{
    src: string
  }>
}

const App = () => {
  const mobiles = ['notebook', 'smartphone', 'tablet']
  const [data, setData] = React.useState<Data>({
    fotos: [], nome: '', preco: ''
  });
  const [loading, setLoading] = React.useState(false)

  async function getData({ target }: any) {
    setLoading(true)

    const response = await fetch('https://ranekapi.origamid.dev/json/api/produto/' + target.innerText)
    const json = await response.json()

    setData(json)
    setLoading(false)
  }

  return (
    <div>
      {mobiles.map((mobile, index) => <button
        key={index}
        onClick={getData}
      >{mobile}</button>)}
      {loading && <p>Carregando...</p>}
      {data && <Produto data={data} />}
    </div>
  )
}

export default App