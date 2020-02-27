import React, { Component } from 'react';
import './App4.css'

class App4 extends Component {

  componentWillMount() {
    this.setState({
      itens: [
        { nome: 'teste', img: 'http://via.placeholder.com/200x200' },
        { nome: 'teste 2', img: 'http://via.placeholder.com/200x200' },
        { nome: 'teste 3', img: 'http://via.placeholder.com/200x200' },
      ]
    });
  }

  render() {
    return (
      <ul className='lista'>
        {this.state.itens.map(item => 
          (<li key={item.nome}>
            <p>{item.nome}</p>
            <img src={item.img}/>
          </li>
        ))}
      </ul>
    );
  }
}

export default App4;