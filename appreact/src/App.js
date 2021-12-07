import React from 'react';

const App = () => {
  const [state, setState] = React.useState(false);
  const handle = React.useCallback(() => {
    console.log('state update');
    setState(true);
  }, []);
  return <Button onClick={handle} />;
};

function Button(props) {
  console.log('button  rednderizouy');
  return <button onClick={props.onClick}>CLICK</button>;
}
export default App;
