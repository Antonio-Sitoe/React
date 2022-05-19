import React from 'react'

const Home = () => {

  const [options, setOptions] = React.useState('')

  function handleChange({ target }: { target: HTMLInputElement }) {
    setOptions(target.value)
  }
  return (
    <form >
      {options}
      <label htmlFor="" style={{ display: 'flex' }}>
        <input type="radio"
          name="produto"
          value="notebook"
          onChange={handleChange}
        />
        Notebook
      </label>
      <label style={{ display: 'flex' }}>
        <input type="radio"
          name="produto"
          value="smartiphone"
          onChange={handleChange}
        />
        smartiphone
      </label>
      <label style={{ display: "grid" }}>
        <input type="radio"
          name="produto"
          value="tablet"
          onChange={handleChange}
        />
        Tablet
      </label>
    </form>
  )
}

export default Home