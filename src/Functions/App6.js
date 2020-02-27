import React, { useContext, createContext } from 'react';

const ColorContext = createContext();

function App6(){
  return (
    <ColorContext.Provider value='blue'>
      <SimpleHeader/>
      <SimpleHeader/>
    </ColorContext.Provider>
  )
}

function SimpleHeader(){
  const color = useContext(ColorContext);
  return <h1 style={{ color }}>Olá!</h1>
}


export default App6;