import React from 'react';

const Hats = props => {
  return (
    <>
      <h1>Hats</h1>
      <button onClick={() => props.history.push('/')}>Redirect me</button>
    </>
  );
};

export default Hats;
