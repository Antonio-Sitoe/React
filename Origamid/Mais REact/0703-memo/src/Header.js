import React from 'react';

const Header = () => {
  console.log('Renderizou');
  return (
    <div>
      <h1>Header Aqui</h1>
    </div>
  );
};

export default React.memo(Header);
