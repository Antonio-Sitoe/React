import React from 'react'
const key = 'produto'

const App = () => {

  const [product, setProduct] = React.useState(() => {
    const storage = window.localStorage.getItem(key)
    return storage ? storage : ""
  })
  const [data, setData] = React.useState({
    nome: "",
    preco: ''
  })

  function saveValueOnLocalStorage(value: string) {
    window.localStorage.setItem(key, value)
  }

  function handleSaveValue({ target }: any) {
    saveValueOnLocalStorage(target.innerText)
    setProduct(target.innerText)
  }

  React.useEffect(() => {
    async function getData() {
      const r = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${product}`)
      const json = await r.json()
      setData(json)
    }
    if (product) {
      getData()
    }

  }, [product])

  return (
    <div>
      <h1>Preferencia: {product}</h1>

      <div style={{ gap: "1rem", display: 'flex' }}>
        <button onClick={handleSaveValue}>notebook</button>
        <button onClick={handleSaveValue}>smartphone</button>
      </div>
      {data && <Produto data={data} />}

    </div>
  )
}

const Produto = ({ data }: { data: { nome: string, preco: string } }) => {

  return <div>
    <h1>{data.nome}</h1>
    <p>{data.preco}</p>
  </div>
}

export default App