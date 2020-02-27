import React from 'react';

function Item(props){

  return (
    <li key={props.key}>
          <p>{props.nome}</p>
          <img src={props.img} />
        </li>
  );

}

export default Item;