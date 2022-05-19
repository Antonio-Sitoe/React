import React, { FormEvent } from 'react'

interface IEventProps {
  target: HTMLInputElement
}

function App() {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [form, setForm] = React.useState({
    endereco: "",
    rua: ""
  })

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
  }
  function handleChange(event: IEventProps) {
    const { id, value } = event.target;
    setForm({ ...form, [id]: value })
  }


  return (
    <form onSubmit={handleSubmit}>

      <label htmlFor="nome">Nome: {name}</label>
      <input type="text"
        value={name}
        onChange={({ target }) => setName(target.value)} />


      <label htmlFor="email">Email: {email}</label>
      <input type="email"
        value={email}
        required
        onChange={({ target }) => setEmail(target.value)} />

      <label htmlFor="endereco">endereco: {form.endereco}</label>
      <input type="text"
        value={form.endereco}
        id="endereco"
        required
        onChange={handleChange} />

      <label htmlFor="rua">Email: {form.rua}</label>
      <input type="text"
        id="rua"
        value={form.rua}
        required
        onChange={handleChange} />


      <button>Enviar</button>
    </form>
  )
}

export default App