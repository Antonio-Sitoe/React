import { useEffect, useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [modal, setModal] = useState(false)

  const [items, setItems] = useState([`items ${count}`])
  const [dados, setDados] = useState<{}>({ nome: 'antonio' })

  function handleClick() {
    setCount(count + 1)
    setItems([...items, `items ${count + 1}`])
    setDados({
      ...dados, idade: 30
    })
  }

  return (
    <div>
      {items.map((i) => <li key={i}>{i}</li>)}
      <button onClick={handleClick}>{count}</button>
    </div>
  )
}

export default App

