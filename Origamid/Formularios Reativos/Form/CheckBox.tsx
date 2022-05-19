import React from 'react'
interface ICheckBoxProps {
  options: String[]
  value: String[]
  setValue: (value: String[]) => void
}

interface EventTargetProps {
  target: HTMLInputElement
}

const CheckBox = ({ options, value, setValue }: ICheckBoxProps) => {

  function handleChange({ target }: EventTargetProps) {
    if (target.checked) {
      setValue([...value, target.value])
    } else {
      setValue(value.filter((itemValue) => itemValue !== target.value))
    }

  }
  return (
    <>
      {options.map((option, i) => {
        return <label key={i}>
          <input
            type="checkbox"
            value={`${option}`}
            onChange={handleChange}
            checked={value.includes(option)}
          />
          {option}
        </label>
      })}

    </>
  )
}

export default CheckBox