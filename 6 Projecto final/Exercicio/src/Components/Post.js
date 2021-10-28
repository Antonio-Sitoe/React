import React from 'react';
import { GET_CONTA } from '../Api';
import useFecth from '../hooks/useFecth';
import useLocalStorage from '../hooks/useLocalStorage';

function Post() {
  const { data, request, loading, error } = useFecth();
  const [local, setLocal] = useLocalStorage('token');

  React.useEffect(() => {
    async function MinhaConta() {
      const { url, options } = GET_CONTA(local);
      const { response, json } = await request(url, options);
      console.log(response, json);
    }
    MinhaConta();
  }, [local, request]);
  return (
    <div>
      {data &&
        data.map(({ id, nome, texto }) => {
          return (
            <div key={id}>
              <h1>{nome}</h1>
              <h1>{texto}</h1>
            </div>
          );
        })}
    </div>
  );
}

export default Post;
