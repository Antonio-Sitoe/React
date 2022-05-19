interface InputProps {
  value: string
  id: string
  onChange: (e: { target: HTMLInputElement }) => void,
}


const Input = ({ id, value, onChange }: InputProps,) => {
  return (
    <div>
      <label htmlFor={id}>{id}: {value}</label>
      <input type="text"
        value={value}
        onChange={onChange}
        id={id}
      />
    </div>
  )
}

export default Input