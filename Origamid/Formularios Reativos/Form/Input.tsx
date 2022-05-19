import React from 'react'
interface InputProps {
  label: string
  id: string
  value: string
  type: string
  error: null | string
  placeholder?: string
  onBlur: ({ target }: { target: HTMLInputElement }) => void
  onChange: ({ target }: { target: HTMLInputElement }) => void
}


const Input = ({ label, id, onBlur, value, onChange, type, placeholder, error }: InputProps) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        name={id}
        value={value}
        onBlur={onBlur}
        placeholder={placeholder}
        onChange={onChange}
      />
      {error &&
        <p style={{ color: 'tomato' }}>{error}</p>}
    </>
  )
}

export default Input