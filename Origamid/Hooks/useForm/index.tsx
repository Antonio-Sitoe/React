import React, { FormEvent } from 'react'
import Input from '../../Formularios Reativos/Form/Input'
import useForm from './useForm'

const Home = () => {
  const cep = useForm('cep')
  const email = useForm('email')
  const nome = useForm(false)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (cep.validate())
      console.log('enviou')
    else console.log('Nao enviar')
  }


  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="text"
        id="nome"
        label="Nome"
        error={nome.error}
        value={nome.value}
        onBlur={nome.onblur}
        placeholder="0000-000"
        onChange={nome.onChange}
      />
      <Input
        type="text"
        id="cep"
        label="CEP"
        error={cep.error}
        value={cep.value}
        onBlur={cep.onblur}
        placeholder="0000-000"
        onChange={cep.onChange}
      />
      <Input
        type="email"
        id="email"
        label="Email"
        error={email.error}
        value={email.value}
        onBlur={email.onblur}
        placeholder="antonio@gmail.com"
        onChange={email.onChange}
      />

      <button>Enviar</button>
    </form>
  )
}

export default Home