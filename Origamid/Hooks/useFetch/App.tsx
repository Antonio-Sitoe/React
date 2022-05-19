import React, { FormEvent } from 'react';
import useLocalStorage from './useLocalStorage';
import useFetch from './useFetch'

function App() {
  const [local, setLocal] = useLocalStorage('produto', '');
  const { data, error, loading, request } = useFetch()

  function handleClick({ target }: any) {
    setLocal(target.innerText)
  }

  React.useEffect(() => {

    (async () => {
      const { response, json } = await request('https://ranekapi.origamid.dev/json/api/produto', { METHOD: 'GET' })
    })()
  }, [request])

  if (error) return <p>{error}</p>
  if (loading) return <p>Loading...</p>
  if (data)
    return (
      <div>
        <button onClick={handleClick}>notebook</button>
        <button onClick={handleClick}>tablet</button>
        <div>
          {
            data.map(({ nome }, i) => {
              return <p key={i}>{nome}</p>
            })
          }
        </div>
      </div>
    );
  return null
}

export default App;
