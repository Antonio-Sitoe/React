import React from 'react'

const App = () => {
  const [cart, setCart] = React.useState(0);
  const [notificacao, setNotificacao] = React.useState<null | string>(null);
  const timeoutRef = React.useRef(0)

  function handleClick() {
    setCart(cart + 1)
    setNotificacao("Item adicionado ao carrinho");
    
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setNotificacao(null)
    }, 2000);
  }

  return (
    <>
      <p><button onClick={handleClick}>Adicionar ao carrinho {cart}</button></p>
      {notificacao && <p>{notificacao}</p>}
    </>
  )
}

export default App