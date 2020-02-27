import React, { Component, useState, useEffect } from 'react';
import Item from './Item';
import './App4.css'

function App5() {

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
      {items.map(item => <Item nome={item.nome} key={item.nome} img={item.img}/>)}
    </ul>
  );
}

export default App5;