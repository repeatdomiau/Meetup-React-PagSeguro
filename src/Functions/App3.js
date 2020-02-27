import React, { Component, useState } from 'react';

function App3() {

  const [valor, setValor] = useState(10)


  function addOne() {
    setValor(valor + 1);
  }

  function buttonStyle() {
    return {
      padding: 10,
      border: '1px solid silver',
      backgroundColor: '#f1f1f1',
      cursor: 'pointer'
    }
  }

  return (
    <div>
      <h1>{valor}</h1>
      <buton onClick={addOne} style={buttonStyle()}>click</buton>
    </div>
  );
}

export default App3;