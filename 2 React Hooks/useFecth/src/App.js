import React from 'react';
import useFecth from './useFecth';

const App = () => {
  const { request, data, loading, erro } = useFecth();

  React.useEffect(() => {
    async function Fecthdata() {
      const { response, json } = await request(
        'https://ranekapi.origamid.dev/json/api/produto'
      );
      console.log(response);
    }
    Fecthdata();
  }, [request]);
  console.log(data);
  if (loading) return <div>carregando...</div>;
  if (erro) return <div>{erro}</div>;
  return (
    <div>
      {data &&
        data.map((produto) => {
          return <h1 key={produto.id}>{produto.nome}</h1>;
        })}
    </div>
  );
};

export default App;
