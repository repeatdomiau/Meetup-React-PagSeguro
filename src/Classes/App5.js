import React, { Component } from 'react';
import Item from './Item';
import './App4.css'

class App5 extends Component {

  componentWillMount() {
    this.setState({
      items: [
        { nome: 'teste', img: 'http://via.placeholder.com/200x200' },
        { nome: 'teste 2', img: 'http://via.placeholder.com/200x200' },
        { nome: 'teste 3', img: 'http://via.placeholder.com/200x200' },
      ]
    });
  }

  render() {
    return (
      <ul className='lista'>
        {this.state.items.map(item => <Item nome={item.nome} key={item.nome} img={item.img}/> )}
      </ul>
    );
  }
}

export default App5;