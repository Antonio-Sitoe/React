import React from 'react';
import styles from './Produtos.module.css';
import Head from './Head';
import { UserContext } from '../UserContext';

function Produtos() {
  const [produtos, setProdutos] = React.useState(null);
  const context = React.useContext(UserContext);
  console.log(context)
  React.useEffect(() => {
    fetch('http://localhost:1337/homes')
      .then((r) => r.json())
      .then((json) => {
        setProdutos(json);
        return json;
      });
  }, []);
  if (produtos === null) return null;

  return (
    <section className={styles.produtos + ' animeLeft'}>
      <Head title='home' content='site de produtos' />
      {produtos.map(({ id, nome, texto }) => {
        return (
          <div key={id}>
            <h1>{nome}</h1>
            <p>{texto}</p>
          </div>
        );
      })}
    </section>
  );
}

export default Produtos;
