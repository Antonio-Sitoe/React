import React from 'react';

function Head(props) {
  React.useEffect(() => {
    document.title = 'Dogs | ' + props.title;
    document
      .querySelector('meta[name="description"]')
      .setAttribute('content', props.descrition);
  }, [props]);
  return <></>;
}

export default Head;
