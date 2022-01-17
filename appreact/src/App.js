import React from 'react';
import './index.css';
import commerce from './lib/commerce';

const App = () => {
  const [produts, setProduts] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  async function fetchProducts() {
    setLoading(true);
    const response = await commerce.products.list();
    setProduts(response.data);
    console.log(response.data[0]);
    setLoading(false);
  }

  React.useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) return <p className='content'>...loading</p>;
  return (
    <div>
      <div className='content'>
        {produts &&
          produts.map(({ id, name, assets, price, description }) => {
            return (
              <div key={id}>
                <img src={assets[0] && assets[0].url} alt='' />
                <h3>{name}</h3>
                {description}
                <p>{price.formatted_with_symbol}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default App;
