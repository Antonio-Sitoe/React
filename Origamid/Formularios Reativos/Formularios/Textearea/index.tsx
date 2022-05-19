import React from 'react'

const Home = () => {
  const [textarea, setTextearea] = React.useState('')
  return (
    <div>
      <form action="">
        <p>Mensagem: {textarea}</p>
        <textarea name=""
          value={textarea}
          onChange={({ target }) => setTextearea(target.value)}
          id=""
          cols={30}
          />
      </form>
    </div>
  )
}

export default Home