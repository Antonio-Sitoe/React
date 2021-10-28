import React from 'react';
import useFecth from './useFecth';

function App() {
  const { data, request, loading, erro } = useFecth();

  React.useEffect(() => {
    async function Buscar() {
      const { response, json } = await request(
        'https://ranekapi.origamid.dev/json/api/produto'
      );
    }
    Buscar();
  }, [request]);
  console.log(data);
  if (erro) return <div>{erro}</div>;
  if (loading) return <div>carregando..</div>;
  if (data !== null)
    return (
      <div>
        {data.map(({ id, nome }) => {
          return <div key={id}>{nome}</div>;
        })}
      </div>
    );
  return null;
}

export default App;
