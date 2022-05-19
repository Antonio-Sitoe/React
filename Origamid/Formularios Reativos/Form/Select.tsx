import React from 'react'

interface SelectProps {
  value: string
  setValue: (value: string) => void
  options: String[]
}

const Select = ({
  options,
  setValue,
  value,
  ...props
}: SelectProps) => {
  return (
    <select
      {...props} value={value} onChange={({ target }) => setValue(target.value)}>
      <option disabled>Selecione as options</option>
      {options.map((option, i) => {
        return <option value={`${option}`} key={i}>{option}</option>
      })}
    </select>
  )
}

export default Select