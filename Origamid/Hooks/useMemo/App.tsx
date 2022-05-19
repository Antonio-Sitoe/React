import React from 'react'

function operacao() {
  let c;
  for (let i = 0; i < 1_000_000_00; i++) {
    c = i + i / 100
  }
  return c
}

const App = () => {
  const [count, setCount] = React.useState(0)

  const t1 = performance.now()
  const valor = React.useMemo(() => operacao(), [])
  console.log(valor)
  console.log(performance.now() - t1)


  function handleContar() {
    setCount(count + 1)
  }
  return (
    <div>

      <button onClick={handleContar}>{count}</button>
    </div>
  )
}

export default App