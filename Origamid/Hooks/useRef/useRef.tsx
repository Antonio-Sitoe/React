import React from "react"

const App = () => {
  const video = React.useRef(null);
  const [comentarios, setComentaarios] = React.useState(['teste'])
  const [input, setInput] = React.useState('');
  const inputRef = React.useRef<HTMLInputElement | null>(null)

  React.useEffect(() => {
    console.log(video.current)
  }, [])
  function handleClick(e: any) {
    e.preventDefault()
    setComentaarios([...comentarios, input])
    setInput('')
    inputRef.current?.focus()
  }
  return (
    <div ref={video}>
      <form onSubmit={handleClick}>
        <input ref={inputRef} type="text"
          value={input}
          onChange={({ target }) => setInput(target.value)} />
        <button>Enviar</button>
      </form>

      <ul>
        {comentarios.map((comentario, i) => {
          return <li key={i}>{comentario}</li>
        })}
      </ul>
    </div>
  )
}

export default App