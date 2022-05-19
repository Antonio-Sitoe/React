import React from 'react'

const Home = () => {

  const [options, setOptions] = React.useState('')


  return (
    <form>
      <select onChange={({ target }) => setOptions(target.value)} id="produtos" value={options}>
        <option disabled>Select value</option>
        <option value="notebook">notebook</option>
        <option value="smartphone">smartphone</option>
        <option value="tablet">tablet</option>
      </select>

    </form>
  )
}

export default Home