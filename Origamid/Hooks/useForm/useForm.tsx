
import React from 'react';

const types: any = {
  cep: {
    regex: /^\d{5}-?\d{3}$/,
    message: 'preencha um CEP, valido'
  },
  email: {
    regex: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
    message: 'Email invalido'
  }
}

const useForm = (type: string | false) => {
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState<null | string>(null);


  function Validate(value: string) {
    if (type === false) return false
    if (value.length === 0) {
      setError("preencha um valor")
      return false
    } else if (types[type] && !types[type].regex.test(value)) {
      setError(types[type].message)
      return false
    } else {
      setError(null)
      return true
    }
  }
  function onChange({ target }: { target: HTMLInputElement }) {
    if (error) Validate(target.value)
    setValue(target.value)
  }

  return {
    value,
    setValue,
    onChange,
    error,
    onblur: () => Validate(value),
    validate: () => Validate(value)
  }
}

export default useForm