import React from 'react'

interface IRadioProps {
  options: String[]
  value: string
  setValue: (value: string) => void
}

const Radio = ({ options, value, setValue, ...props }: IRadioProps) => {

  return (
    <>
      {options.map((option, i) => {
        return <label key={i}>
          <input type="radio"
            value={`${option}`}
            checked={value === option}
            onChange={({ target }) => setValue(target.value)}
            {...props}
          />
          {option}
        </label>
      })}

    </>
  )
}

export default Radio