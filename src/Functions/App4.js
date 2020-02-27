import React, { Component, useState, useEffect } from 'react';
import './App4.css'

function App4() {

  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(
      [
        { nome: 'teste', img: 'http://via.placeholder.com/200x200' },
        { nome: 'teste 2', img: 'http://via.placeholder.com/200x200' },
        { nome: 'teste 3', img: 'http://via.placeholder.com/200x200' },
      ]
    );
  });

  return (
    <ul className='lista'>
      {items.map(item =>
        (<li key={item.nome}>
          <p>{item.nome}</p>
          <img src={item.img} />
        </li>
        ))}
    </ul>
  );
}

export default App4;