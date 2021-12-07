import React from 'react';

function Head(props) {
  React.useEffect(() => {
    document.title = `Ranek | ${props.title}`;
    document
      .querySelector('meta[name="description"]')
      .setAttribute('content', props.content);
  });
  return <></>;
}

export default Head;
