import React from 'react';

function Input({ type, label, id, input,onChange, setValue, ...rest }) {
  return (
    <label htmlFor={id}>
      <p>{label}</p>
      <input
        id={id}
        name={id}
        type={type ? type : 'text'}
        value={input}
        onChange={onChange}
        {...rest}
      />
    </label>
  );
}

export default Input;
