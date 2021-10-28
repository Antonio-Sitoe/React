import React from 'react';

function Input({
  label,
  erro,
  id,
  type,
  placeholder,
  value,
  onChange,
  onBlur,
}) {
  return (
    <label htmlFor={id}>
      <p>{label}</p>
      <input
        type={type ? type : 'text'}
        id={id}
        name={id}
        value={value}
        onBlur={onBlur}
        onChange={onChange}
        placeholder={placeholder}
      />
      {erro && <p className='error'>{erro}</p>}
    </label>
  );
}

export default Input;
