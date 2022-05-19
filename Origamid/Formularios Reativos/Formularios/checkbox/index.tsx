import React from 'react'

const Home = () => {
  const [termos, setTermos] = React.useState(false);

  function handleChange({ target }: { target: HTMLInputElement }) {
    setTermos(target.checked)
  }

  return (
    <div>
      <label htmlFor="">
        <input type="checkbox"
          checked={termos}
          onChange={handleChange}
        />
        Aceito os termos do site
      </label>
    </div>
  )
}

export default Home