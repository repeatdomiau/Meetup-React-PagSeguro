import React, { Component } from 'react';

class Item extends Component {

  render() {
    return (
      <li key={this.props.key}>
        <p>{this.props.nome}</p>
        <img src={this.props.img}/>
      </li>
    );
  }
}

export default Item;