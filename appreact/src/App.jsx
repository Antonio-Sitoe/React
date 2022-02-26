import React from 'react';

const App = () => {
  const [count, setCount] = React.useState(0);
  
  React.useEffect(() => {
    console.log(count);
    window.document.title = count;
  }, []);

  return (
    <div className='container'>
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </div>
  );
};

export default App;
