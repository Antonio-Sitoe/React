import React, { FormEvent } from 'react'
import { formObject, FormProps } from './components/FormObject'
import Input from './components/Input'
import useFetch from './Hooks/custonHooks/useFetch';

const formObjectProprietes = Object.keys(formObject);
const options = (body: FormProps) => ({
  method: 'POST',
  headers: {
    'Content-Type': "application/json"
  },
  body: JSON.stringify(body)
})
const App = () => {
  const [form, setForm] = React.useState(formObject);
  const { data, loading, request } = useFetch()
  const ref = React.useRef()


  const handleChange = ({ target }: { target: HTMLInputElement }) => {
    const { id, value } = target
    setForm({ ...form, [id]: value })
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    await request('https://ranekapi.origamid.dev/json/api/usuario', options(form))
  }
  return (
    <form onSubmit={handleSubmit}>
      {formObjectProprietes.map((item, i) => {
        console.log(item)
        return <Input
          id={item}
          key={i}
          value={form[`${item}`]}
          onChange={handleChange} />
      })}
      {data && <p>{data.message}</p>}
      {loading === false ?
        <button>Enviar</button>
        :
        <button disabled>A enviar os dados...</button>
      }
    </form>
  )
}

export default App